<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserAdminController extends Controller
{
    public function index(Request $request, $role)
    {
        $searchName = $request->input('searchName');
        $searchClass = $request->input('searchClass');

        // $users = User::where('role', $role)->get();

        $users = User::where('role', $role)
            ->when($searchName, function ($query) use ($searchName) {
                $query->where('name', 'like', '%' . $searchName . '%');
            })
            ->when($searchClass, function ($query) use ($searchClass) {
                $query->where('class_id', 'like', '%' . $searchClass . '%');
            })
            ->get();

        $classes = Classes::all();

        if ($role == 'guru') {
            return Inertia::render('Admin/DataMaster/User/UserIndexGuru', compact('users', 'classes'));
        } else {
            return Inertia::render('Admin/DataMaster/User/UserIndexMurid', compact('users', 'classes'));
        };
    }

    public function create($role)
    {
        $classes = Classes::all();

        if ($role == "guru") {
            return Inertia::render('Admin/DataMaster/User/UserCreateGuru');
        } else {
            return Inertia::render('Admin/DataMaster/User/UserCreateMurid', compact('classes'));
        }
    }

    public function storeMurid(Request $request)
    {
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/materi'), $fileName);
        };

        $users = User::create([
            'name' => $request->name,
            'class_id' => $request->class_id,
            'role' => 'murid',
            'photo' => $fileName,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        $users->assignRole('murid');

        return to_route('user-admin.index', 'murid');
    }

    public function storeGuru(Request $request)
    {
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/user/photo'), $fileName);
        };

        $users = User::create([
            'name' => $request->name,
            'nip' => $request->nip,
            'role' => 'guru',
            'photo' => $fileName,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
        $users->assignRole('guru');

        return to_route('user-admin.index', 'guru');
    }

    public function show($role, $id)
    {
        $users = User::where('id', $id)->first();

        $classes = Classes::all();

        if ($role == 'guru') {
            return Inertia::render('Admin/DataMaster/User/UserShowGuru', compact('users'));
        } else {
            return Inertia::render('Admin/DataMaster/User/UserShowMurid', compact('users', 'classes'));
        };
    }

    public function edit($role, $id)
    {
        $users = User::where('id', $id)->first();

        $classes = Classes::all();

        if ($role == "guru") {
            return Inertia::render('Admin/DataMaster/User/UserEditGuru', compact('users'));
        } else {
            return Inertia::render('Admin/DataMaster/User/UserEditMurid', compact('users', 'classes'));
        }
    }

    public function updateMurid(Request $request, $id)
    {
        $users = User::find($id);

        if ($request->hasFile('photo')) {
            Storage::delete("public/user/photo" . $users->photo);

            $file = $request->file('photo');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/user/photo'), $fileName);
        } else {
            $fileName = $users->photo;
        }

        $usersUpdate = $request->only(['name', 'class_id', 'role', 'photo', 'email']);
        $usersUpdate['photo'] = $fileName;

        if (!empty($request->password)) {
            $usersUpdate['password'] = $request->password;
        }

        $users->update($usersUpdate);

        return to_route('user-admin.index', 'murid');
    }

    public function updateGuru(Request $request, $id)
    {
        $users = User::find($id);

        if ($request->hasFile('photo')) {
            Storage::delete("public/user/photo" . $users->photo);

            $file = $request->file('photo');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/user/photo'), $fileName);
        } else {
            $fileName = $users->photo;
        }

        $usersUpdate = $request->only(['name', 'nip', 'role', 'photo', 'email']);
        $usersUpdate['photo'] = $fileName;

        if (!empty($request->password)) {
            $usersUpdate['password'] = $request->password;
        }

        $users->update($usersUpdate);

        return to_route('user-admin.index', 'guru');
    }

    public function destroy($role, $id)
    {
        $users = User::find($id);

        Storage::delete('public/user/photo/' . $users->file);

        $users->delete();

        if ($role == "guru") {
            return to_route('user-admin.index', 'guru');
        } else {
            return to_route('user-admin.index', 'murid');
        }
    }
}

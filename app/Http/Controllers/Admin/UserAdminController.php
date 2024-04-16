<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class UserAdminController extends Controller
{
    public function index($role)
    {
        $users = User::where('role', $role)->get();

        if ($role == 'guru') {
            return Inertia::render('Admin/DataMaster/DataMasterGuruIndex', compact('users'));
        } else {
            return Inertia::render('Admin/DataMaster/DataMasterMuridIndex', compact('users'));
        };
    }

    public function create($role)
    {
        if ($role == "guru") {
            return Inertia::render('Admin/DataMaster/DataMasterGuruCreate');
        } else {
            return Inertia::render('Admin/DataMaster/DataMasterMuridCreate');
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
    }

    public function show($id, $role)
    {
        $users = User::where('id', $id)->first();

        if ($role == 'guru') {
            return Inertia::render('Admin/DataMaster/DataMasterGuruShow', compact('users'));
        } else {
            return Inertia::render('Admin/DataMaster/DataMasterMuridShow', compact('users'));
        };
    }

    public function edit($id, $role)
    {
        $users = User::where('id', $id)->first();

        if ($role == "guru") {
            return Inertia::render('Admin/DataMaster/DataMasterGuruEdit', compact('users'));
        } else {
            return Inertia::render('Admin/DataMaster/DataMasterMuridEdit', compact('users'));
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

        $usersUpdate = $request->only(['name', 'class_id', 'role', 'photo', 'email', 'password']);

        $users->update($usersUpdate);
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

        $usersUpdate = $request->only(['name', 'nip', 'role', 'photo', 'email', 'password']);

        $users->update($usersUpdate);
    }

    public function destroy($id)
    {
        $users = User::find($id);

        Storage::delete('public/user/photo/' . $users->file);

        $users->delete();
    }
}

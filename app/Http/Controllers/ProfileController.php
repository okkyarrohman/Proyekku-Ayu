<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Classes;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function show()
    {
        $users = User::where('id', Auth::user()->id)->with(['classes'])->first();

        return Inertia::render('Pengaturan/Profile/ProfileShow', compact('users'));
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $users = User::where('id', Auth::user()->id)->with(['classes'])->first();

        $classes = Classes::all();

        return Inertia::render('Pengaturan/Profile/ProfileEdit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'users' => $users,
            'classes' => $classes
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request, string $id): RedirectResponse
    {
        $users = User::find($id);

        $usersUpdate = $request->except(['password']);

        if ($request->hasFile('photo')) {
            Storage::delete("public/user/photo/" . $users->photo);

            $file = $request->file('photo');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/user/photo'), $fileName);
        } else {
            $fileName = $users->photo;
        }

        $usersUpdate['photo'] = $fileName;

        if (!empty($request->password)) {
            $usersUpdate['password'] = $request->password;
        }

        $users->update($usersUpdate);

        // $request->user()->fill($request->validated());

        // if ($request->user()->isDirty('email')) {
        //     $request->user()->email_verified_at = null;
        // }

        // $request->user()->save();

        // return Redirect::route('profile.edit');
        return to_route('profile.show', Auth::user()->id);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}

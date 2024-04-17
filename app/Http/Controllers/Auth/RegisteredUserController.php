<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Classes;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $classes = Classes::all();

        return Inertia::render('Auth/Register', compact('classes'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'class_id' => 'required',
            'photo' => 'required',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $extension = $file->getClientOriginalName();
            $fileName = date('YmdHis') . "." . $extension;
            $file->move(storage_path('app/public/user/photo'), $fileName);
        };

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'class_id' => $request->class_id,
            'photo' => $fileName,
            'role' => 'murid',
            'password' => Hash::make($request->password),
        ]);
        $user->assignRole('murid');

        event(new Registered($user));

        Auth::login($user);

        if (Auth::user()->hasRole('guru')) {
            return redirect()->intended(RouteServiceProvider::HOME_GURU);
        } else if (Auth::user()->hasRole('murid')) {
            return redirect()->intended(RouteServiceProvider::HOME_MURID);
        } else if (Auth::user()->hasRole('admin')) {
            return redirect()->intended(RouteServiceProvider::HOME_ADMIN);
        }

        // return redirect(RouteServiceProvider::HOME);
    }
}

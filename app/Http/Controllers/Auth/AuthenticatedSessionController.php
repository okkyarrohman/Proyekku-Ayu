<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Providers\RouteServiceProvider;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        if (Auth::user()->hasRole('guru')) {
            $user = Auth::user();

            // Set waktu login untuk sesi ini
            $user->session_login_at = Carbon::now();
            $user->save();

            return redirect()->intended(RouteServiceProvider::HOME_GURU);
        } else if (Auth::user()->hasRole('murid')) {
            $user = Auth::user();

            // Set waktu login untuk sesi ini
            $user->session_login_at = Carbon::now();
            $user->save();

            return redirect()->intended(RouteServiceProvider::HOME_MURID);
        } else if (Auth::user()->hasRole('admin')) {
            return redirect()->intended(RouteServiceProvider::HOME_ADMIN);
        }
        // return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Update total waktu login saat logout
        $user = Auth::user();

        // Hitung selisih waktu dan tambahkan ke total_login_time
        if ($user->session_login_at) {
            $timeDifference = Carbon::parse($user->session_login_at)->diffInMinutes(Carbon::now());
            $user->total_login_time += $timeDifference;
        }

        // Reset waktu login untuk sesi ini
        $user->session_login_at = null;
        $user->save();

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}

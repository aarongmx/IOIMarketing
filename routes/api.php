<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::get('me', 'AuthController@me');
    Route::put('update', 'AuthController@update');
});

Route::get('login/{service}', 'SocialLoginController@redirect');
Route::get('login/{service}/callback', 'SocialLoginController@callback');

Route::post('reset', 'ForgotPasswordController@sendResetLinkEmail');
Route::post('recover', 'ForgotPasswordController@recoverPassword');

Route::post('contact', 'ContactController');

Route::get('planes', 'PlanesController@index');
Route::get('planes/{plan}', 'PlanesController@show');

Route::apiResource('campaings', 'CampaniasController');

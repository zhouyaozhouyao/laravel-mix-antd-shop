<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/vue', function () {
    return view('index');
});

Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => 'param'], function ($router) {
    $router->post('login', function () {
        return response()->json([
            'ret_code' => 0,
            'msg' => '',
            'data' => [
                'id' => 1,
                'username' => 'zhouyao',
                'password' => 123456,
                'token' => 123123123
            ]
        ]);
    });

    $router->post('getInfo', function () {
        return response()->json([
            'ret_code' => 0,
            'msg' => '',
            'data' => [
                'role' => ['admin']
            ]
        ]);
    });

    $router->post('getMenu', function () {
        $json = '{"router":[{"path":"/","component":"layouts/MenuView","redirect":"dashboard","icon":"none","invisible":true,"children":[{"path":"/dashboard","name":"首页222","component":"layouts/RouteView","icon":"dashboard","children":[{"path":"/dashboard/analysis","name":"分析页222","component":"pages/dashboard/Analysis","icon":"none"},{"path":"/dashboard/test","name":"测试路由一22","component":"layouts/MenuView","icon":"none"}]}]}]}
';
    $arr = json_decode($json, true);
    return response()->json(['ret_code' => 0, 'msg' => '', 'data' => $arr]);
    });
});
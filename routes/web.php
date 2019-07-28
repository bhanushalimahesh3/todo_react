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
    return view('todo');
});

Route::get('/todos', 'TodoController@index');
Route::post('/todos', 'TodoController@create');
Route::delete('/todos/{id}', 'TodoController@destroy');

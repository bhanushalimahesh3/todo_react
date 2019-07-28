<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TodoModel;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $todo = TodoModel::get();

        if($todo->isEmpty()) {
            return response()->json(['status' => 'e', 'message' => 'No todo found', 'data' => []]);
        }else{
            return response()->json(['status' => 's', 'message' => 'Todo list loaded!!', 'data' => $todo]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
      $isCreated = TodoModel::create(['name' => $request->todo]);

      if($isCreated)  {
        return response()->json(['status' => 's', 'message' => 'Todo added successfully!!!']);
      }else{
        return response()->json(['status' => 'e', 'message' => 'Something looks wrong!!!']);
      }  
      
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $isDeleted = TodoModel::destroy($id);

        if($isDeleted)  {
          return response()->json(['status' => 's', 'message' => 'Todo deleted successfully!!!']);
        }else{
          return response()->json(['status' => 'e', 'message' => 'Something looks wrong!!!']);
        } 
    }
}

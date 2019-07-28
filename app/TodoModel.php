<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TodoModel extends Model
{
    protected $table = 'todos';

    protected $guarded = ['id'];
}


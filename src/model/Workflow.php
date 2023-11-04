<?php
namespace Flarum\Mentions\Model;
use Illuminate\Database\Eloquent\Model;

class Workflow extends Model
{
    protected $connection = 'texera_db';
    protected $table = 'workflow';
    protected $primaryKey = 'wid';
    public $timestamps = false;
}
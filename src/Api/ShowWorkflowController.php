<?php
namespace Flarum\Mentions\Api;

use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Flarum\Api\Controller\AbstractShowController;

use Illuminate\Support\Arr;
use Illuminate\Database\Eloquent\Collection;
use Flarum\Http\RequestUtil;

use Illuminate\Database\Eloquent\Model;

class Workflow extends Model
{
   // protected $connection = 'texera_db';
    protected $table = 'texera_db.workflow';
    protected $primaryKey = 'wid';
    public $timestamps = false;
}
use Flarum\Api\Serializer\AbstractSerializer;

class WorkflowSerializer extends AbstractSerializer{
    public function getId($workflow) {
        return $workflow[0]->wid;
    }

    protected function getDefaultAttributes($workflow){
        $attributes =[];
        error_log($workflow);
        foreach ($workflow as $w) {
            error_log($w->wid); // This should log the 'wid' of each workflow
            $attributes[$w->wid] = $w->name;
        }

    return $attributes;
    }

}
class ShowWorkflowController extends AbstractShowController
{
    public $serializer = WorkflowSerializer::class;
    
    

    protected function data(ServerRequestInterface $request, Document $document)
    {
        $name = Arr::get($request->getQueryParams(), 'name');
        error_log("name is ". $name);
        #$actor = RequestUtil::getActor($request);
        $workflow = Workflow::where('name', 'like', $name .'%')
        ->limit(10)
        ->get(['name', 'wid']);
        foreach ($workflow as $w) {
            error_log($w->wid); // This should log the 'wid' of each workflow
        }
        

        return $workflow;
    }
}

<?php
namespace Flarum\Mentions\Api;

use Flarum\Api\Serializer\AbstractSerializer;

class WorkflowSerializer extends AbstractSerializer{

    protected function getDefaultAttributes($workflow){
        $attributes =["name" => $workflow->name,
    "id" => $workflow->wid];
    return $attributes;
    }

}
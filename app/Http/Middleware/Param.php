<?php

namespace App\Http\Middleware;

use Closure;

class Param
{
    /**
     * 转换后端参数为数组
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $param = $request->input('param');
        $input = json_decode($param, true);
        $request->merge(['param' => $input]);
        return $next($request);
    }
}

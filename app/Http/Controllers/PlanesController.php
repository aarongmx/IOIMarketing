<?php

namespace App\Http\Controllers;

use App\Planes;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PlanesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $planes = Planes::all();
        return response()->json($planes, Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Planes  $planes
     * @return \Illuminate\Http\Response
     */
    public function show(Planes $plan)
    {
        return response()->json($plan, Response::HTTP_OK);
    }
}

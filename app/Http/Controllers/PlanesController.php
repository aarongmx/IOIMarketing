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
        $planes=Planes::all();
        return response()->json($planes,200);
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
     * @param  \App\Planes  $planes
     * @return \Illuminate\Http\Response
     */
    public function show(Planes $planes)
    {
        $plan=Planes::where('slug',$planes)->first();dd($plan);
        return response()->json($plan,200);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Planes  $planes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Planes $planes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Planes  $planes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Planes $planes)
    {
        //
    }
}

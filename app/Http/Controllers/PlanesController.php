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
        // dd(trim(Planes::all()));
        return response()->json(Planes::all(), Response::HTTP_OK);
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
    public function show(Planes $plane)
    {
        return response()->json($plane, Response::HTTP_OK);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Planes  $planes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Planes $plane)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Planes  $planes
     * @return \Illuminate\Http\Response
     */
    public function destroy(Planes $plane)
    {
        //
    }
}

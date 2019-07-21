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
        foreach ($planes as $plan) {
            $plan->caracteristicas = $this->formatoCaracteristicas($plan->caracteristicas);
        }
        return response()->json($planes, Response::HTTP_OK);
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
        $plane->caracteristicas = $this->formatoCaracteristicas($plane->caracteristicas);
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


    private function formatoCaracteristicas($caracteristicas) {
        return explode(',', str_replace(', ', ',', $caracteristicas));
    }
}

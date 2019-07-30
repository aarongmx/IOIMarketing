<?php

namespace App\Http\Controllers;

use App\Campanias;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Validator;
use Storage;

class CampaniasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            "data" => Campanias::all()
        ], Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCampanias  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->json()->all(), [
            'titulo' => 'max:240',
            'imagen' => 'image'
        ]);

        if($validator->fails()) {
            return response()->json([
                "message" => "Por favor introduzca información válida " . $validator->errors()
            ], Response::HTTP_OK);
        }

        $file = $request->file('imagen');
        Storage::putFile('public', $file);

        $campaing = new Campanias($request->all());
        $campaing->imagen = $file->hashName();
        $campaing->slug =  Str::slug($request->titulo);
        $campaing->save();

        return response()->json([
            "message" => "¡Campaña creada correctamente!"
        ], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Campanias  $campanias
     * @return \Illuminate\Http\Response
     */
    public function show(Campanias $campaing)
    {
        return response()->json(["data" => $campaing], Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Campanias  $campanias
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campanias $campaing)
    {
        $validator = Validator::make($request->json()->all(), [
            'titulo' => 'max:240',
            'description' => 'min:30',
            'imagen' => 'image'
        ]);

        if ($validator->fails()) {
            return response()->json([
                "message" => "¡Por favor introduzca información válida! " . $validator->errors()
            ], Response::HTTP_OK);
        }

        $campaing->update($request->all());
        $campaing->save();

        return response()->json([
            "message" => "¡Campaña actualizada correctamente!"
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Campanias  $campanias
     * @return \Illuminate\Http\Response
     */
    public function destroy(Campanias $campaing)
    {
        $campaing->delete();
        return response()->json([
            "message" => "¡Campaña elimiada correctamente!"
        ], Response::HTTP_OK);
    }
}

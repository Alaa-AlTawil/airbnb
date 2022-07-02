<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Place;
class PlaceController extends Controller
{
    function getAllPlaces(){
        
            $places=Place::all();
            return response()->json([
                "status" => "success",
                "items" => $place
            ],200);
    
        
    }
    function addPlace(Request $request){
        
        $place=new Place;
        $place->title=$request->title;
        $place->description=$request->description;
        $place->image=$request->image;
        $place->category=$request->category;
        $place->price=$request->price;
        $place->save();
        
        return response()->json([
            "status" => "success"],200);

    
}
}

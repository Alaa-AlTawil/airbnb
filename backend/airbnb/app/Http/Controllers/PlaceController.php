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
                "items" => $places
            ],200);
    
        
    }
    function getPlacesByCategoryName(Request $request){
        $places=Place::where("category",$request->category)->get();
        return response()->json([
            "status" => "success",
            "items" => $places
        ],200);

    
}
    function addPlace(Request $request){
        
        $place=new Place;
        $place->title=$request->title;
        $place->description=$request->description;
        $place->rate=$request->rate;
        $place->image=$request->image;
        $place->date=$request->date;
        $place->category=$request->category;
        $place->price=$request->price;
        $place->save();
        
        return response()->json([
            "status" => "success"],200);

    
}
function getPlacesByPriceRange(Request $request){
    $places=Place::where("price" ,">", $request->min_price)->where("price" ,"<", $request->max_price)->get();
    return response()->json([
        "status" => "success",
        "items" => $places
    ],200);


}
}

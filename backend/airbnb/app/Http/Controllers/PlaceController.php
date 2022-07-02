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
  
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContractsSample;
use Illuminate\Support\Facades\Response;

class ContractsSampleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contract_samples = ContractsSample::all();
        return Response::json(array('data' => $contract_samples), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\Models\ContractsSample  $contractsSample
     * @return \Illuminate\Http\Response
     */
    public function show(ContractsSample $contractsSample)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ContractsSample  $contractsSample
     * @return \Illuminate\Http\Response
     */
    public function edit(ContractsSample $contractsSample)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ContractsSample  $contractsSample
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ContractsSample $contractsSample)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ContractsSample  $contractsSample
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContractsSample $contractsSample)
    {
        //
    }
}

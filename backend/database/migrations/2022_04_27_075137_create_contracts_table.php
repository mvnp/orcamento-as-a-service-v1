<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contracts', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('partner_id')->constrained();
            $table->foreignId('customer_id')->constrained();
            $table->foreignId('contracts_propertier_id')->constrained();
            $table->longText('html_contract')->nullable();
            $table->text('file_contract')->nullable();
            $table->boolean('accepted');
            $table->dateTime('accepted_date');
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('contracts');
    }
}

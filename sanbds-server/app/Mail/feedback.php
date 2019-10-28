<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class feedback extends Mailable
{
    use Queueable, SerializesModels;

    public $noidung;
    public $tieude;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct( $noidung,$tieude)
    {

        $this->noidung = $noidung;
        $this->tieude = $tieude;

    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('lequangbksg02@gmail.com')->view('feedback');    }
}

<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MyLichHen extends Mailable
{
    use Queueable, SerializesModels;
    public $name;
    public $phone;
    public $email;
    public $thongtinthem;
    public $ngayhen;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($name, $phone, $email, $thongtinthem, $ngayhen)
    {
        $this->name = $name;
        $this->phone = $phone;
        $this->email = $email;
        $this->thongtinthem = $thongtinthem;
        $this->ngayhen = $ngayhen;
    }

    /**
     * Build the message.*

     * @return $this
     */
    public function build()
    {
        return $this->from('lequangbksg02@gmail.com')->view('lichhen');
    }
}

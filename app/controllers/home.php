<?php

class home extends Controller {
    public function index() {
        session_start();
        $this->view('header', ['page_title' => 'Home']);      
    }   
}
?>
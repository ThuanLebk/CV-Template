<?php

class logout extends Controller {
    public function index() {
        $this->view('header', ['page_title' => 'Logout']);      
    }
}

?>
<?php

class login extends Controller {
    public function index() {
        $this->view('header', ['page_title' => 'Login', 'css' => '<link rel="stylesheet" href="./css/style-login-form.css">']);   
        $this->view('login/index');
    }
}

?>
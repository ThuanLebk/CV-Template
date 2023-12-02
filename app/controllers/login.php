<?php

class login extends Controller
{
    public function index()
    {
        $this->view('header', ['page_title' => 'Login', 'css' => '<link rel="stylesheet" href="/CV-Template/public/css/style-login-form.css">']);
        $this->view('login/index');
    }

    public function register() {
        $this->view('header', ['page_title' => 'Register', 'css' => '<link rel="stylesheet" href="/CV-Template/public/css/style-login-form.css">']);
        $this->view('login/register');
    }

    public function processLogin()
    {
        if (!($_SERVER['REQUEST_METHOD'] == 'POST'))
            return;

        // Header
        $this->view('header', ['page_title' => 'Login', 'css' => '<link rel="stylesheet" href="/CV-Template/public/css/style-login-form.css">']);

        //Include model
        require_once '../app/models/login_processing.php';

        //Create model instance
        $login_handler = new Login_processing;

        //Call login
        $login_handler->login();
    }
}

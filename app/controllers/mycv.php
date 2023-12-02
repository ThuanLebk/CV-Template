<?php

class mycv extends Controller {
    public function index() {
        session_start();
        $this->checkLogin();
        $this->view('header', ['page_title' => 'Create CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/form.css">']);
    }

    public function create_cv() {
        session_start();
        $this->checkLogin();
        $this->view('header', ['page_title' => 'Create CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/form.css">']);
        $this->view('mycv/create_cv');
    }

    public function edit_cv($id) {

    }
}
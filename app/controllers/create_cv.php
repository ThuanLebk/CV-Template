<?php

class create_cv extends Controller {
    public function index() {
        session_start();
        $this->checkLogin();
        $this->view('header', ['page_title' => 'Create CV', 'css' => '<link rel=stylesheet href="./css/form.css">']);
        $this->view('create_cv/index');
    }
}

?>
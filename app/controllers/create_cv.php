<?php

class create_cv extends Controller {
    public function index() {
        session_start();
        $this->checkLogin();
        $this->view('header', ['page_title' => 'Create CV']);
    }
}

?>
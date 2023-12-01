<?php

class create_cv extends Controller {
    public function index() {
        $this->checkLogin();
        $this->view('header', ['page_title' => 'Create CV']);
    }
}

?>
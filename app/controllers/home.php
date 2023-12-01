<?php

class home extends Controller {
    public function index() {
        $this->view('header', ['page_title' => isset($_SESSION['logged_in']) ? "OK" : "NULL"]);      
    }
}

?>
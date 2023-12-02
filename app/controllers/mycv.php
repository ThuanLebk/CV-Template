<?php

include_once '../app/database/UserCVDAO.php';

class mycv extends Controller {
    public function index() {
        $this->view('header', ['page_title' => 'My CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/style-app-views-mycv.css">']);
        $this->checkLogin();
        $this->view('mycv/index');
    }

    public function create_cv() {
        $this->view('header', ['page_title' => 'Create CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/form.css">']);
        $this->checkLogin();
        $this->view('mycv/create_cv');
    }

    public function edit_cv($id) {
        
    }

    public function saveCreateCV() {
        session_start();

        if (!$_SERVER['REQUEST_METHOD'] == 'POST')
            return;

        include_once '../app/models/cv_processing.php';

        $cv_processing = new CV_processing;

        $status = $cv_processing->saveNewCV();
        $ret_msg = ['Status' => $status ? "OK" : "FAILED", 'cvID' => $status ? $status : '-1'];

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ret_msg);
    }

    public function saveEditCV($id) {
        /**
         * /CV-Template/public/mycv/saveEDitCV/16253985463784
         */
    }
}
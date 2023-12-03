<?php

include_once '../app/database/UserCVDAO.php';

class mycv extends Controller {
    public function index() {
        $this->view('header', ['page_title' => 'My CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/style-app-views-mycv.css">']);
        $this->checkLogin();
        
        include_once '../app/models/cv_processing.php';
        $cv_processing = new CV_processing;
        $user_cvs = $cv_processing->getCVList($_SESSION['user_id']);

        $this->view('mycv/index', $user_cvs);
    }

    public function create_cv() {
        $this->view('header', ['page_title' => 'Create CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/form.css">']);
        $this->checkLogin();

        $this->view('mycv/create_cv');
    }

    public function edit_cv($id) {
        $this->view('header', ['page_title' => 'Edit CV', 'css' => '<link rel=stylesheet href="/CV-Template/public/css/form.css">']);
        $this->checkLogin();

        include_once '../app/models/cv_processing.php';
        $cv_processing = new CV_processing;
        $cv = $cv_processing->getCVByID($id);

        //CV Not Found
        if (!$cv) {
            $cv['INVALID_CV'] = 1;
        } else {
            $cv_image_path = $cv['cv_image'];
            if ($cv_image_path) {
                $base64Image = $cv_processing->getCVImage($cv_image_path);
                $cv['image'] = $base64Image;
            }
        }
        
        $this->view('mycv/edit_cv', $cv);
    }

    public function saveCreateCV() {
        session_start();
        $this->checkLogin();

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

        session_start();
        $this->checkLogin();

        if (!$_SERVER['REQUEST_METHOD'] == 'POST')
            return;

        include_once '../app/models/cv_processing.php';

        $cv_processing = new CV_processing;

        $status = $cv_processing->saveEditCV($id);
        $ret_msg = ['Code' => $status ? 200 : -1 ,'Status' => $status ? "OK" : "FAILED", 'cvID' => $status ? $status : '-1'];

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ret_msg);
    }

    /**
     * Delete CV with ID
     * @param int $id CV ID
     * @return string|null JSON String with custom message
     */

    public function deleteCV($id) {
        session_start();
        $this->checkLogin();

        if (!$_SERVER['REQUEST_METHOD'] == 'POST')
            return;

        include_once '../app/models/cv_processing.php';

        $cv_processing = new CV_processing;

        $status = $cv_processing->deleteCV($id);
        $ret_msg = ['Code' => $status ? 200 : -1 ,'Status' => $status ? "OK" : "FAILED", 'cvID' => $status ? $status : '-1'];

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ret_msg);
    }

    /**
     * Add image to an existing CV
     * @param int $cv_id
     * @return string|null JSON String with custom message
     */
    public function uploadImage($cv_id) {
        session_start();
        $this->checkLogin();

        if (!$_SERVER['REQUEST_METHOD'] == 'POST' || $cv_id < 0 || $cv_id == null)
            return;

        include_once '../app/models/cv_processing.php';

        $cv_processing = new CV_processing;
        $status = $cv_processing->updateCVImage($cv_id);

        $ret_msg = ['Code' => $status ? 200 : -1 ,'Status' => $status ? "OK" : "FAILED", 'cvID' => $status ? $cv_id : '-1'];

        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ret_msg);
    }
}
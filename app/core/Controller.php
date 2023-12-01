<?php 

class Controller {
    public function model($model) {
        require_once '../app/models/' . $model . '.php'; 
        return new $model;
    }

    public function view($view, $data = []) {
        include_once '../app/views/' . $view . '.php';
    }

    public function checkLogin() {
        if (!isset($_SESSION['logged_in'])) {
            header('Location: login');
            exit();
        } 
    }
}
?>
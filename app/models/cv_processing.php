<?php
// session_start();
require_once '../app/database/UserCVDAO.php';
/**
 * This class handles login process
 * $_SESSION values include:
 *     'username'
 *     'password'
 *     'confirm_password' (in register only)
 */
class CV_processing {
    private $userCVDao;

    public function __construct() {
        $this->userCVDao = new UserCVDAO;
    }

    public function saveNewCV() {
        $json = file_get_contents('php://input');
        $cv_name = json_decode(file_get_contents('php://input'), true)['cvName'];
        $user_id = 1;

        return $this->userCVDao->createCV($user_id, $cv_name, $json);
    }

    /**
     * Save an edited CV
     * @param int $id CV ID
     * @return bool
     */
    public function saveEditCV($id) {
        $json = file_get_contents('php://input');

        return $this->userCVDao->updateCVJSONData($id, $json);
    }

    /**
     * Get all CVs of user with user_id
     * @param int $user_id User ID
     * @return array associative array of CVs
     */
    public function getCVList($user_id) {
        return $this->userCVDao->getUserCVs($user_id);
    }
}
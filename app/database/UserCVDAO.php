<?php

include_once '../app/database/connect.php';

class UserCVDAO
{
    private $conn;

    public function __construct() {
        $this->conn = Connection::getInstance()->getConnection();
    }

    /**
     * Create a new CV 
     * @param string $cvName CV Name
     * @param string $cvJSONData CV JSON data of form
     * @return int|false ID of newly inserted row
     */
    public function createCV($user_id, $cvName, $cvJSONData) {
        $sql = "INSERT INTO user_cv (user_id, cv_name, cv_data) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("iss", $user_id, $cvName, $cvJSONData);
    
        if ($stmt->execute()) {
            // Return the ID of the last inserted row
            return $this->conn->insert_id;
        } else {
            // Return some error code or false if insertion failed
            return false;
        }
    }

    /**
     * Return CV by ID
     * @param int $cv_id CV ID
     * @return array|false return false if $cv_id is null or no CV found
     */
    public function getCVByID($cv_id) {
        if (is_null($cv_id)) {
            return false;
        }

        $sql = "SELECT * FROM user_cv WHERE cv_id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $cv_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {
            return false;
        }

        return $result->fetch_assoc();
    }


    /**
     * Get all user CVs based on user ID
     * @param int $user_id User ID
     * @return array array of associate rows CV 
     */
    public function getUserCVs($user_id) {
        $sql = "SELECT * FROM user_cv WHERE user_id = ?";
        $stmt = $this->conn->prepare($sql);
    
        // Bind the user_id parameter to the prepared statement
        $stmt->bind_param("i", $user_id);
    
        // Execute the statement
        $stmt->execute();
    
        // Get the result of the query
        $result = $stmt->get_result();
    
        // Check if the result contains any rows
        if ($result->num_rows === 0) {
            return [];
        }
    
        // Fetch all rows as an associative array
        $cvs = $result->fetch_all(MYSQLI_ASSOC);
    
        return $cvs;
    }
    

    /**
     * Return JSON column of a CV record
     * @param int $cv_id CV ID
     * @return array|false return decode JSON text from database to PHP associative array
     */
    public function getCVJSONData($cv_id) {
        if (is_null($cv_id)) {
            return false;
        }

        $sql = "SELECT cv_data FROM user_cv WHERE cv_id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $cv_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 0) {
            return false;
        }

        $row = $result->fetch_assoc();
        return json_decode($row['cv_data'], true);
    }

    /**
     * Update JSON data of CV if CV exists
     * @param int $cv_id CV ID
     * @param string $cvJSONData JSON Data of input form
     * @return true|false
     */
    public function updateCVJSONData($cv_id, $cvJSONData) {
        $sql = "UPDATE user_cv SET cv_data = ? WHERE cv_id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("si", $cvJSONData, $cv_id);
        return $stmt->execute();
    }

    /**
     * Delete a CV
     * @param int $cv_id CV ID
     * @return true|false
     */
    public function deleteCV($cv_id) {
        $sql = "DELETE FROM user_cv WHERE cv_id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $cv_id);
        return $stmt->execute();
    }
}
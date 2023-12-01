<?php

class login_processing extends Controller
{
    public function validateLogin($user_username, $user_password)
    {
        // Database connection details
        require '../app/database/connect.php';
        // Prepare the SQL query
        // SQL Injection
        //username: ' and 1 = 1 --
        $stmt = $conn->prepare("SELECT * FROM user_profiles WHERE user_name = ?");
        $stmt->bind_param("s", $user_username);

        //If cannot execute SQL query
        if (!$stmt->execute()) {
            return false;
        }
        // Execute the query
        $result = $stmt->get_result();
        // Close the database connection
        $conn->close();
        // Check if a user with the given email exists
        if ($result && $result->num_rows > 0) {
            $user = $result->fetch_assoc();
            // Verify the password
            if (password_verify($user_password, $user['user_password'])) {
                // Password is correct
                return true;
            } else {
                // Password is incorrect
                return false;
            }
        } else {
            // User with the given email does not exist
            return false;
        }
    }

    public function authenticateUser() {
        
        if (empty($_POST['username'])) {
            header("Location: login?error=Username is required");
            exit();
        } else if (empty($_POST['password'])) {
            header("Location: login?error=Password is required");
            exit();
        }

        
        $_SESSION['login_username'] = $_POST['username'];
        $_SESSION['login_password']  = $_POST['password'];
        
        if (isset($_POST['username']) && isset($_POST['password'])) {
            echo 'GO HERE4';
            $email = $_POST['username'];
            $password = $_POST['password'];
        
            if ($this->validateLogin($email, $password)) {
                setcookie("user_email", $email, time() + (86400 * 1), "/"); // Set cookie for 1 days
                $_SESSION['logged_in'] = $email;
                # reset form
                $_SESSION['login_username'] = '';
                $_SESSION['login_password'] = '';
        
                header("Location: home");
                exit();
            } else {
                header("Location: login?error=Incorrect username or password! GO HERE6");
                exit();
            }
        } else {
            header("Location: login?error=Incorrect username or password! GO HERE 7");
            exit();
        }
    }

    public function index() {
        // $this->view('header', ['page_title' => 'Login Processing']);
        $this->authenticateUser();  
    }
}

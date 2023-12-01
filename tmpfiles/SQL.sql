-- Create a table for user profiles with a JSON column for additional data
CREATE TABLE user_profiles (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL UNIQUE,
    user_password CHAR(60) NOT NULL  -- Assuming bcrypt will be used for hashing passwords
);

-- Create a table for user CVs with a foreign key that references the user_profiles table
CREATE TABLE user_cv (
    user_id INT,
    cv_id INT AUTO_INCREMENT,
    cv_data JSON NOT NULL,
    PRIMARY KEY(cv_id),  -- Making cv_id the primary key for the CVs
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user_profiles(user_id) ON UPDATE CASCADE ON DELETE RESTRICT
);

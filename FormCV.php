<?php
    include ('head.php');
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Form CV</title>
    <style>
        .form-size {
            font-size: 0.875rem;
        }
        ::placeholder {
            font-style: italic;
        }
    </style>
    
</head>
<body>
    <div class="container my-3" onsubmit="return false;">
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        Standard CV
                    </div>
                    <div class="card-body">
                        <form novalidate>
                            <div class="row g-3">
                                <div class="col-lg-4">
                                    <div class="row">
                                        <img src="/lab/image/default.jpg" alt="User Image" id="UserImage" class="img-fluid" 
                                        onclick="imgInp.click()" 
                                        onmouseover="imgChangeNoti.classList.remove('d-none')"
                                        onmouseout="imgChangeNoti.classList.add('d-none')">
                                    </div>
                                    <div class="row">
                                        <input accept="image/*" type='file' id="imgInp" class="form-control d-none">
                                        <p1 class="d-none text-center" id="imgChangeNoti">Click to change picture</p1>
                                    </div>
                                </div>
                                <div class="col-lg-8 py-1">
                                    <div class="row">
                                        <input type="text" class="form-control border-0 my-1" style="font-size: 2rem;" id="registerName" placeholder="Full Name" required>
                                    </div>
                                    <div class="row">
                                        <input type="text" class="form-control form-control-sm border-0 my-1" id="registerJobPos" placeholder="Job Position" required>
                                    </div>
                                    <div class="row">
                                        <label for="registerDoB" class="col-sm-2 col-form-label form-size fw-bold">DoB:</label>
                                        <div class="col-sm-10 align-self-center">
                                            <input type="text" class="form-control form-control-sm border-0" id="register1stName" placeholder="Day of Birth" required>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="registerGender" class="col-sm-2 col-form-label form-size fw-bold">Gender:</label>
                                        <div class="col-sm-10 align-self-center">
                                            <input type="text" class="form-control form-control-sm border-0" id="registerLastName" placeholder="Male/Female" required>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="registerPhone" class="col-sm-2 col-form-label form-size fw-bold">Phone:</label>
                                        <div class="col-sm-10 align-self-center">
                                            <input type="text" class="form-control form-control-sm border-0" id="registerUsername" placeholder="0123 456 789" required>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="registerEmail" class="col-sm-2 col-form-label form-size fw-bold">Email:</label>
                                        <div class="col-sm-10 align-self-center">
                                            <input type="text" class="form-control form-control-sm border-0" id="registerCity" placeholder="yourname@example.com" required>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="registerWebsite" class="col-sm-2 col-form-label form-size fw-bold">Website:</label>
                                        <div class="col-sm-10 align-self-center">
                                            <input type="text" class="form-control form-control-sm border-0" id="registerProvince" placeholder="Website" required>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <label for="registerAddress" class="col-sm-2 col-form-label form-size fw-bold">Address</label>
                                        <div class="col-sm-10 align-self-center">
                                            <input type="text" class="form-control form-control-sm border-0" id="registerStreet" placeholder="Address" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row justify-content-end">
                                <div class="col-lg-auto">
                                    <button class="btn btn-primary btn-sm" type="submit">Save form</button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        imgInp.onchange = evt => {
            const [file] = imgInp.files
            if (file) {
                UserImage.src = URL.createObjectURL(file)
            }
        }
    </script>
</body>
</html>

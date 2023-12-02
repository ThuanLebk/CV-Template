<div class="container-sm px-5 contain table-responsive">
    <table class="table table-hover table-borderless">
        <caption class="caption-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-auto">
                        <h1 style="color: #00b36b;">My CV</h1>
                        <p style="color: black;"> <?= $_SESSION['logged_in'] ?> </p>
                    </div>
                    <div class="col-lg-auto ms-auto">
                        <button href="/CV-Template/public/mycv/create_cv" type="button" class="button-create">
                        Create CV
                        </button>
                    </div>
                </div>
            </div>
        </caption>
        <thead class="table-success">
            <div style="color: white !important;">
                <tr>
                <th scope="col">CV ID</th>
                <th scope="col">CV Name</th>
                <th scope="col">Last modified</th>
                <th scope="col">Action</th>
                </tr>
            </div>
        </thead>
        <tbody id="table_content" class="table-group-divider">
            <tr>
                <td>cho</td>
                <td>Tin</td>
                <td>dien</td>
                <td>
                    <button href="" type="button" class="button-edit">
                    Edit
                    </button>
                    <button href="" type="button" class="button-remove">
                    Remove
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
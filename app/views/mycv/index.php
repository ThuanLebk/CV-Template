<div class="container-sm px-5 contain table-responsive">
    <table class="table table-hover table-borderless">
        <caption class="caption-top">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-auto">
                        <h1 style="color: #00b36b;">My CV</h1>
                        <p style="color: black;"> <?= $_SESSION['username'] ?> </p>
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
            <?php

            if (count($data) ==  0) {
                echo '<tr>';
                echo '<td>No CV record yet</td>';
                echo '</tr>';
            } else {
                foreach ($data as $index => $value) {
                    //Raw string JSON data
                    $json = $value['cv_data'];
                    //Decoded JSON as PHP array
                    $json_data = json_decode($json, true);

                    echo '<tr id="row_' . $value['cv_id'] . '">';
                    echo "<td>$index</td>";
                    echo '<td>' . $json_data['cvName'] . '</td>';
                    echo '<td>' . $value['updated_at'] . '</td>';
                    echo '<td>';
                    printf('<button type="button" class="button-edit" onclick="editCV(%s)">Edit</button>', $value['cv_id']);
                    printf('<button type="button" class="button-remove" onclick="deleteCV(%s)">Remove</button>', $value['cv_id']);
                    echo '</td>';
                    echo '</tr>';
                }
            }

            ?>
        </tbody>
    </table>

    <?php print_r(json_decode($data[0]['cv_data'], true)['education']) ?>
</div>

<script src="/CV-Template/public/scripts/mycv_index.js"></script>
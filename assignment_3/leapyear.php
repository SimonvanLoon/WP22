<?php

/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = array(
    'active' => 'Leap Year',
    'items' => array(
        'News' => '/WP22/assignment_3/index.php',
        'Add news item' => '/WP22/assignment_3/news_add.php',
        'Edit news item'  => '/WP22/assignment_3/news_edit.php',
        'Leap Year' => '/WP22/assignment_3/leapyear.php',
        'Simple Form' => '/WP22/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';?>
    <script type="application/javascript" src="scripts/leapyear.js"></script>
<?php
include __DIR__ . '/tpl/body_start.php';
?>

<?php if (!empty($_POST)){ ?>
    <h1>Welcome, <?= $_POST['name'] ?></h1>
    <?php if ($_POST['place'] == "Groningen") { ?>
        <p>Greetings, stadjer!</p>
    <?php } ?>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Year</th>
            <th scope="col">Age</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>2024</td>
            <td><?=$_POST['name'] + 2 ?></td>
        </tr>
        <tr>
            <td>2028</td>
            <td><?=$_POST['name'] + 6 ?></td>
        </tr>
        <tr>
            <td>2032</td>
            <td><?=$_POST['name'] + 10 ?></td>
        </tr>
        <tr>
            <td>2036</td>
            <td><?=$_POST['name'] + 14 ?></td>
        </tr>
        <tr>
            <td>2044</td>
            <td><?=$_POST['name'] + 18 ?></td>
        </tr>
        </tbody>
    </table>
    <?php unset($_POST);
 } ?>

<div class="row wp-row">
    <div class="col-md-12">
        <form method="POST" action="leapyear.php">
            <div class="form-group">
                <label for="fullname">Name</label>
                <input type="text" class="form-control is-valid" id="fullname" name="fullname" placeholder="Jan Jansen"required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Enter a valid name
                </div>
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="text" class="form-control is-valid" id="age" placeholder="69"name="name" required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please enter your age in digits
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="text" class="form-control is-valid" id="email" name="email" placeholder="JanJansen@gmail.com"required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please enter a valid email
                </div>
            </div>
            <div class="form-group">
                <label for="email">Place</label>
                <input type="text" class="form-control is-valid" id="place" name="place" placeholder="Amsterdam"required>
                <div class="valid-feedback">
                    Looks good!
                </div>
                <div class="invalid-feedback">
                    Please enter your place of residence
                </div>
            </div>
            <div id="submit" class="btn btn-primary">Show me!</div>
        </form>
    </div>
</div>

<?php

include __DIR__ . '/tpl/body_end.php';

?>
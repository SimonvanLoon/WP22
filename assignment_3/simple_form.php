<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP22/assignment_3/index.php',
        'Add news item' => '/WP22/assignment_3/news_add.php',
        'Leap Year' => '/WP22/assignment_3/leapyear.php',
        'Simple Form' => '/WP22/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<?php if(isset($_GET['submit'])){ ?>
    <h1>Welcome, <?= $_GET['name'] ?></h1>
<?php } ?>


<div class="row wp-row">
    <div class="col-md-12">
        <form method="GET" action="simple_form.php">
            <div class="form-group">
                <label for="fname">Name</label>
                <input type="text" id="name" name="name">
            </div>
            <div class="form-group">
                <label for="lname">Place:</label>
                <input type="text" id="place" name="place">
            </div>
            <button type="submit" name="submit">Send</button>
        </form>
    </div>
</div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>

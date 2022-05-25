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

<?php
p_print($_GET);
?>

<div class="row wp-row">
    <div class="col-md-12">
        <form method="GET">
            <label for="fname">Firstname:</label>
            <input type="text" id="fname" name="firstname">
            <label for="lname">Lastname:</label>
            <input type="text" id="lname" name="lastname">
            <button type="submit">Send</button>
        </form>
    </div>
</div>

<?php
include __DIR__ . '/tpl/body_end.php';
?>

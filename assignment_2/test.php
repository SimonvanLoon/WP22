<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta Data -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Webprogramming Assignment 2</title>

    <!-- Styles -->
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css" integrity="sha512-T584yQ/tdRR5QwOpfvDfVQUidzfgc2339Lc8uBDtcp/wYu80d7jwBgAxbyMh0a9YM9F8N3tdErpFI8iaGx6x5g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="css/styles.css">

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/js/bootstrap.min.js" integrity="sha512-UR25UO94eTnCVwjbXozyeVd6ZqpaAE9naiEUBK/A+QDbfSTQFhPGj5lOR6d8tsgbBk84Ggb5A3EkjsOgPRPcKA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="application/javascript" src="js/main.js"></script>
</head>
<body>
<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">WP21</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="assignment2.html">Assignment 2</a>
            </li>
        </ul>
    </nav>
</header>
<div class="container">
    <div class="row wp-row">
        <div class="col-md-6">
            <h1>Contact Form</h1>
            <p>Please enter your name, age, city, Email address and phone number. We'll contact you for more information.</p>
<p>The current time is:
<?php
echo date('D, d M Y H:i:s');
?>
</p>
            <div class="alert alert-danger" id="form-alert" role="alert">
                Not all form fields are filled in!
            </div>
<form>
  <div class="form-group">
    <label for="InputName">Name</label>
    <input type="text" class="form-control" id="InputName">
  </div>
  <div class="form-group">
    <label for="InputAge">Age</label>
    <input type="text" class="form-control" id="InputAge">
  </div>
    <div class="form-group">
        <label for="InputCity">City</label>
        <input type="text" class="form-control" id="InputCity">
    </div>
    <div class="form-group">
        <label for="InputEmail">Email</label>
        <input type="email" class="form-control" id="InputEmail">
    </div>
    <div class="form-group">
        <label for="InputPhoneNumber">Phone Nnumber</label>
        <input type="tel" class="form-control" id="InputPhoneNumber">
    </div>
    <button id="SubmitButton" type="button" class="btn btn-primary">Submit</button>
    <button id="EraseButton" type="button" class="btn btn-primary">Erase</button>
</form>
        </div>
        <div class="col-md-6">
            <div id="form-content">
                <table class="table table-hover">
                    <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>Stijn</td>
                    </tr>
                    <tr>
                        <th scope="row">Age</th>
                        <td>23</td>
                    </tr>
                    <tr>
                        <th scope="row">City</th>
                        <td>Groningen</td>
                    </tr>
                    <tr>
                        <th scope="row">E-mailadres</th>
                        <td>s.e.eikelboom@rug.nl</td>
                    </tr>
                    <tr>
                        <th scope="row">Phone number</th>
                        <td>+31612345678</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
<footer>
    <!-- Tabs -->
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="link-tab" href="#links">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="contact-tab" href="#contact">Contact</a>
        </li>
    </ul>

    <!-- Tabs Content -->
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane active" id="links">
            <ul>
                <li><a href="#">Link 1</a></li>
                <li><a href="#">Link 2</a></li>
                <li><a href="#">Link 3</a></li>
                <li><a href="#">Link 4</a></li>
            </ul>
        </div>
        <div class="tab-pane" id="contact">
            <p>
                Address 1<br>
                1111 ZZ Place<br>
                Country
            </p>
        </div>
    </div>
</footer>
</body>
</html>
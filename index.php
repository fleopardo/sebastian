<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 ie6" lang="es"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie10 lt-ie9 lt-ie8 ie7" lang="es"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie10 lt-ie9 ie8" lang="es"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10 ie9" lang="es"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js" lang="es"> <!--<![endif]-->
<head>
	<title>Abril Web</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta charset="utf-8" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
		<script src="js/respond.min.js"></script>
	<![endif]-->

</head>
<body class="home">

	<!--[if lt IE 9]>
	<img id="bg" src="./galerias/home/background.jpg">
	<![endif]-->

	<?php include("./includes/header.php"); ?>

	<?php include("./includes/nav.php"); ?>

	<section class="barra-horizontal">
		<ul>
			<li class="novias">
				<a href="./novias.php">
					<h3>Novias</h3>
					<div class="slideshow" id="slideNovias">
						<img src="./galerias/home/novias/03.jpg" width="255" height="268" />
						<img src="./galerias/home/novias/02.jpg" width="255" height="268" />
						<img src="./galerias/home/novias/01.jpg" width="255" height="268" />
					</div>
				</a>
			</li>

			<li class="madrinas">
				<a href="./madrinas.php">
					<h3>Madrinas & Fiestas</h3>
					<div class="slideshow" id="slideMadrinas">
						<img src="./galerias/home/novias/02.jpg" width="255" height="268" />
						<img src="./galerias/home/madrinas/01.jpg" width="255" height="268" />
						<img src="./galerias/home/novias/02.jpg" width="255" height="268" />
						<img src="./galerias/home/madrinas/01.jpg" width="255" height="268" />
					</div>
				</a>
			</li>
		</ul>
	</section>


	<!-- jquery va en todas las pantallas -->
	<script src="js/jquery.min.js"></script>

	<!-- Scripts para galeria autoscrolleable multiples fotos -->
	<script src="js/jquery-ui-1.8.23.custom.min.js" type="text/javascript"></script>
	<script src="js/jquery.mousewheel.min.js" type="text/javascript"></script>
	<script src="js/jquery.kinetic.js" type="text/javascript"></script>
	<script src="js/jquery.smoothdivscroll-1.3-min.js" type="text/javascript"></script>
	<script src="js/init.smoothdivscroll.js" type="text/javascript"></script>

	<!-- Scripts para homepage -->
	<script src="js/simpleSlideFade.js" type="text/javascript"></script>
	<script src="js/home.js" type="text/javascript"></script>

	<!--script para pantallas con background resizable -->
	<script src="js/bg-resize-ie.js" type="text/javascript"></script>


</body>
</html>
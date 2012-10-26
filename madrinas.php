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
	<link rel="Stylesheet" type="text/css" href="css/smoothDivScroll.css" />
	<!--[if lt IE 9]>
		<script src="js/html5.js"></script>
		<script src="js/respond.min.js"></script>
	<![endif]-->

</head>
<body class="novias-madrinas madrinas">

	<?php include("./includes/header.php"); ?>

	<?php include("./includes/nav.php"); ?>

	<section class="barra-vertical">

		<h3>Abril novias</h3>

		<p>Encontrá los vestidos de Abriles Madrinas & Fiesta en:</p>

		<h4>Abriles Martinez</h4>
		<p>
			Horarios: lunes a viernes de 16 a 20</br>
			Sabados de 10.30 a 14.30</br>
			Paunero 1963, Martinez
		</p>
		<p class="ver mapa"><a id="openMap" href="#">Ver mapa</a></p>

		<div class="contentMap">
			<div id="map"></div>
		</div>

		<!--h4>Abriles Recoleta</h4>
		<p>
			Horarios: lunes a vierne de 11 a 19.30</br>
			Sabados de 11 a 13</br>
			Av Alvear 1883</br>
			Galeria Promenade, Local 35
		</p>
		<p class="ver mapa"><a href="#">Ver mapa</a></p-->

	</section>

	<section class="barra-horizontal">
		<ul>
			<li><a href="./novias.php">Novias</a></li>
			<li><a href="./madrinas.php" class="active">Madrinas & Fiesta</a></li>
		</ul>
	</section>

	<div class="loading">
		<div id="makeMeScrollable">
			<img src="./galerias/madrinas-y-fiesta/1.jpg" />
			<img src="./galerias/madrinas-y-fiesta/2.jpg" />
			<img src="./galerias/madrinas-y-fiesta/3.jpg" />
			<img src="./galerias/madrinas-y-fiesta/4.jpg" />
			<img src="./galerias/madrinas-y-fiesta/5.jpg" />
			<img src="./galerias/madrinas-y-fiesta/6.jpg" />
			<img src="./galerias/madrinas-y-fiesta/7.jpg" />
			<img src="./galerias/madrinas-y-fiesta/8.jpg" />
			<img src="./galerias/madrinas-y-fiesta/9.jpg" />
			<img src="./galerias/madrinas-y-fiesta/10.jpg" />
			<img src="./galerias/madrinas-y-fiesta/11.jpg" />
			<img src="./galerias/madrinas-y-fiesta/12.jpg" />
			<img src="./galerias/madrinas-y-fiesta/13.jpg" />
			<img src="./galerias/madrinas-y-fiesta/14.jpg" />
			<img src="./galerias/madrinas-y-fiesta/15.jpg" />
			<img src="./galerias/madrinas-y-fiesta/16.jpg" />
			<img src="./galerias/madrinas-y-fiesta/17.jpg" />
			<img src="./galerias/madrinas-y-fiesta/18.jpg" />
			<img src="./galerias/madrinas-y-fiesta/19.jpg" />
			<img src="./galerias/madrinas-y-fiesta/20.jpg" />
			<img src="./galerias/madrinas-y-fiesta/21.jpg" />
			<img src="./galerias/madrinas-y-fiesta/22.jpg" />
			<img src="./galerias/madrinas-y-fiesta/23.jpg" />
			<img src="./galerias/madrinas-y-fiesta/24.jpg" />
			<img src="./galerias/madrinas-y-fiesta/25.jpg" />
		</div>
	</div>

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

	<!-- Script para pantallas con background resizable -->
	<script src="js/bg-resize-ie.js" type="text/javascript"></script>

	<!-- Scripts para levantar el modal con el mapa -->
	<script type="text/javascript" src="js/jquery.simplemodal.1.4.2.min.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&amp;language=es"></script>

	<script type="text/javascript" src="js/madrinas.js"></script>
</body>
</html>
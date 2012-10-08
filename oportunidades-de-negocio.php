<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 ie6" lang="es"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie10 lt-ie9 lt-ie8 ie7" lang="es"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie10 lt-ie9 ie8" lang="es"> <![endif]-->
<!--[if IE 9]>    <html class="no-js lt-ie10 ie9" lang="es"> <![endif]-->
<!--[if gt IE 9]><!--> <html lang="es"> <!--<![endif]-->
<head>
	<title>Abril Web</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta charset="utf-8" />
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" type="text/css" href="css/styles.css" />
	<link rel="stylesheet" type="text/css" href="css/superslides.css" />
	<!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->

</head>
<body class="promociones">

	<?php include("./includes/header.php"); ?>

	<?php include("./includes/nav.php"); ?>

	<section class="barra-horizontal"></section>

	<section class="barra-vertical">

		<h3>Abril</h3>

		<h4>La oportunidad de negocio:</h4>

		Estamos buscando potenciar la llegada
		de nuestros productos al interior del país atraves de eventos puntuales, esto esta especialmente pensado para mujeres
		con muchas inquietudes y gran
		convocatoria.

		Si estas interesada por favor
		comunicarse atraves de este mail:
		abrilnovias@gmail.com

	</section>

	<a href="./index.php" class="logo-abril-chico" title="Ir a la pagina principal">Abril</a>

	<div id="background-slide">
		<div class="slides-container">
			<img src="./galerias/home/foto01.jpg" />
			<img src="./galerias/home/foto01.jpg" />
			<img src="./galerias/home/foto01.jpg" />
		</div>
		<nav class="slides-navigation">
	   		<a href="#" class="next">Next</a>
	    	<a href="#" class="prev">Previous</a>
	  	</nav>
	</div>

	<script>

	/* scr.js - Little tiny loader for javascript sources. */
	(function(a){window.scr={js:function(o,h){if(typeof o==="string"){o=[o]}var j,k,m,l,f,g,d;j=a.getElementsByTagName("script")[0];k={t:o.length,i:0};k.r=function(){return k.t===k.i};m=function(){k.i+=1;if(h&&k.r()){h()}};l=(function(){if(j.readyState){return function(b){b.onreadystatechange=function(){if(b.readyState==="loaded"||b.readyState==="complete"){b.onreadystatechange=null;m()}}}}else{return function(b){b.onload=function(){m()}}}}());f=0;g=a.createElement("script");for(f;f<k.t;f+=1){d=g.cloneNode(true);l(d);d.src=o[f];j.parentNode.insertBefore(d,j)}}}}(document));

	window.onload = function(){

		scr.js("js/jquery.min.js",function(){

			scr.js(["js/jquery.easing-1.3.pack.js","js/simpleSlideFade.js","js/jquery.superslides.min.js"],function(){

					scr.js("js/global.js");

			});

		});

	};

	</script>
</body>
</html>
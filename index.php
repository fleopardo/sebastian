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
	<!--[if lt IE 9]><script src="js/html5.js"></script><![endif]-->
	<script src="js/jquery.min.js"></script>
</head>
<body>

	<div class="logo">
		<h1><a href="#home">Dedo interactive</a></h1>
	</div>

	<nav>
		<div class="wrapper">
			<ul>
				<li><a href="#home" data-section="home" class="home active" title="Home">Home</a></li>
				<li><a href="#agencia" data-section="agencia" class="agencia" title="Agencia">Agencia</a></li>
				<li><a href="#servicios" data-section="servicios" class="servicios" title="Servicios">Servicios</a></li>
				<li><a href="#trabajos" data-section="trabajos" class="trabajos" title="Trabajos">Trabajos</a></li>
				<li><a href="#clientes" data-section="clientes" class="clientes" title="Clientes">Clientes</a></li>
				<li><a href="#contacto" data-section="contacto" class="contacto" title="Contacto">Contacto</a></li>
			</ul>
		</div>
	</nav>

	<!-- home -->
	<section id="home">
		<div class="wrapper">

			<div id="slider-portada"></div>

			<div id="contentTweeter">
				<div class="tweets"></div>
			</div>

		</div>
	</section>

	<!-- agencia -->
	<section id="agencia">
		<div class="wrapper">

			<header>
				<h1>Agencia <span>de Marketing Digital</span></h1>
			</header>

			<img class="img-agencia" width="727" height="367" src="./img/agencia/img_agencia.png" />
			<span class="lifestyle">lifestyle</span>

			<article>
				<p class="intro">Somos una Agencia de Marketing Digital orientada a la creación y desarrollo de campañas integrales. Nos caracterizamos por nuestro enfoque estético, creativo y estratégico poco convencional aplicado a las tecnologías emergentes, logrando así, alcanzar resultados positivos.<br />
			Contamos con nuestro departamento de Cuentas, Marketing, Creatividad, Arte, Sistemas y Medios, permitiéndonos crear los distintos procesos de comunicación bajo un mismo concepto y lineamiento.</p>
			</article>

		</div>
	</section>

	<!-- servicios -->
	<section id="servicios">
		<div class="wrapper">
			<img class="img-servicios" src="./img/servicios/servicios.png" />

			<header>
				<h1>Servicios <span>consultoria e interactive</span></h1>
			</header>

			<article>
				<p class="intro">Nos basamos en un carácter de identidad personalizada y representativa para cada proyecto. Fusionamos arte, creatividad y tecnología en base a un planeamiento estratégico. Creamos experiencias a través de un servicio con fuerzas integradas.</p>

				<ul class="listaServicios">
					<li>Web Site</li>
					<li>CRM</li>
					<li>Loyalty</li>
					<li>Microsite</li>
					<li>E-Learning</li>
					<li>Rich Media</li>
					<li>Usabilidad</li>
					<li>Groupware</li>
					<li>E-mail Marketing</li>
					<li>Redes Sociales Empresariales</li>
					<li>Web Reporting</li>
					<li>Consultoria Web</li>
					<li>Games</li>
					<li>Web Portal</li>
					<li>SEO - SEM</li>
					<li>Web 2.0</li>
					<li>Business Microblogging</li>
					<li>Facebook Ads</li>
					<li>E-commerce</li>
					<li>Strategy</li>
				</ul>
			</article>

		</div>
	</section>

	<!-- trabajos -->
	<section id="trabajos">
		<div class="wrapper">
			<header>
				<h1>Trabajos <span>innovación y resultados</span></h1>
			</header>
		</div>

		<div class="content"></div>

	</section>

	<!-- clientes -->
	<section id="clientes">
		<div class="wrapper">
			<header>
				<h1>Clientes <span>y agencias que confian en nosotros</span></h1>
			</header>

			<div class="content">

				<div id="slider-agencias" class="sliders DN">
					<h2>agencias</h2>
					<ul class="bjqs">
				        <li>
				        	<img src="img/clientes/agencias1.png" width="734" height="391" />
				        </li>
				    </ul>
				</div>

				<div id="slider-marcas" class="sliders">
					<h2>marcas</h2>
					<ul class="bjqs">
				        <li>
				        	<img src="img/clientes/marcas1.png" width="734" height="391" />
				        </li>
				        <li>
				        	<img src="img/clientes/marcas2.png" width="734" height="391" />
				        </li>
				        <li>
				        	<img src="img/clientes/marcas3.png" width="734" height="391" />
				        </li>
				    </ul>
				</div>

				<div class="tabsClientes">
					<p>Vea marcas o agencias »</p>
					<ul>
						<li data-id="slider-marcas" class="active">Marcas</li>
						<li data-id="slider-agencias">Agencias</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- contacto -->
	<section id="contacto">
		<div class="wrapper">
			<header>
				<h1>Contacto <span>complete los datos</span></h1>
			</header>

			<div class="content">

				<img src="img/contacto/contacto.png" width="950" height="587" class="contacto" />

				<form id="formularioContacto" method="post" action="contacto.php">
					<fieldset>
						<div class="rows">
							<input type="text" placeholder="Nombre y apellido..." id="name" name="name" />
							<span>*</span>
						</div>
						<div class="rows">
							<input type="text" placeholder="Pais..." id="pais" name="pais" />
							<span>*</span>
						</div>
						<div class="rows">
							<input type="text" placeholder="Email..." id="email" name="email" />
							<span>*</span>
						</div>
						<div class="rows">
							<textarea placeholder="Consulta..." name="message" id="message"></textarea>
							<span>*</span>
						</div>
						<div class="rows submit">
							<p><span>*</span> Datos Obligatorios</p>
							<input type="submit" id="botonEnviarConsulta" value="Enviar" />
							<span id="form-response"></span>
						</div>
					</fieldset>
				</form>

			</div>
		</div>
	</section>

	<div class="contentBg"></div>

	<footer id="footer">
		<div class="wrapper">

			<dl>
				<dt>dedo <span>Argentina</span></dt>

				<dd>Jean Jaures 1165 Piso 5 | Of. E | C1429BDJ</dd>
				<dd>Ciudad Autónoma de Bs. As.</dd>
				<dd>Tel: (+54) 011.4963.9562</dd>
				<dd class="mail">info-arg@dedointeractive.com</dd>
			</dl>

			<dl>
				<dt>dedo <span>Mexico</span></dt>

				<dd>Sonora 85 Int. 201 | 06700</dd>
				<dd>Colonia Roma Norte Ciudad de México | DF</dd>
				<dd>Tel: (+52) 55.5271.3637</dd>
				<dd class="mail">info-mex@dedointeractive.com</dd>
			</dl>

			<dl class="last">
				<dt>dedo <span>Ecuador</span></dt>

				<dd>Sonora 85 Int. 201 | 06700</dd>
				<dd>Colonia Roma Norte Ciudad de México | DF</dd>
				<dd>Tel: (+52) 55.5271.3637</dd>
				<dd class="mail">info-ecu@dedointeractive.com</dd>
			</dl>

			<ul class="social">
				<li class="facebook"><a href="http://www.facebook.com/Dedointeractive" rel="nofollow" target="_blank">Facebook</a></li>
				<li class="tweeter"><a href="http://twitter.com/DedoInteractive" rel="nofollow" target="_blank">Tweeter</a></li>
			</ul>

			<p class="copyright">Copyright © 2012 Dedo Interactive</p>

		</div>
	</footer>

	<script src="js/jquery-tweet-scroll.js"></script>
	<script src="js/trabajos.js"></script>
	<script src="js/dedo.js"></script>
	<script src="js/carouselPortfolio.js"></script>

</body>
</html>
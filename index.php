<!DOCTYPE html>
<html>
<head>
	<!--Title-->
	<title>Dylan Perdigão | Home</title>
	<!--Encoding-->
	<meta charset="UTF-8">
	<!--Responsive-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--Preview-->
    <meta property="og:title" content="Dylan Perdigão" />
    <meta property="og:description" content="Personal website of Dylan Perdigão"/>
	<meta property="og:image" content="/images/preview.png" />
	<!--Font-->
	<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
	<!--Icon-->
    <link rel="icon" type="image/png" href="/images/favicon-16x16.png" sizes="16x16"/>
    <link rel="icon" type="image/png" href="/images/favicon-32x32.png" sizes="32x32"/>
	<link rel="icon" type="image/png" href="/images/favicon-64x64.png" sizes="64x64"/>
	<!--CSS-->
	<link rel="stylesheet" href="css/colors.css"> 
	<link rel="stylesheet" href="css/main.css"> 
	<link rel="stylesheet" href="css/header.css">
	<link rel="stylesheet" href="css/footer.css"> 
	<link rel="stylesheet" href="css/home.css">
	<link rel="stylesheet" href="css/about.css"> 
	<link rel="stylesheet" href="css/formation.css"> 
	<link rel="stylesheet" href="css/projects.css"> 
	<link rel="stylesheet" href="css/contact.css"> 
	<!--JavaScript-->
	<script type="text/javascript" src="js/main.js"></script>
	<script type="text/javascript" src="js/home.js"></script>
	<script type="text/javascript" src="js/about.js"></script>
	<script type="text/javascript" src="js/formation.js"></script>
	<script type="text/javascript" src="js/projects.js"></script>
	<script type="text/javascript" src="js/classes/Circle.js"></script>
	<script type="text/php" src="php/mail.php"></script>
</head>

<body onload="main()">
	<!--HEADER-->
	<header>
		<a class="header-link" href="#home">Home</a>
		<a class="header-link" href="#about">About</a>
		<a class="header-link" href="#formation">Formation</a>
		<a class="header-link" href="#projects">Projects</a>
		<a class="header-link" href="#contact">Contact</a>
	</header>
	<!--HOME-->
	<section id="home">
		<canvas id="c1" width=1000 height=1000></canvas>
		<div class="home-block1">
			<div class="home1">Hello, I'm</div>
			<div class="home2">Dylan Perdigão</div>
			<div class="home3">Welcome to my personal website!</div>
		</div>
	</section>
	<!--ABOUT-->
	<section id="about">
		<canvas id="c2" width=1000 height=1000></canvas>
		<h1>About</h1>
		<div class="about">
			<p>I'm Dylan Perdigão, a portuguese 21 years old man</p>
			<p>I'm currently studying Informatics Engineering at the University of Coimbra</p>
			<p>I speak four languages that are Portuguese(Fluent), French(Fluent), English(B2) and German(B2)</p>
			<p>I've competencies in some programming languages like Python, C, Java, HTML/CSS/JavaScript, PHP, Lex, Yacc and Matlab</p>
			<p>Others skills I have are in Oriented Object Programming, Software Engineering and Management</p>
		</div>
	</section>
	<!--FORMATION-->
	<section id="formation">
		<canvas id="c3" width=1000 height=1000></canvas>
		<h1>Formation</h1>
		<div class="formation">
			<div class="timeline"></div>
			<div class="timeline-event">
				<div class="timeline-event-logo">
					<img id="LDDR" src="images/formation/LDDR.svg">
				</div>
				<div class="timeline-event-date">
					<div>2015</div>
				</div>
				<div class="timeline-event-desc">
					<div class="timeline-event-desc-line1">Lycée Denis-De-Rougemont, Switzerland</div>
					<div class="timeline-event-desc-line2">Physics and Applied Mathematics</div>
				</div>
			</div>
			<div class="timeline"></div>
			<div class="timeline-event">
				<div class="timeline-event-desc">
					<div class="timeline-event-desc-line1">University of Coimbra, Portugal</div>
					<div class="timeline-event-desc-line2">Bachelor in Informatics Engineering</div>
				</div>
				<div class="timeline-event-date">
					<div>2018</div>
				</div>
				<div class="timeline-event-logo">
					<img id="FCTUC" src="images/formation/FCTUC.svg">
				</div>
			</div>
			<div class="timeline"></div>
			<div class="timeline-event">
				<div class="timeline-event-desc"></div>
				<div class="timeline-event-date" style="margin-top:7%"><div>Today</div></div>
				<div class="timeline-event-logo"></div>
			</div>
		</div>
	</section>
	<!--PROJECTS-->
	<section id="projects">
		<canvas id="c4" width=1000 height=1000></canvas>
		<h1>Projects</h1>
		<div class="projects-table">
			<div class="projects-table-line">
				<div class="projects-table-col"><a class="projects-table-cell" href="/AcademicusVestibus"><div>Academicus Vestibus</div></a></div>
				<div class="projects-table-col"><a class="projects-table-cell" href="/E-Vit">E-Vit</a></div>
				<div class="projects-table-col"><a class="projects-table-cell" href="/Mini-Pokemon">Mini-Pokemon</a></div>
			</div>
			<div class="projects-table-line">
				<div class="projects-table-col"></div>
				<div class="projects-table-col"><a class="projects-table-cell" href="https://github.com/DylanPerdigao?tab=repositories">Other Projects on Github</a></div>
				<div class="projects-table-col">
			</div>
		</div>

	</section>
	<!--CONTACT-->
	<section id="contact">
		<h1>Contact</h1>
		<form action="php/mail.php" method="post">
			First Name: <input type="text" name="first_name"><br>
			Last Name: <input type="text" name="last_name"><br>
			Email: <input type="text" name="email"><br>
			Message:<br><textarea rows="5" name="message" cols="30"></textarea><br>
			<input type="submit" name="submit" value="Submit">
		</form>
	</section>
	<!--FOOTER-->
	<footer>
		<a class="social" href="https://www.facebook.com/dylanperdigao/"><img id="social" class="social-fb" src="images/social/facebook.svg"></a>
		<a class="social" href="https://www.instagram.com/dylanperdigao/"><img id="social" class="social-insta" src="images/social/instagram.svg"></a>
		<a class="social" href="https://www.linkedin.com/in/dylanperdigao/"><img id="social" class="social-in" src="images/social/linkedin.svg"></a>
		<a class="social" href="https://www.github.com/dylanperdigao/"><img id="social" class="social-git" src="images/social/github.svg"></a>
	</footer>
</body>
</html>
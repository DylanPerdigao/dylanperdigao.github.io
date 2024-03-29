"use strict";

function main(l){
	document.getElementById("current-flag").src = "https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/languages/"+l+"-flag-orange.png?raw=true"
	let html =""
		html+="<a onClick='main(\"en\")'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/languages/en-flag-orange.png?raw=true' id='en-flag' width='512' alt='EN'></a>"
		html+="<a onClick='main(\"pt\")'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/languages/pt-flag-orange.png?raw=true' id='pt-flag' width='512' alt='PT'></a>"
		html+="<a onClick='main(\"fr\")'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/languages/fr-flag-orange.png?raw=true' id='fr-flag' width='512' alt='FR'></a>"
		html+="<a onClick='main(\"de\")'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/languages/de-flag-orange.png?raw=true' id='de-flag' width='512' alt='DE'></a>"
	document.getElementById("drop-flags").innerHTML = html
	document.getElementById(l+"-flag").parentElement.remove()
	fetch('lang/'+l+'.json')
		.then(p1 => p1.text())
		.then(lang => fetch('data.json')
					.then(x => x.text())
					.then(data => fetch('https://api.github.com/users/dylanperdigao/repos')
						.then(p1 => p1.text())
						.then(projects => setData(JSON.parse(lang),JSON.parse(data),JSON.parse(projects)))));

}
function setData(lang,data,projects){
	setSections(lang,data.sections);
	setProfile(lang,data.profile)
	setAbout(lang,data.about)
	setLanguages(lang,data.languages);
	setFormation(lang,data.formation);
	setSkills(lang,data.skills);
	setPublications(lang,data.publications);
	setCertifications(lang,data.certifications);
	setProjects(lang,projects);
	setContact(lang);
}
function checkEndDate(lang,date){
	switch(date){
		case "": return lang.now;
		default: return date;
	}
}
function getLangPercent(level){
	switch(level){
		case "A1": return 1/6;
		case "A2": return 2/6;
		case "B1": return 3/6;
		case "B2": return 4/6;
		case "C1": return 5/6;
		case "C2": return 1;
	}
}
function getAge(birth){
	let today = new Date();
	let birthday = new Date(birth);
	let age = today.getFullYear() - birthday.getFullYear();
	if (birthday.getMonth >  today.getMonth()) age--;
	else {
		if (birthday.getMonth ==  today.getMonth()) {
			if (birthday.getDate() >  today.getDate()) age--;
		}
	}
	return age;
}
function setSections(lang,sections){
	let html = "";
	for(const s of sections){
		html+= "<a href='#"+s+"'>"+lang[s]+" </a>"
	}
	document.getElementById("sections").innerHTML = html;
}
function setProfile(lang,data){
	document.getElementById("profileDiv").innerHTML =
		"<img id='profilepic' src='"+data.url+"' alt='profile picture'>"+
		"<p>"+lang.profile[0]+"</p>"+
		"<p>"+lang.profile[1]+"</p>"+
		"<div class='social'>" +
			"<a href='https://www.linkedin.com/in/dylanperdigao'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/linkedin-orange.png?raw=true' id='linkedin' class='social_profile' alt='linkedin logo'></a>" +
			"<a href='https://www.github.com/DylanPerdigao'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/github-orange.png?raw=true' id='github' class='social_profile' alt='github logo'></a>" +
			"<a href='https://www.x.com/dylanperdigao'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/x-orange.png?raw=true' id='x' class='social_profile' alt='x logo'></a>" +
			"<a href='https://www.researchgate.net/profile/Dylan-Perdigao'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/research_gate-orange.png?raw=true' id='research_gate' class='social_profile' alt='research gate logo'></a>" +
			"<a href='https://orcid.org/0000-0001-6923-900X'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/orcid-orange.png?raw=true' id='orcid' class='social_profile' alt='orcid logo'></a>" +
			"<a href='https://www.cisuc.uc.pt/en/people/dgp'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/cisuc-orange.png?raw=true' id='cisuc' class='social_profile' alt='cisuc logo'></a>" +
			"<a href='https://scholar.google.com/citations?user=sF7oYBYAAAAJ&hl=en'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/google_scholar-orange.png?raw=true' id='google_scholar' class='social_profile' alt='google scholar logo'></a>" +
			"<a href='https://www.cienciavitae.pt/portal/B91A-62FA-29B2'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/ciencia_vitae-orange.png?raw=true' id='ciencia_vitae' class='social_profile' alt='ciencia vitae logo'></a>" +
			"<a href='https://www.scopus.com/authid/detail.uri?authorId=57904609600'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/scopus-orange.png?raw=true' id='scopus' class='social_profile' alt='scopus logo'></a>" +
			"<a href='https://www.webofscience.com/wos/author/record/GLS-1086-2022'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/social/web_of_science-orange.png?raw=true' id='web_of_science' class='social_profile' alt='web of science logo'></a>" +
		"</div>"
	;
}
function setAbout(lang,data){
	document.getElementById("aboutDiv").innerHTML =
		"<h1>"+lang.about+" <gray>{</gray></h1>"+
		"<div class='about'>"+
			"<p><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/cake-orange.png?raw=true' class='about_icon' alt='cake icon'> : <green>"+data.birth+"</green> (<green>"+getAge(data.birth)+"</green>),</p>"+
			"<p><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/earth-orange.png?raw=true' class='about_icon' alt='earth icon'> : <green>"+lang[data.nationality[0]]+"</green> & <green>"+lang[data.nationality[1]]+"</green>,</p>"+
			"<p><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/pin-orange.png?raw=true' class='about_icon' alt='pin icon'> : <green>"+data.city+"</green></p>"+
			"<h2>"+lang.interests+"<gray> {</gray></h2>"+
			"<div class='interests'>"+
				"<div class='col_interests'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/soccer-orange.png?raw=true' class='interests_icon' alt='soccer icon'> : <green>"+lang.soccer+"</green>, </div>"+
				"<div class='col_interests'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/ski-orange.png?raw=true' class='interests_icon' alt='ski icon'> : <green>"+lang.ski+"</green>, </div>" +
				"<div class='col_interests'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/bicycle-orange.png?raw=true' class='interests_icon' alt='bike icon'> : <green>"+lang.bike+"</green>, </div>"+
				"<div class='col_interests'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/atom-orange.png?raw=true' class='interests_icon' alt='science icon'> : <green>"+lang.science+"</green>, </div>" +
				"<div class='col_interests'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/programing-orange.png?raw=true' class='interests_icon' alt='programing icon'> : <green>"+lang.programing+"</green>, </div>"+
				"<div class='col_interests'><img src='https://github.com/DylanPerdigao/dylanperdigao.github.io/blob/main/icons/interests/shuttle-orange.png?raw=true' class='interests_icon' alt='shuttle icon'> : <green>"+lang.space+"</green></div>" +
			"</div><h2><gray>}</gray></h2>"+
		"</div>"+
		"<h1><gray>}</gray></h1>"
	;
}
function setLanguages(lang,languages){
	let html = "<h1>"+lang.languages+" <gray>{</gray></h1>\n" +
				"<div id='languagesDiv'>"
	;
	for (const l of languages){
		let x = ""
		if(l.acronym==='PT'){
			x ="onclick='secret1()'"
		}
		html +=
			"<div class='skillLine'>"+
			"<div class='col'>"+
			"<img class='skill' src='"+l.img+"'"+x+"alt='"+lang[l.acronym]+" flag'>" +
			"<label><orange>'"+lang[l.acronym]+"'</orange> :</label>" +
			"</div>"+
			"<div class='col'>"+
			"<progress value='"+getLangPercent(l.level)+"'></progress>" +
			"<label><green>"+l.level+"</green>,</label>"+
			"</div>"+
			"</div>"
		;
	}
	html += "</div>" +
			"<h1><gray>}</gray></h1>"
	;
	document.getElementById("languages").innerHTML = html;
}
function setFormation(lang,formation){
	let html=	"<h1>"+lang.formation+" <gray>{</gray></h1>"+
				"<div id='formationDiv'>"
	;
	for (let i=0; i<formation.length; i++){
		html +=
			"<a href='"+formation[i].url+"'>"+
			"<img src='"+formation[i].img+"' class='institution' alt='"+formation[i].institution+" logo'>"+
			"</a>"+
			"<h2>"+lang[formation[i].institution]+"<gray className='gray'> {</gray></h2>"+
			"<div class='institutionGroup'>"
		;
		let qualifications = formation[i].qualifications;
		for(let j=0; j<qualifications.length; j++){
			html +=
				"<p><orange>'"+lang[qualifications[j].name]+"'</orange> : <green>"+qualifications[j].begin_date+" - "+checkEndDate(lang,qualifications[j].end_date)+"</green></p>"
			;
		}
		html += "</div>"+
				"<h2><gray>}</gray></h2>"
		;
	}
	html += "</div>"+
			"<h1><gray>}</gray></h1>"
	;
	document.getElementById("formation").innerHTML = html;
}
function setSkills(lang,skills){
	let html=	"<h1>"+lang.skills+" <gray>{</gray></h1>"+
				"<div id='skillsDiv'>"
	;
	for (let k=0; k<skills.length; k++){
		let skillCat = skills[k];
		html +=	"<h2>"+lang[skillCat.category]+" <gray>{</gray></h2>"+
				"<div id='skillGroup'>"
		;
		skillCat.list.sort(function(a, b) {
			return a.level < b.level;
		});
		for (let i=0; i<skillCat.list.length; i++){
			html +=
				"<div class='skillLine'>"+
				"<div class='col'>"+
				"<img class='skill' src='"+skillCat.list[i].img+"' alt='"+skillCat.list[i].name+" logo'>" +
				"<label><orange>'"+skillCat.list[i].name+"'</orange> :</label>" +
				"</div>"+
				"<div class='col'>"+
				"<progress value='"+skillCat.list[i].level/100+"'></progress>" +
				"<label><green>"+skillCat.list[i].level+"%</green>,</label>"+
				"</div>"+
				"</div>"
			;
		}
		html += "</div>"+
			"<h2><gray>}</gray></h2>"
		;
	}
	html +=
		"</div>"+
		"<h1><gray>}</gray></h1>"
	;
	document.getElementById("skills").innerHTML = html;
}

function setPublications(lang,publications){
	let html=	"<h1>"+lang.publications+" <gray>{</gray></h1>"+
				"<div id='publicationsDiv'>"
	;
	for (const p of publications){
		html +=
			"<h2>"+p.name+"<gray className='gray'> {</gray></h2>"+
			"<div class='publicationsGroup'>"+
			"<div class='pub_imgbox'>"+
			"<a href='"+p.url+"'>"+
			"<img src='"+p.img+"' class='publications' alt='publication cover'>"+
			"</a>"+
			"</div><div class='pub_info'><a href='"+p.url+"' class='pub_type'>"+p.type+"</a>"
		;
		if (p.award != null){
			html += "<a href='"+p.award_url+"' class='pub_award'>"+ p.award+"</a>";
		}
		html +=
			"<span class='pub_date'>"+p.date+"</span>"+
			"<p><orange>'Authors'</orange> : <gray>[ </gray><green>"+p.authors+"</green><gray> ]</gray></p>"+
			"<p><orange>'"+p.publisher+"'</orange> : <green>"+p.location+"</green></p>"+
			"</div>"
		;
		html +=
			"</div>"+
			"<h2><gray>}</gray></h2>"
		;
	}
	html +=
		"</div>"+
		"<h1><gray>}</gray></h1>"
	;
	document.getElementById("publications").innerHTML = html;
}

function setCertifications(lang,certifications){
	let html=	"<h1>"+lang.certifications+" <gray>{</gray></h1>"+
				"<div id='certificationsDiv'>"
	;
	for (let i=0; i<certifications.length; i++){
		html +=
			"<h2>"+certifications[i].institution+"<gray className='gray'> {</gray></h2>"+
			"<div class='certificationsGroup'>"
		;
		let badges = certifications[i].badges;
		for(let j=0; j<badges.length; j++){
			html +=
					"<div class='imgbox'>"+
					"<a href='"+badges[j].url+"'>"+
					"<img src='"+badges[j].img+"' class='certifications' alt='"+badges[j].name+" logo'>"+
					"</a>"+
					"<p><orange>'"+badges[j].name+"'</orange> : <green>"+badges[j].date+"</green></p>"+
					"</div>"
			;
		}
		html +=
			"</div>"+
			"<h2><gray>}</gray></h2>"
		;
	}
	html +=
		"</div>"+
		"<h1><gray>}</gray></h1>"
	;
	document.getElementById("certifications").innerHTML = html;
}

function setProjects(lang,projects){
	let html=	"<h1>"+lang.projects+" <gray>{</gray></h1>"+
				"<div id='projectsDiv'>"
	;
	projects.sort(function(a, b) {
		let total_a = a.forks_count+a.watchers_count+a.stargazers_count;
		let total_b = b.forks_count+b.watchers_count+b.stargazers_count;
		return total_a < total_b;
	});
	for (let i=0; i<projects.length; i++){
		if(projects[i].description && projects[i].language){
			let page="";
			let languages="";
			if(projects[i].has_pages){
				page="<p><a class='try' href='"+projects[i].homepage+"'>Try here</a></p>";
			}
			html +=
				"<h2><a href='"+projects[i].svn_url+"'>"+projects[i].name+"</a><gray className='gray'> 🔗 {</gray></h2>"+
				"<div class='projectInfo'>"+
					"<p><orange>'Description'</orange> : <green>"+projects[i].description+"</green>,</p>"+
					"<p><orange>'Language'</orange> : <green>"+projects[i].language+"</green></p>"+
					page +
					"</div>"+
				"</div>"+
				"<h2><gray>}</gray></h2>"
			;
		}else{
			console.log("Not displayed: " + projects[i].name);
		}
	}
	html += "</div>"+
			"<h1><gray>}</gray></h1>"
	;
	document.getElementById("projects").innerHTML = html;
}

function setContact(lang){
	document.getElementById("contact").innerHTML =
		"<h1>"+lang.contact+" <gray>{</gray></h1>"+
		"<form accept-charset='UTF-8' action='https://usebasin.com/f/772232c9b430' enctype='multipart/form-data' target='_blank' method='POST'>"+
		"<div id='contactDiv'>"+
		"<h2>"+lang.email+"<gray> {</gray></h2>"+
		"<input type='email' id='email' name='email' placeholder='"+lang.email+"' required>"+
		"<h2><gray>}</gray></h2>"+
		"<h2>"+lang.message+"<gray> {</gray></h2>"+
		"<textarea rows='6' cols='50' name='comment' placeholder='"+lang.message+"' required></textarea><br>"+
		"<h2><gray>}</gray></h2>"+
		"<button type='submit'>"+lang.send+"</button>"+
		"</div>"+
		"</form>"+
		"<h1><gray>}</gray></h1>"
	;
}



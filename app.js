async function getText(filename, id) {
	let result = await fetch('./text/' + filename);
	let text = await result.text();
	let div = document.getElementById(id);
	div.textContent = text;
}
const docs = [
	{ name: 'welcome.txt', id: 'welcome' },
	{ name: 'xpro-bio.txt', id: 'xpro-bio' },
	{ name: 'bus.txt', id: 'bus' },
	{ name: 'pacman.txt', id: 'pacman' },
	{ name: 'eye.txt', id: 'eye' },
	{ name: 'rainbowgons.txt', id: 'rainbowgons' },
	{ name: 'personalProjectBio.txt', id: 'personal-project-bio' },
	{ name: 'practiceSite.txt', id: 'practice-site' },
];

//prettier-ignore
const pages = {
	'': 'home.html',
	'#home': 'home.html',
	'#personalProjects': 'personalProjects.html',
	'#xproProjects': 'xproProjects.html'
}

async function router(page) {
	let url = pages[page];
	let response = await fetch(url);
	let text = await response.text();
	let container = document.getElementById('content');
	container.innerHTML = text;
}

docs.forEach((file) => {
	getText(file.name, file.id);
});

router(window.location.hash);

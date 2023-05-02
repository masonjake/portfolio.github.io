async function getText(filename, id) {
	let result = await fetch('./text/' + filename);
	let text = await result.text();
	let div = document.getElementById(id);
	div.textContent = text;
}
let docs = [
	{ name: 'welcome.txt', id: 'welcome' },
	{ name: 'xpro-bio.txt', id: 'xpro-bio' },
	{ name: 'bus.txt', id: 'bus' },
	{ name: 'pacman.txt', id: 'pacman' },
	{ name: 'eye.txt', id: 'eye' },
	{ name: 'rainbowgons.txt', id: 'rainbowgons' },
	{ name: 'personalProjectBio.txt', id: 'personal-project-bio' },
	{ name: 'practiceSite.txt', id: 'practice-site' },
];

docs.forEach((file) => {
	getText(file.name, file.id);
});

// function hide(id) {
// 	let div = document.getElementById(id);
// 	div.style.display = 'none';
// }

// function changePage(page) {
// 	if (active) {
// 		hide(page);
// 	}
// }

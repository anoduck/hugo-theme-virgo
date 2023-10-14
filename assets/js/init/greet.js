export default function greet () {
	let year = new Date().getFullYear();
	console.log(
		`---------------------
		\n\tIf you are looking at this and not me, then where am I?\n
		---------------------`
	);
	document.querySelector('#info-date').innerHTML = year;
}

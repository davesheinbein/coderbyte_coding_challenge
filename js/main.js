document
	.getElementById('button')
	.addEventListener('click', loadBeers);

// Load Github Users
function loadBeers() {
	var xhr = new XMLHttpRequest();
	// console.log('🚀 ~ xhr log >', xhr);
	// console.dir('🚀 ~ xhr dir >', xhr);
	// console.table('🚀 ~ xhr table >', xhr);
	xhr.open('GET', 'https://api.punkapi.com/v2/beers', true);

	// We have a simple API that returns a JSON array.
	//  --> https://api.punkapi.com/v2/beers
	// --> Documentation for this API: https://punkapi.com/documentation/v2

	xhr.onload = function () {
		// console.log('🚀 ~ status', status);
		if (this.status == 200) {
			// console.log(
			// 	'🚀 ~ this.responseText',
			// 	this.responseText
			// );
			var beers = JSON.parse(this.responseText);
			// console.table('🚀 ~ beers', beers);

			beers.sort((a, b) => (a.name > b.name ? 1 : -1));

			// console.table('🚀 ~ beers.sort((a, b) => (a.name > b.name ? 1 : -1));', beers.sort((a, b) => (a.name > b.name ? 1 : -1)););

			var output = '';
			for (var i in beers) {
				output +=
					'<div class="beer">' +
					'<img src="' +
					beers[i].image_url +
					'" width="70" height="70">' +
					'<ul>' +
					'<li><strong>ID: </strong>' +
					beers[i].id +
					'</li>' +
					'<li><strong>Name: </strong>' +
					beers[i].name +
					'</li>' +
					'<li><strong>First Brewed: </strong>' +
					beers[i].first_brewed +
					'</li>' +
					'<li><strong>Description: </strong>' +
					beers[i].description +
					'</li>' +
					'<li><strong>Tagline: </strong>' +
					beers[i].tagline +
					'</li>' +
					'<li><strong>Brewers Tips: </strong>' +
					beers[i].brewers_tips +
					'</li>' +
					'</ul>' +
					'</div>';
			}

			// console.log(output, '< output');

			document.getElementById('beers').innerHTML = output;
		}
	};

	xhr.send();
}

const IdCode = window.location.href.replace(/ht.+de=/, "").replace("#", "").replace(/\&fbclid.+/, "").replace("&m=1", "").replaceAll('%EF%BF%BD', '').toUpperCase();
document.title = `Nonton ${IdCode}`;
const DoHost = window.location.protocol + '//' + window.location.hostname + window.location.pathname.replace('premium', '');
const Worlds = window.location.hostname.replace('void','portal').replace('first','portal').replace('last','portal');
const DtcPrm = window.location.href.includes('premium'),
	bImgA = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/',
	bImgB = '/w397-h240-c-rw/Thumbnail.webp';

function detectDevTools() { if ( window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200 ) { window.location.href = 'https://s.zlinkb.com/d.php?z=4836662'; }} setInterval(detectDevTools, 2000);
document.addEventListener('keydown', e => e.ctrlKey && e.key === 'u' && e.preventDefault());
document.addEventListener('contextmenu', function(event) {
	event.preventDefault();
	window.location.href = 'https://viicentr.com/dc/?blockID=344737&tb=https%3A%2F%2Fgoogle.com';
});
const apiUrl = `https://${Worlds}/data/${IdCode}.json`,
	resultContainer = document.getElementById("result-container");
fetch(apiUrl).then((t => {
	if (!t.ok) throw new Error(`HTTP error! Status: ${t.status}`);
	return t.json()
})).then((t => {
	var isi = t.token;
	for (var i = 0; i < isi.length; i++) {
		const p = i + 1;
		document.getElementById('judul').innerHTML = `${IdCode} | Total ${isi.length} Bagian`;
		const videoId = isi[i].replace("AD6v5d", "");
		const videoLink = document.createElement("a");
		videoLink.href = `${DoHost}v?token=${videoId}&j=${IdCode}&p=${i+1}`;
		videoLink.textContent = `${IdCode} - Part ${i+1}`;
		const thumbnailImg = document.createElement("img");
			if(t.images[0].includes("data:image")){
				thumbnailImg.src = t.images[i];
			} else {
				thumbnailImg.src = `${bImgA}${t.images[i]}${bImgB}`;
			}
		thumbnailImg.alt = `${IdCode}`;
		thumbnailImg.addEventListener("click", () => {
			loadVideo(videoId, IdCode, p);
		});
		var newDiv = document.createElement('div');
		newDiv.classList.add('result-item');
		resultContainer.appendChild(newDiv);
		newDiv.appendChild(thumbnailImg);
		newDiv.appendChild(videoLink);

		function loadVideo(videoId, IdCode, p) {
			window.open(`${DoHost}v?token=${videoId}&j=${IdCode}&p=${p}`);
		}

	}


})).catch((t => {
	alert('Tidak Tersedia');
}));


document.addEventListener('DOMContentLoaded', function() {
	const paginationDiv = document.getElementById('pagination');

	let currentPage = 1;
	const itemsPerPage = 15;
	let filmTitles = [];

	// Fetch data and initialize pagination
	fetch('https://'+ Worlds +'/list.json')
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(jsonData => {
			filmTitles = jsonData.filmTitles;
			renderPage(currentPage);
			renderPagination();
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error);
		});

	// Function to render film titles for a specific page
	function renderPage(pageNumber) {
		const startIndex = (pageNumber - 1) * itemsPerPage;
		const endIndex = pageNumber * itemsPerPage;
		const titlesOnPage = filmTitles.slice(startIndex, endIndex);

		// Clear previous content
		$('#scriptc').empty();
		$('#filmList').empty();

		// Loop through the titles and create <p> elements
		for (let i = 0; i < titlesOnPage.length; i++) {
			const titleElement = titlesOnPage[i];
			var posts = ``;
			const dataJudul = `https://${Worlds}/data/${titleElement.toUpperCase()}.json`;
			const dJforScrp = titleElement.replaceAll('-', '');
			procPage(titlesOnPage, i, posts, dataJudul, dJforScrp, bImgA, bImgB);
		}
	}

	function procPage(titlesOnPage, i, posts, dataJudul, dJforScrp, bImgA, bImgB) {
		
		const jsData = " 																																																																																																																																												\n\
				function Data" + i + "(" + dJforScrp + "){ 																																																																																																																																						\n\
					var isPosts" + i + " = ''; 																																																																																																																																								\n\
					for (var i2 = 0; i2 < 1; i2++) { 																																																																																																																																					\n\
        				const gmbrthumbnailImg = '" + bImgA + "'+" + dJforScrp + ".images[i2]+'" + bImgB + "'; 																																																																																																																										\n\
					const gmbrSglImg = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlV07M5tlamZ1Qp1XzWOsXPTvxD8eswgvolTVuUtt4sEGTvZbVSKyKnVOYqOCAUVcb_-ODoLnWy5X8x3nN2xUI2gqJBSAfqdeMQjzDQo6HqKv8BZbvWklIU8ZOnIVGbzdAciyGx5L7yjeVVGZd-SKswRKnLCIeMJ7TxwcW0yvlGJe9cY_Rr3xO22vvuA/w640-h386-c-rw/Parental_Advisory.webp'; 																																																																\n\
					var gmbrIMG = encodeURIComponent(gmbrthumbnailImg), sgLImg = encodeURIComponent(gmbrSglImg); 																																																																																																																						\n\
					} 																																																																																																																																													\n\
					isPosts" + i + " += decodeURIComponent('%3Cdiv%20class%3D%22result-item%22%3E%3Ca%20id%3D%22" + titlesOnPage[i].toUpperCase() + "%22%20href%3D%22.%2F%3Fcode%3D" + titlesOnPage[i].toUpperCase() + "%22%3E%3Cimg%20loading%3D%22lazy%22%20src%3D%22'+gmbrIMG+'%22%20alt%3D%22" + titlesOnPage[i].toUpperCase() + "%22%20id%3D%22" + titlesOnPage[i].toUpperCase() + "%22%20onerror%3D%22this.onerror%3Dnull%3Bthis.src%3D%60'+sgLImg+'%60%3B%22%20%2F%3E%3C%2Fa%3E%3Ca%20href%3D%22.%2F%3Fcode%3D" + titlesOnPage[i].toUpperCase() + "%22%3E" + titlesOnPage[i].toUpperCase() + "%3C%2Fa%3E%3C%2Fdiv%3E'); \n\
					$('#filmList').append(isPosts" + i + ");																																																																																																																																				\n\
																																																																																																																																																		\n\
				} 																																																																																																																																														\n\
																																																																																																																																																		\n\
				$(document).ready(function() {																																																																																																																																							\n\
    					$.ajax({																																																																																																																																										\n\
        					url: '" + dataJudul + "',																																																																																																																																						\n\
        					dataType: 'json',																																																																																																																																							\n\
        					success: function(" + dJforScrp + ") {Data" + i + "(" + dJforScrp + ")},																																																																																																																												\n\
        					error: function(xhr, status, error) {																																																																																																																																		\n\
            						console.error(status + ': ' + error);																																																																																																																																\n\
            						$('#filmList').text('Error fetching JSON data.');																																																																																																																													\n\
        						}																																																																																																																																										\n\
    					});																																																																																																																																												\n\
				});";

		posts += jsData;
		$('#scriptc').append('<scr' + 'ipt>' + posts + '</scr' + 'ipt>');
	}

	// Function to render pagination buttons
	function renderPagination() {
		const totalPages = Math.ceil(filmTitles.length / itemsPerPage);

		// Clear previous pagination buttons
		paginationDiv.innerHTML = '';

		// Create and append previous button
		const prevButton = document.createElement('button');
		prevButton.textContent = 'PREV';
		prevButton.addEventListener('click', function() {
			if (currentPage > 1) {
				currentPage--;
				renderPage(currentPage);
			}
		});
		paginationDiv.appendChild(prevButton);

		// Create and append next button
		const nextButton = document.createElement('button');
		nextButton.textContent = 'NEXT';
		nextButton.addEventListener('click', function() {
			if (currentPage < totalPages) {
				currentPage++;
				renderPage(currentPage);
			}
		});
		paginationDiv.appendChild(nextButton);
	}
});

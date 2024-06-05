// Function to fetch data from URL
async function fetchData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Function to perform search
function searchFilms(query, filmTitles) {
	const results = filmTitles.filter(title => title.toLowerCase().includes(query.toLowerCase()));
	return results;
}

// Function to display search results
function displayResults(results) {
	const resultList = document.getElementById('searchResults');
	resultList.innerHTML = '';
	results.forEach(result => {
		const listItem = document.createElement('li');
		listItem.textContent = result;
		listItem.addEventListener('click', function() {
			// Perform desired action, for example, navigating to a URL
			window.location.href = '../?code=' + result; // Change '#' to the appropriate URL
		});
		resultList.appendChild(listItem);
	});
}

// Event listener for input
document.getElementById('searchInput').addEventListener('input', async function() {
	const query = this.value.trim();
	if (query.length === 0) {
		displayResults([]);
		return;
	}
	const data = await fetchData('https://' + window.location.hostname.replace('void', 'portal') + '/list.json');
	if (data && data.filmTitles) {
		const results = searchFilms(query, data.filmTitles);
		displayResults(results);
	} else {
		console.error('No film titles found in the fetched data.');
	}
});

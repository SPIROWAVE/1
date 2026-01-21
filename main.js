let pickedCountries = [];

function resetCountries() {
    pickedCountries = [];
}

function pickCountry() {
    if (pickedCountries.length === countries.length) {
        resetCountries();
    }

    let availableCountries = countries.filter(country => !pickedCountries.includes(country.name));
    if (availableCountries.length === 0) {
        // This should ideally not happen if resetCountries is called correctly, but as a safeguard.
        resetCountries();
        availableCountries = countries;
    }

    const randomIndex = Math.floor(Math.random() * availableCountries.length);
    const selectedCountry = availableCountries[randomIndex];
    pickedCountries.push(selectedCountry.name);

    document.getElementById("result").innerHTML = `${selectedCountry.name} <span class="english-name">(${selectedCountry.english_name})</span>`;
    document.getElementById("capital").innerHTML = `수도: ${selectedCountry.capital} <span class="english-name">(${selectedCountry.english_capital})</span>`;
    
    // Display major cities
    let majorCitiesHtml = "주요 도시: ";
    let englishMajorCitiesHtml = "N/A";
    if (selectedCountry.major_cities && selectedCountry.major_cities.length > 0) {
        majorCitiesHtml += selectedCountry.major_cities.join(", ");
        if (selectedCountry.english_major_cities && selectedCountry.english_major_cities.length > 0) {
            englishMajorCitiesHtml = selectedCountry.english_major_cities.join(", ");
        }
    } else {
        majorCitiesHtml += "없음";
    }
    document.getElementById("major-cities").innerHTML = `${majorCitiesHtml} <span class="english-name">(${englishMajorCitiesHtml})</span>`;

    // Display UNESCO sites
    const unescoSitesContainer = document.getElementById("unesco-sites");
    let unescoSitesHtml = "<h3>유네스코 세계유산<br><span class=\"english-name\">UNESCO World Heritage Sites</span></h3>";
    if (selectedCountry.unesco_sites && selectedCountry.unesco_sites.length > 0) {
        unescoSitesHtml += "<ul>";
        selectedCountry.unesco_sites.forEach(site => {
            unescoSitesHtml += `<li>${site.name} <span class="english-name">(${site.english_name})</span></li>`;
        });
        unescoSitesHtml += "</ul>";
        unescoSitesHtml += `<button onclick="toggleUnescoImages()">사진[photo]</button>`;
    } else {
        unescoSitesHtml += "<p>정보 없음</p>";
    }
    unescoSitesContainer.innerHTML = unescoSitesHtml;

    // Prepare UNESCO images
    const imagesContainer = document.getElementById("unesco-images-container");
    let imagesHtml = "";
    if (selectedCountry.unesco_sites && selectedCountry.unesco_sites.length > 0) {
        selectedCountry.unesco_sites.forEach((site, index) => {
            const imageUrl = site.image_url ? site.image_url : `https://picsum.photos/seed/${index}/400/300`;
            imagesHtml += `<div class="unesco-image-item">
                                <img src="${imageUrl}" alt="${site.name}">
                                <p>${site.name} <span class="english-name">(${site.english_name})</span></p>
                           </div>`;
        });
    }
    imagesContainer.innerHTML = imagesHtml;
}

function toggleUnescoImages() {
    const imagesContainer = document.getElementById("unesco-images-container");
    if (imagesContainer.style.display === "none" || imagesContainer.style.display === "") {
        imagesContainer.style.display = "flex";
    } else {
        imagesContainer.style.display = "none";
    }
}

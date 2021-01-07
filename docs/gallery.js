
let html = '';


for (let i = 0; i < antelope.length; i++) { // populate page with contents of 'antelope' array
    
    let species = antelope[i];

    html += `
        <div class='container'>
        <h1 class='species'>${species.type}</h1>
        <img src="${species.photo}" alt="${species.type}">
        <p class='bio'>${species.bio}</p>
        </div>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeend', html);

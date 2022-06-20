// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
//avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito
//e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. 
//Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
//ma costruito dinamicamente attraverso JavaScript.



// Inserisco le immagini in un array
const boxImage = [
    'https://cdn.photographycourse.net/wp-content/uploads/2022/04/Portrait-vs-Landscape-Featured-Image-3.jpg',
    'https://i.natgeofe.com/n/2a832501-483e-422f-985c-0e93757b7d84/6.jpg',
    'https://cdn.photographycourse.net/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg',
    'https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg',
    'https://iso.500px.com/wp-content/uploads/2021/02/Torres-Del-Paine-Sunset-By-Paul-Reiffer-2-1500x1000.jpg',
    'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Landscape-Photographer-of-the-Year-Sander-Grefte.jpg'
];

const containerImg = document.querySelector(`.container_img`);


// inserisco le immagini
for (let index = 0; index < boxImage.length; index++) {
    console.log(boxImage[index]);
    const newImage = document.createElement(`img`);
    newImage.classList.add(`ms_img`, `d-none`);
    newImage.setAttribute(`src`, boxImage[index]);
    containerImg.append(newImage);
}




// let elementActive = boxImage[1];
//  console.log(elementActive); 
//  // boxImage[elementActive].classList.add(`ms_img_active`);












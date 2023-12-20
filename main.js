const  foto = document.querySelector("#foto img");
const recomendados = document.querySelector("#recomendados");
const destinos = document.querySelector("#destinos");

const fragment = document.createDocumentFragment();

const assets = "assets";

const arrayBanners = [
    {
        id: "1",
        src: `${assets}/banner/1.jpg`,
        alt: "esto es el banner 1",
        titulo: "Galicia",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?",
        title: "banner 1"
    },
    {
        id: "2",
        src: `${assets}/banner/2.jpg`,
        alt: "esto es el banner 2",
        titulo: "Asturias",
        parrafo: "Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "banner 2"
    },
    {
        id: "3",
        src: `${assets}/banner/3.jpg`,
        alt: "esto es el banner 3",
        titulo: "Cantabria",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?",
        title: "banner 3"
    },
    {
        id: "4",
        src: `${assets}/banner/4.jpg`,
        alt: "esto es el banner 4",
        titulo: "Euskadi",
        parrafo: "Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "banner 4"
    },
    {
        id: "5",
        src: `${assets}/banner/5.jpg`,
        alt: "esto es el banner 5",
        titulo: "Navarra",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?",
        title: "banner 5"
    },
    {
        id: "6",
        src: `${assets}/banner/6.jpg`,
        alt: "esto es el banner 6",
        titulo: "Castilla",
        parrafo: "Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "banner 6"
    },
];

const arrayImagenes = [
    {
        id: "img1",
        src: `${assets}/img/viajes-1.jpg`,
        alt: "esto es uma imagen de un paisaje 1",
        titulo: "Viaje 1",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?",
        title: "Destino 1"
    },
    {
        id: "img2",
        src: `${assets}/img/viajes-2.jpg`,
        alt: "esto es uma imagen de un paisaje 2",
        titulo: "Viaje 2",
        parrafo: "Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "Destino 2"
    },
    {
        id: "img3",
        src: `${assets}/img/viajes-3.jpg`,
        alt: "esto es uma imagen de un paisaje 3",
        titulo: "Viaje 3",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?",
        title: "Destino 3"
    },
    {
        id: "img4",
        src: `${assets}/img/viajes-4.jpg`,
        alt: "esto es uma imagen de un paisaje 4",
        titulo: "Viaje 4",
        parrafo: "Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "Destino 4"
    },
    {
        id: "img5",
        src: `${assets}/img/viajes-5.jpg`,
        alt: "esto es uma imagen de un paisaje 5",
        titulo: "Viaje 5",
        parrafo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?",
        title: "Destino 5"
    },
    {
        id: "img6",
        src: `${assets}/img/viajes-6.jpg`,
        alt: "esto es uma imagen de un paisaje 6",
        titulo: "Viaje 6",
        parrafo: "Accusamus dolorum quam dicta, perspiciatis alias consectetur non quibusdam voluptas tenetur aperiam est, maiores dolor perferendis at rerum temporibus omnis voluptatem ea?Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "Destino 6"
    }
];

let arrayCiudades =["Galicia", "Asturias", "Cantabria", "Euskadi", "Navarra", "Castilla"]

const pruebaClick = document.addEventListener("click", (ev) => {
    console.log(ev.target)
});

destinos.addEventListener('change',(ev)=>{
    const destino = ev.target.value;
    const ciudad = arrayBanners.find((item)=>item.titulo==destino)
    //console.log(ciudad)

    pintarCiudades(ciudad)
})


const pintarBanner = () => {
    const indice = randomizar()
    const {id, src, alt, title} = arrayBanners[indice];
    foto.src = src
    foto.alt = alt
    foto.title = title
    foto.id = id
};

const pintarFotos = () => {

    //const {id, src, alt, titulo, parrafo, title} = arrayImagenes;
    //console.log(arrayImagenes)
    arrayImagenes.forEach((item) => {

        const cajaDestinos = document.createElement("div");
        const imagenes = document.createElement("img");
        const titular = document.createElement("h2");
        const texto = document.createElement("p");
        const cuerpo = document.createElement("div");

        cajaDestinos.classList.add("card");
        //cajaDestinos.style.width = "30%"
        cuerpo.classList.add("card-body");

        titular.classList.add("card-title");
        titular.textContent = item.titulo;

        texto.classList.add("card-text");
        texto.textContent = item.parrafo;

        imagenes.src = item.src;
        imagenes.alt = item.alt;
        imagenes.id = item.id;
        imagenes.title = item.title;
        imagenes.classList.add("card-img-top");

        cuerpo.append(titular, texto);
        cajaDestinos.append(imagenes, cuerpo);
        fragment.append(cajaDestinos);
    });
    recomendados.append(fragment)
};

const randomizar = () => {
    return parseInt(Math.floor(Math.random() * arrayBanners.length));
};

const selectorCiudades = () => {
    arrayCiudades.forEach((item)=>{
        const ciudad=document.createElement('OPTION');
        ciudad.value=item;
        ciudad.text=item;

        fragment.append(ciudad);

    })
   destinos.append(fragment);
};


const pintarCiudades = (ciudad) => {

    const {id, src, alt, title} = arrayBanners[0];

    const cajaDestinos = document.createElement("div");
    const imagenes = document.createElement("img");
    const titular = document.createElement("h2");
    const texto = document.createElement("p");
    const cuerpo = document.createElement("div");


    titular.textContent = item.titulo;
    texto.textContent = item.parrafo;

    imagenes.src = item.src;
    imagenes.alt = item.alt;
    imagenes.id = item.id;

    cuerpo.append(titular, texto);
    cajaDestinos.append(imagenes, cuerpo);
    fragment.append(cajaDestinos);
    destinos.appendChild(fragment);
};


pintarBanner();
pintarFotos();
selectorCiudades();
pintarCiudades()
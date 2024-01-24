const zona = [
    { id: "1", nombre: "Axilas", precio: 4900, img: "../assets/imagenes/mujeres/axilas.jpeg", idCat: "2", stock: 10 },
    { id: "2", nombre: "Piernas", precio: 9900  , img: "../assets/imagenes/mujeres/piernas.webp", idCat: "2", stock: 10 },
    { id: "3", nombre: "Pecho", precio: 7800, img: "../assets/imagenes/hombres/pecho.jpg", idCat: "1", stock: 10 },
    { id: "4", nombre: "Axilas", precio: 5800, img: "../assets/imagenes/adolescentes/axilas.jpg", idCat: "3", stock: 10 },
    { id: "5", nombre: "Cuerpo completo", precio: 18000, img: "../assets/imagenes/refuerzos/completo.avif", idCat: "4", stock: 10 }
]

export const getZonas= () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(zona);
        }, 100)
    })
}


export const getUnaZona = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const zonas = zona.find(z => z.id === id);
            resolve(zona);
        }, 100)
    })
}



export const getZonasPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const zonasCategoria = zona.filter(z => z.idCat === idCategoria);
            resolve(zonasCategoria);
        }, 100)
    })
}
// // Para guardar constantes o variables se utiliza const

// const tipoNumber = 2024 //numeros

// const tipoString = 'Quiero Dormir' //Cadena de texto

// const tipoBoolean = false // Verdadero o falso

// const tipoUndefined = undefined  // Sinonimo de Error si sale undefined
// const tipoNull = null  // Ves esta vacio

// const tipoArray = [
//     'arroz',
//     'carne',
//     'pollo',
//     'pasta',
//     'salsa de tomate'
// ]

// const quecompre = ['Harina']

// console.log (tipoArray.concat(quecompre))

// const tipoObjeto = {  // Tipo objeto
//     raza: 'Kacri',
//     edad: 15,
//     dueño: 'Carlos',
//     hambre: false
// }

// console.log(tipoNumber)


// const user = {
//     email: 'example@leo.com',
//     password: '1234ñ',
//     name: 'Angel Leal',
//     username: 'angelleal01',
//     address: {
//         city: 'Valencia',
//         state: 'Carabobo',
//         country: 'Venezuela'
//     }
// }

// console.log(user.address.state)

// // Operadores Logicos y Matematicos

// //las funciones son bloques de procedimientos


// const funcion = () => {  //formula para una funcion tipo flecha
//     //El codigo va aqui
// }

axios.get('https://leonardoapi.onrender.com/songs').then((res) => {
    
    //Guardo la lista de canciones
    const songlist = res.data.songs
    const trackList = document.getElementById('track-list')

    const tracklist = document.getElementById('track-list')

    console.log(songlist)

    //Recorriendo la lista de Canciones
    songlist.map((song) => {
        //Por cada cancion


        const div = document.createElement('div')
        div.classList.add('tarjetas__Recomendadas')
        div.innerHTML = `
            <img src="${song.path.front}" alt="">

            <div class="tarjetas__Recomendadas__abajo">

                <div class="tarjetas__Recomendadas__abajo__info">
                    <p>${song.title}</p>
                    <p>${song.author}</p>
                </div>

                <img src="/assets/icono_chiquito_playlist.svg" alt="">

            </div>
        `
        trackList.appendChild(div)

    })

})
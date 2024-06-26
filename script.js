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

        // Antes de agregar el elemento, agregar la interactividad

        div.addEventListener('click', () => {
            //Lo que yo escriba aca sucede cuando pase el evento

            document.getElementById('portada').setAttribute('src', song.path.front)

            document.getElementById('titulo').innerHTML = song.title

            const audio = document.getElementById('audio')

            audio.setAttribute('src', song.path.audio)

            document.getElementById('play').addEventListener('click', () => {

                if (audio.paused) {

                    audio.play()

                } else {

                    audio.pause()

                }


            })

            document.getElementById('playboton').addEventListener('click', () => {
                audio
            })



            // alert(song.title)

        })


        // // Agrega un botón para agregar el audio a una lista de reproducción
        // const addButton = document.querySelector(".add-button");

        // addButton.addEventListener("click", () => {
        //     // Agrega el audio a una lista de reproducción
        // });

        // // Agrega un botón para compartir el audio en las redes sociales
        // const shareButton = document.querySelector(".share-button");

        // shareButton.addEventListener("click", () => {
        //     // Comparte el audio en las redes sociales
        // });


        trackList.appendChild(div)

    })

})
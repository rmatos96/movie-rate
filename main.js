import './style.css'


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY
const imageUrl = import.meta.env.VITE_IMG
const searchUrl = import.meta.env.VITE_SEARCH 

const input = document.querySelector('#searchInput')

const getTopRatedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    const setTopMovies = []
    setTopMovies.push(...data.results)

    console.log('oi');

    document.querySelector('#movieLib').innerHTML = `
        ${setTopMovies.map((movie) => {
            
            window.handleMovie = async function (movieId) {
                const getMovieUrl = async function(url) {
                    const res = await fetch(url)
                    const data = await res.json()
                
                    const setTopMovies = []
                    setTopMovies.push(data)
                    

                    
                    document.querySelector('#modalMovie').innerHTML = `
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog ">
                      <div class="modal-content bg-#121212 ">
                          <h1 class="modal-title fs-5" id="exampleModalLabel"> </h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                             ${setTopMovies.map((movie) => {
                                return (
                                    `<div class="text-[#fff] mb-10 flex flex-col justify-between bg-[#111] p-4">
                                        <img class="mb-4" src='${imageUrl + movie.poster_path}' alt="${movie.title}">
                                        <h2 class="mb-4 font-bold text-2xl">${movie.title}
                                        </h2>
                                        <p class="">
                                            Nota <span>${movie.vote_average}</span>
                                        </p>
                
                                    </div> `
                                )
                                
                             })}
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        </div>
                      </div>
                    </div>
                  </div>
                    `     
                }
                
                const movieUrl = `${moviesURL}${movieId}?${apiKey}`
                await getMovieUrl(movieUrl) 
                
                new bootstrap.Modal('#exampleModal1').show()

            }
            return (
                `<div class="w-[30%] text-[#fff] mb-10 flex flex-col justify-between bg-[#111] p-4">
                            <img class="mb-4" src='${imageUrl + movie.poster_path}' alt="${movie.title}">
                            <h2 class="mb-4 font-bold text-2xl">${movie.title}</h2>

                            <p class="mb-4">
                                Nota <span>${movie.vote_average}</span>
                            </p>

                            <button>
                                <button onclick="handleMovie(${movie.id})" class="bg-#f7d354 border-#f7d354 border-4 rounded-md text-#121212 p-1 flex items-center cursor-pointer transition duration-500 hover:opacity-40 w-full justify-center font-bold text-base" >Detalhes</button>
                            </button>
                </div> `
            )

             
        })}
    `

    
}


addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        handleSubmit()
    }
})

window.handleSubmit = async function() {

    window.handleSearchMovie = async function (movieId) {
        const getMovieUrl = async function(url) {
            const res = await fetch(url)
            const data = await res.json()
        
            const setTopMovies = []
            setTopMovies.push(data)
            

            
            document.querySelector('#modalSearchMovie').innerHTML = `
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog ">
              <div class="modal-content bg-#121212 ">
                  <h1 class="modal-title fs-5" id="exampleModalLabel"> </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                     ${setTopMovies.map((movie) => {
                        return (
                            `<div class="text-[#fff] mb-10 flex flex-col justify-between bg-[#111] p-4">
                                <img class="mb-4" src='${imageUrl + movie.poster_path}' alt="${movie.title}">
                                <h2 class="mb-4 font-bold text-2xl">${movie.title}
                                </h2>
                                <p class="">
                                    Nota <span>${movie.vote_average}</span>
                                </p>
        
                            </div> `
                        )
                        
                     })}
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
              </div>
            </div>
          </div>
            `     
        }
        
        const movieUrl = `${moviesURL}${movieId}?${apiKey}`
        await getMovieUrl(movieUrl) 
        
        new bootstrap.Modal('#exampleModal2').show()

    }
    
    const getSearchMovies = async(url) => {
        const res = await fetch(url)
        const data = await res.json()

        const setTopMovies = []
        setTopMovies.push(...data.results)
        


        document.querySelector('#modal').innerHTML = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog ">
          <div class="modal-content bg-#121212 ">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel"> Resultados para <span class="text-#f7d354">${input.value}</span></h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                 ${setTopMovies.map((movie) => {
                    return(
                        `<div class="text-[#fff] mb-10 flex flex-col justify-between bg-[#111] p-4">
                    <img class="mb-4" src='${imageUrl + movie.poster_path}' alt="${movie.title}">
                    
                    <h2 class="mb-4 font-bold text-2xl">${movie.title}</h2>

                    <p class="mb-4">
                        Nota <span>${movie.vote_average}</span>
                    </p>

                    <button  href="">
                        <button onclick="handleSearchMovie(${movie.id})" class="bg-#f7d354 border-#f7d354 border-4 rounded-md text-#121212 p-1 flex items-center cursor-pointer transition duration-500 hover:opacity-40 w-full justify-center font-bold text-base" >Detalhes</button>
                    </button>
                </div> `
                )    
                 })}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>
        ` 
    }
    const searchQueryUrl = `${searchUrl}?${apiKey}&query=${input.value}`
    
    await getSearchMovies(searchQueryUrl)
    new bootstrap.Modal('#exampleModal').show()
    input.value = ''
    
}


const topRatedUrl = `${moviesURL}top_rated?${apiKey}`

getTopRatedMovies(topRatedUrl)




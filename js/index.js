const getMoviesByName = async (search) => {
    const baseUrl = 'http://www.omdbapi.com/'
    const apiKey = '33a48f2e'
    const url = '${baseUrl}/?=${apiKey}&s=${search}'

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

const getMovieDetailsById = async (movieId) => {
    const baseUrl = 'http://www.omdbapi.com/'
    const apiKey = '33a48f2e'
    const url = '${baseUrl}/?=${apiKey}&i=${movieId}'

    const res = await fetch(url);
    const data = await res.json();
    return data;
 yName('batman')
    .then((data) => console.log(data))
getMovieDetailsById('tt0372784')
    .then((data) => console.log(data))
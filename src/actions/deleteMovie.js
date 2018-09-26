function deleteMovie(product){
    return {
        type: 'deleteMovie',
        movieData: product
    }
}

export default deleteMovie;
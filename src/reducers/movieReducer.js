function movieReducer(state, action){
    if(state === undefined){
        return {
            totalCost: '',
            apiInfo: [],
            movieCart: [
                {
                    movieName: '',
                    moviePrice: ''
                }
            ]
        }
    }

    switch(action.type) {
        case 'addMovie':
        {
            console.log(action.movieData)
            return {
                ...state,
                
                    movieName: action.movieData.movieName,
                    moviePrice: action.movieData.moviePrice
                
            }
        }

        // case 'deleteMovie':
        //     const updatedArray = state.movieName.filter

        case 'apiFetchData':
        {
            return {
                ... state,
                apiInfo: action.payload
            }
        }
        default:
            return state;
    }
}

export default movieReducer;
function movieReducer(state, action){
    if(state === undefined){
        return {
            totalCost: '',
            apiInfo: [],
            movieCart: [
                {
                    movieName: '',
                    moviePoster: '',
                    moviePrice: ''
                }
            ]
        }
    }

    switch(action.type) {
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
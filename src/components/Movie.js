import React from 'react';
import Cart from './Cart'


class Movie extends React.Component {
    constructor(props) {
        super(props);
        
    }

    componentWillMount(){
        fetch('http://www.omdbapi.com/?s=batman&apikey=ffa9be4e')
        .then((response => response.json()))
        .then(response => this.props.onFetch(response))
    }

    render() {

        var movies = [];
        var priceMovie = 13.99

        if (this.props.movieData.Search !== undefined){

            if (this.props.movieData.Search.length > 0) {

                movies = this.props.movieData.Search.map(movies => {

                    return (
                        <div style={{margin: '15px 3px 15px 30px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <img src={movies.Poster} />
                        <h3 style={{fontSize: '15px'}}>{movies.Title}</h3>
                        <h6>${priceMovie}</h6>
                        <button>Add to Cart</button>
                        </div>
                        )
                })
            }
        }
        

        return (
            <div>
                <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                    <img src="https://mbtskoudsalg.com/images/movie-ticket-clipart-png-8.png" width="15%"/>
                    <button>Cart</button>
                </div>
                < br/>

                <br />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                    
                    {movies}
                    
                </div>

                <Cart />
                
                {console.log(this.props.movieData.Search)}
                </div>
        );
    }
}

export default Movie


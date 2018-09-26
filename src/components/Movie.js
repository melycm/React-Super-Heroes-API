import React from 'react';


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

        if (this.props.movieData.Search !== undefined){

            if (this.props.movieData.Search.length > 0) {

                movies = this.props.movieData.Search.map(movies => {

                    return (
                        <li>{movies.Title}</li>
                        )
                })
            }
        }
        

        return (
            <div>
                <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                    <img src="https://mbtskoudsalg.com/images/movie-ticket-clipart-png-8.png" width="15%"/>
                </div>
                < br/>

                <br />
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                    <div>
                        <img src="https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg" />
                        <h3>Guardians of the Galaxy Vol. 2</h3>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg" />
                        <h3>Batman: The Dark Knight Returns, Part 1</h3>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/M/MV5BZjU4MzIyZWUtNWQ4Yy00YTU4LTk5NjUtNDBiNDkxZTVlZDgwXkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg" />
                        <h3>Superman/Doomsday</h3>
                    </div>
                </div>

                {movies}
                
                {console.log(this.props.movieData.Search)}
                </div>
        );
    }
}

export default Movie


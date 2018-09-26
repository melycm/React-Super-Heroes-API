import React from 'react';
import Movie from '../components/Movie'


class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                {/* <div style={{backgroundColor: 'black', fontSize: '15px', color: 'white', textAlign: 'center', width: '100vw'}}>
                    <img src="https://mbtskoudsalg.com/images/movie-ticket-clipart-png-8.png" width="15%"/>
                </div>
                < br/> */}
                <table>
                    <thead>
                        <th>Movie</th>
                        <th>Movie Price</th>
                        <th>#</th>
                    </thead>
                    <tbody>
                        <td>Movie Name</td>
                        <td>9.99</td>
                        <button>Remove</button>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Cart

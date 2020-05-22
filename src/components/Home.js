import React from 'react';
import {Link} from 'react-router-dom';


const Home = props => (
    <div className='home'>
        <header>
            <h1>Lambda Eats!</h1>
            <Link to='/pizza' className='pizza-link'>Order your Pizza!</Link>
        </header>
    </div>
);
export default Home;

import React from 'react';
import {Link} from 'react-router-dom';


const Home = props => (
    <div className='home'>
        <Link to='/pizza' className='home-button'>Pizza</Link>
    </div>
);
export default Home;

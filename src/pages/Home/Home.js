import React from 'react';
import Cat from './components/Cat/Cat';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = ({ history }) => {
    return (
        <div className='home-catbot-container'>
            <div className='home-catbot-content'>
                <Cat history={history} />
                <div className='home-catbot-greeting'>
                    <Fade opposite>
                    <h1>¡Hola!</h1>
                    </Fade>
                    <Fade opposite>
                    <label>Querés charlar?</label>
                    <label>Click sobre mi para comenzar</label>
                    </Fade>

                </div>

            </div>
            
        </div>
    )
}



export default Home;
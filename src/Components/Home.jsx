import React from 'react'
import { Link } from 'react-router-dom'
import MainView from './MainView'


const Home = () => {

    return (
            <div>
                <MainView />
                <Link to={"/Capsules"} className= 'btn btn-primary btn-sm mx-1'> Capsules </Link>
                <Link to={"/Launches"} className= 'btn btn-primary btn-sm mx-1'> Launches </Link>
                
            </div>
    )
}

export default Home
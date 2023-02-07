import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <div >
            <div>
                <Link to={"/Capsules"} className= 'btn btn-primary btn-sm mx-1'> Capsules </Link>
                <Link to={"/Launches"} className= 'btn btn-primary btn-sm mx-1'> Launches </Link>
            </div>
        </div>
    )
}

export default Home
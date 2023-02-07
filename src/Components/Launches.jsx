import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom'

const Launches = () => {

const LAUNCHES = gql`
query LaunchesPast {
    launchesPast {
      id
      mission_name
      details
      launch_date_local
      links {
        article_link
      }
    }
  }
`;

    const { loading, error, data } = useQuery(LAUNCHES)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
//     const articlenotfound = () => {
//         if (data.launchesPast.links.article_link === null) 
//         return <p>Link no encontrado</p>
//         else {
//         return  <p>{data.launchesPast.links.article_link}</p>
//         }

// } 

    return (
        <div>
            <Link to={"/"} id="backhome" > Home </Link>
            <ul className='cards'>
                {(data.launchesPast.map(({ id, mission_name, details, launch_date_local, links }) =>
                    <div key={id}>
                        <div className='card mx-auto'>
                            <h5>{mission_name}</h5>
                            {/* <p>{details}</p> */}
                            <p>{launch_date_local}</p>
                            <p>{links.article_link}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )



}

export default Launches
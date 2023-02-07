import React from 'react'
import { useQuery, gql } from "@apollo/client";
import { Link } from 'react-router-dom'

const Capsules = () => {
    const CAPSULES = gql`
    query Capsules {
        capsules {
          type
          reuse_count
          status
        }
      }
`;

    const { loading, error, data } = useQuery(CAPSULES)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <Link to={"/"} id="backhome"> Home </Link>
            <ul className='cards' >
                {(data.capsules.map(({ id, type, reuse_count, status }) =>
                    <div key={id}>
                        <div className='card mx-auto'>
                            <h5>{type}</h5>
                            <p>{reuse_count}</p>
                            <p>{status}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default Capsules
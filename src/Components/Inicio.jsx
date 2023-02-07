import React from 'react'
import { useQuery, gql } from "@apollo/client";

const Inicio = () => {
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
            <ul>
                {(data.capsules.map(({ id, type, reuse_count, status}) =>
                    <div key={id} className='container d-flex'>
                        <div className='card mx-auto mb-2'>
                            <h4>{type}</h4>
                            <p>{reuse_count}</p>
                            <p>{status}</p>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default Inicio
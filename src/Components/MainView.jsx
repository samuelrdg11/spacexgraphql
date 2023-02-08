import React from 'react'
import { useQuery, gql } from "@apollo/client";


const MainView = () => {
    const COMPANY = gql`
    query Company {
        company {
          ceo
          coo
          employees
          founded
          name
        }
      }
`;

    const { loading, error, data } = useQuery(COMPANY)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div>
            <div className='main'>
                <p>CEO: {data.company.ceo}</p>
                <p>COO: {data.company.coo}</p>
                <p>EMPLOYEES: {data.company.employees}</p>
                <p>FOUNDED: {data.company.founded}</p>
            </div>
        </div>
    )
}


export default MainView
import { useQuery, gql } from "@apollo/client";
import './App.css';

const LAUNCHES = gql`
query LaunchesPast {
    launchesPast {
      id
      mission_name
      details
      launch_date_local
      
    }
  }
`;

function Launches() {
    const { loading, error, data } = useQuery(LAUNCHES)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (

        <div className="App">
            <ul>
            {(data.launchesPast.map(({ id, mission_name, details, launch_date_local }) =>
                <div key={id}>
                    <h4>{mission_name}</h4>
                    <small>{details}</small>
                    <p>{launch_date_local}</p>
                </div>
            )
            )
            }
            </ul>
        </div>
    )
}

export default function Client() {


    return (
        <div>
            <Launches />
        </div>
    )
}
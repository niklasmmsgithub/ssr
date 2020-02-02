import gql from "graphql-tag";
import { Query } from "react-apollo";

const query = gql`
  {
    restaurants {
      id
      name
      description,
      categories {
          id,
          name
      }
    }
  }
`;

const RestaurantList = ({ data, error }) => {
  return (
    <Query query={query}>            
      {({data, error, loading}) => {
        if(loading) return <p>Loading</p>
        return data.restaurants.map(user => <div>{user.name}</div>);
      }}
    </Query>
  );
};

export default RestaurantList;
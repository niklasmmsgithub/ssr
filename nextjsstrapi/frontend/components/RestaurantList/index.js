import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";

const RestaurantList = (
  { data: { loading, error, restaurants }, search },
  req
) => {
  if (error) return "Error loading restaurants";

  if (restaurants && restaurants.length) {
    //searchQuery
    const searchQuery = restaurants;

    if (searchQuery.length != 0) {
      return (
        <div>
          <div className="h-100">
            {searchQuery.map(res => (
                <div key={res.id}>
                    {res.name}
                    <ul>
                        {res.categories.map(c => <li key={c.id}>{c.name}</li>)}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  return <h1>Loading</h1>;
};

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

RestaurantList.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(RestaurantList);
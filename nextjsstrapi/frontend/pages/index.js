import RestaurantList from "../components/RestaurantList";
import React from "react";

class Index extends React.Component {
  constructor(props) {
    super(props);
    //query state will be passed to RestaurantList for the filter query
  }

  render() {
    return (
      <div className="container-fluid">
        <RestaurantList />
      </div>
    );
  }
}

export default Index;
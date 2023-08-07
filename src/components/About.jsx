import { Component } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import UserContext from "../utils/UserContext";

//creating about class based component

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us Page</h1>

        {/* <Outlet/> */}
        <UserContext.Consumer>
          {({user}) => <h4 className="font-bold text-xl p-10">Created :{user.name}</h4>}
        </UserContext.Consumer>
        <Profile name={"Child 1"} />
      </div>
    );
  }
}

export default About;

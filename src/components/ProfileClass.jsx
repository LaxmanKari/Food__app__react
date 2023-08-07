import React from "react";

//WE ARE DIFFERENTIATING REACT CLASS COMPONENT FROM NORMAL CLASSES
class Profile extends React.Component {
  constructor(props) {
    super(props);
    //create state
    this.state = {
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
   // console.log("constructor")
  }

  //called after component rendered
  async componentDidMount() {
    
    const data = await fetch("https://api.github.com/users/LaxmanKari");
    const json = await data.json();
    this.setState({
      userInfo: json
    });
    // this.timer = setInterval(()=>{
    //   console.log("Akshay Saini Op")
    // }, 1000)

   // console.log("componentDidMount")
  }

  // componentDidUpdate(){
  //   console.log("componentDidUpdate")
  // }

  // componentWillUnmount(){
  //    clearInterval(this.timer);
  //    console.log("componentWillUnMount");
  // }

  render() {
    const { count } = this.state;
    console.log("render")
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url}/> 
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Id: {this.state.userInfo.id}</h2>
      </div>
    );
  }
}

export default Profile;

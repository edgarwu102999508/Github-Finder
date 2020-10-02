import React, { Component, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get("https://api.github.com/users");
    this.setState({ users: response.data, loading: false });
    console.log(response.data);
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </Fragment>
    );
  }
}

export default App;

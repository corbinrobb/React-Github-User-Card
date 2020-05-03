import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';
import FollowersList from './components/FollowersList';

class App extends React.Component {
  state = {
    user: null,
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/corbinrobb')
      .then(res => {
        this.setState({ ...this.state, user: res.data })
      })
      .catch(err => console.log(err))

    axios
      .get('https://api.github.com/users/corbinrobb/followers')
      .then(res => {
        this.setState({ ...this.state, followers: res.data })
      })
      .catch(err => console.log(err))
  }

  

  render() {
    console.log(this.state)
    return (
      <>
        <div className="container">
          {this.state.user && <Card data={this.state.user} />}
        </div>
        <h3>Followers: </h3>
        <div className="container">
          <FollowersList followers={this.state.followers} />
        </div>
      </>
    );
  }
}

export default App;
import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';
import FollowersList from './components/FollowersList';
import SearchUser from './components/SearchUser';

class App extends React.Component {
  state = {
    user: null,
    followers: [],
    term: ''
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

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated')
      if(prevState.term !== this.state.term){
        if(this.state.term) {
        axios
          .get(`https://api.github.com/users/${this.state.term}`)
          .then(res => {
            this.setState({ ...this.state, user: res.data })
          })
          .catch(err => console.log(err))

        axios
          .get(`https://api.github.com/users/${this.state.term}/followers`)
          .then(res => {
            this.setState({ ...this.state, followers: res.data })
          })
          .catch(err => console.log(err))
      }
    }
  }

  onSubmit = (term) => {
    this.setState({ term: term });
  }

  render() {
    return (
      <>
        <div className="container">
          {this.state.user && <Card data={this.state.user} />}
          <SearchUser onSubmit={this.onSubmit} />
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
import React from 'react';

class SearchUser extends React.Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.value);
        this.setState({ value: '' });
      }}>
        <input
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button>Find User</button>
      </form>
    );
  }
}

export default SearchUser;
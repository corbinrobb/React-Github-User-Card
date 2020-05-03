import React from 'react';

class FollowerCard extends React.Component {

  render() {
    console.log(this.props.data)

    return (
      <div class="card">
        <img src={this.props.data.avatar_url} alt={this.props.login} />
        <h2>{this.props.data.login}</h2>
        <h3><a href={this.props.data.html_url}>{this.props.data.login}'s github</a></h3>
      </div>
    );
  }
}

export default FollowerCard;

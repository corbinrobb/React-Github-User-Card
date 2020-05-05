import React from 'react';

class Card extends React.Component {

  render() {
    console.log(this.props.data)

    return (
      <div className="card">
        <img src={this.props.data.avatar_url} alt={this.props.login} />
        <h2>{this.props.data.name}</h2>
        <h3>Bio: {this.props.data.bio}</h3>
        <h3>Location: {this.props.data.location}</h3>
        <h3><a href={this.props.data.html_url}>{this.props.data.login}'s github</a></h3>
      </div>
    );
  }
}

export default Card;
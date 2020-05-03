import React from 'react';
import FollowerCard from './FollowerCard';

class FollowersList extends React.Component {
  render() {
    return (
      <>
        {this.props.followers.map(follower => <FollowerCard data={follower} />)}
      </>
    );
  }
}

export default FollowersList;
import React from 'react';
import FollowerCard from './FollowerCard';

class FollowersList extends React.Component {
  render() {
    return (
      <>
        {this.props.followers.map(follower => <FollowerCard key={follower.id} data={follower} />)}
      </>
    );
  }
}

export default FollowersList;
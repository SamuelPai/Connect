import React from "react";
import Example from "../../components/Example/Example.component";
import friends from '../../utils/friends.json'

export class ExamplePage extends React.Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <Example
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            title={friend.title}
            image={friend.image}
            Description={friend.Description}
            location={friend.location}
          />
        ))}
      </div>
    );
  } 
}

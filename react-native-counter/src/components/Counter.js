import React from 'react';
import { View, Button, Text } from 'react-native';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  handleClick = value => {
    this.setState({ count: this.state.count + value });
  }

  render() {
    return(
      <React.Fragment>
        <Text>{this.state.count}</Text>
        <Button
          title="-"
          onPress={() => this.handleClick(-1)}
        />
        <Button
          title="+"
          onPress={() => this.handleClick(1)}
        />
      </React.Fragment>
    );
  }
}

export default Counter;
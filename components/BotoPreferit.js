import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert, Button } from 'react-native';

export default class BotoPreferit extends Component {
  constructor() {
    super();

    this.state = {
      flagImage: true
    };
  }
  changeImage = () => {
    this.setState({
      flagImage: !this.state.flagImage
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.changeImage}>
          <Image style={styles.image} source={this.state.flagImage === true ?
            require('../assets/likee.png') :
            require('../assets/emptylike.png')}
          />
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    padding: 16,
    width: 115,
    height: 105,
    borderColor:'black',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  image: {
    width: 115,
    height: 100,
  }
});
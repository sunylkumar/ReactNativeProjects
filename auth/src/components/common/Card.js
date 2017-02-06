import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.constainerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  constainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    elevation: 1,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5
  }
};

export { Card };

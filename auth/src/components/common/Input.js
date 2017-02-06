import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, secureTextEntry, placeholder, value, onChangeText }) => {

  const { labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
    <Text style={labelStyle}>{ label } </Text>
    <TextInput
      autoCorrect={false}
       style={styles.inputTextStyle}
       placeholder={placeholder}
       secureTextEntry={secureTextEntry}
       value={value}
       onChangeText={onChangeText}
    />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  inputTextStyle: {
   color: '#000',
    //backgroundColor: 'rgba(255, 255, 255, 0.1)',
   // color: 'rgba(255, 255, 255, 0.9)',
    paddingVertical: 0,
    fontSize: 18,
    lineHeight: 25,
    flex: 3,
    height: 50,
    //width: 100
  }
};


export { Input };

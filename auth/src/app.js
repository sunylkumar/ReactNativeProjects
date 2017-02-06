import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'IzaSyDLqvucDp-itk0C5_lOW4eIfITKk30XRcQ',
      authDomain: 'authentication-7e488.firebaseapp.com',
      databaseURL: 'https://authentication-7e488.firebaseio.com',
      storageBucket: 'authentication-7e488.appspot.com',
      messagingSenderId: '250906901666'
    });
  }
    render() {
        return (
            <View>
            <Header headerText={'Authentication'} />
            <LoginForm />
            </View>
        );
    }
}

export default App;

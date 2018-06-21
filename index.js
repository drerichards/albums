import React from 'react';
import {Text, AppRegistry} from 'react-native';
import Header from './src/components/Header'

const App = () => {
    return(
            <Header headerText={'Albums'}/>
    )
}
AppRegistry.registerComponent('albums', () => App);
//first arg has to match name of project
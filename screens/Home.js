import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import logo from '../assets/logo.png';

class Home extends Component {
    render() {
        return (
            <View>
                <Image source={logo} style={{ width: 305, height: 159 }} />
                <Text>I Need a Mask</Text>
            </View>
        );
    }
}

export default Home;
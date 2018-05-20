import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

class TouchVerification extends Component {
    static navigationOptions = {
        title: 'Touch ID',
      };

    render() {
        return (
            <View style={styles.container}>
                <Text>Winston Fan</Text>
                <Text>Start Screen</Text>
                <Text>Step-by-step Guide</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    red: {
        color: 'red',
        flex: 1,
    },
    blue: {
        color: 'blue',
        flex: 1,
    },
});

export default TouchVerification;
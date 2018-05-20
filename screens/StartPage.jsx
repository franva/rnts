import React from 'react';
import { Component } from 'react';
import { TouchableHighlight, StyleSheet, View, Button, Text, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const RadioButton = props => {

    console.log("selected = ", props.selected);

    return (
        <View style={[{
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: props.selected ? '#1e8ac8' : '#000',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: props.selected ? '#1e8ac8' : '#fff'
        }, props.style]}>
            {
                props.selected ?
                    <View style={{
                        height: 14,
                        width: 14,
                        borderRadius: 6,
                        backgroundColor: '#1e8ac8',
                    }}>
                        <Text style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            alignContent: 'center',
                            marginTop: -4,
                            marginLeft: -4,
                            padding: 0,
                            fontSize: 18,
                            fontWeight: '900',
                            color: '#fff'
                        }}>✔</Text>
                    </View>
                    : null
            }
        </View>
    );
}

const ProfileImg = () => (
    <View style={styles.header}>
        <Image
            source={require('../static/profile-picture.jpg')}
            style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                alignSelf: 'center',
                marginRight: 15
            }}
        />
        <Text>Anthony Mazzei</Text>
        <View style={{
            display: 'flex',
            alignSelf:'flex-end',
            alignContent:'flex-end',
            alignItems:'flex-end',
            justifyContent:'flex-end',
            borderColor: '#1e8ac8',
            borderRadius: 50,
            borderWidth: 1,
            width: 20,
            height: 20,
            marginLeft: 30,
            marginBottom: 8,
        }}>
            <Text style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                color: '#1e8ac8',
                fontSize: 16,
                fontWeight: '500',
                width: 20,
                height: 20,
                paddingLeft: 7,
                paddingBottom: 1
            }}>i</Text>
        </View>
    </View>
);

class StartPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roadWorthCertificate: false,
            transferOwnership: false
        }
        this.goIDVerification = this.goIDVerification.bind(this);
        this.onPressButton = this.onPressButton.bind(this);
    }

    static navigationOptions = {
        title: 'Home',
        headerTitle: (
            <ProfileImg />
        ),
        headerStyle: {
            backgroundColor: '#eaeced',
        },
    };

    onPressButton(option) {
        if (option === 'rwc') {
            this.setState(prevState => {
                console.log("rwc");
                return {
                    roadWorthCertificate: true,
                    transferOwnership: false
                }
            })
        } else {
            this.setState(prevState => {
                console.log("to");
                return {
                    transferOwnership: true,
                    roadWorthCertificate: false
                }
            })
        }
    }

    goIDVerification() {
        this.props.navigation.navigate('IDVerificationScreen')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Start Screen</Text>
                    <Text style={styles.subTitle}>Step-by-step Guide</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.radioButton} onPress={() => this.onPressButton("rwc")}>
                        <View style={styles.radioButtonView}>
                            <RadioButton selected={this.state.roadWorthCertificate} />
                            <Text style={styles.radioButtonText}>Road Worth Certificate</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.radioButton} onPress={() => this.onPressButton("to")}>
                        <View style={styles.radioButtonView}>
                            <RadioButton selected={this.state.transferOwnership} />
                            <Text style={styles.radioButtonText}>Transfer Ownership</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eaeced',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    header: {
        display:'flex',
        flex: 1,
        flexDirection: 'row',
        alignContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#eaeced'
    },
    titleContainer: {
        marginTop: -60
    },
    title: {
        fontSize: 28,
        fontWeight: '500'
    },
    subTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: 'gray',
        alignSelf: 'center'
    },
    buttonContainer: {
        position: 'relative',
        top: 0
    },
    radioButton: {
        marginTop: 15
    },
    radioButtonView: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: 'white',

        height: 65,
        alignContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: 255,
        paddingLeft: 10,
        paddingRight: 10
    },
    radioButtonText: {
        fontWeight: '500',
        fontSize: 18,
        marginLeft: 10
    }
});

export default StartPage;
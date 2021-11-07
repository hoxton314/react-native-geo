import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import MyButton from './MyButton'
import * as Font from "expo-font";

export default class MainScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            fontloaded: false
        }
    }
    componentDidMount = async () => {
        await Font.loadAsync({
            'myfont': require('../assets/Font.ttf'), // Uwaga: proszę w nazwie fonta nie używać dużych liter
        });
        this.setState({ fontloaded: true })
    }

    render() {
        return (
            <View>
                {
                    this.state.fontloaded
                        ?
                        <View style={styles.header}>
                            <Text style={styles.text}>GeoMap App</Text>
                        </View>
                        :
                        null
                }

                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <View style={styles.main}>
                        <MyButton
                            fontsize={25}
                            text="Start"
                            func={() => { this.props.navigation.navigate("list") }}
                            styles={{ width: 300, marginLeft: 15, }}
                        />
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = {
    header: {
        height: 300,
        backgroundColor: '#3f5ca8',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'myfont'
    },
    formtext: {
        fontSize: 25,
        marginLeft: 15
    },
    textinput: {
        backgroundColor: '#99aab5',
        height: 30,
        marginBottom: 10,
        borderColor: '#3f5ca8',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 1,
        width: 300,
        marginLeft: 15
    },
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    }
}


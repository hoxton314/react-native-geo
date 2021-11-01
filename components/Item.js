import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import MyButton from './MyButton'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.data.time,
            lat: this.props.data.lat,
            lon: this.props.data.lon
        }
    }
    componentDidUpdate(prevState) {
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.tablica}><Text style={styles.text}>Timestamp: {this.state.time}</Text><Text style={styles.text}>Lattitude: {this.state.lat}</Text><Text style={styles.text}>Longtitude: {this.state.lon}</Text></View>
        )
    }
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ratio = windowHeight > windowWidth ? windowWidth : windowHeight
const styles = {
    userlogo: {
        width: ratio * 0.2,
        height: ratio * 0.2
    },
    tablica: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        fontSize: 25
    }
}




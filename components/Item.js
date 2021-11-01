import React, { Component } from 'react'
import { Text, View, Image, Dimensions, Switch } from 'react-native'


export default class Item extends Component {
    constructor(props) {
        super(props)
        console.log('flatlist==============================', this.props.data.value.timestamp)
        this.state = {
            globeImg: require('../assets/globe.png'),
            timestamp: this.props.data.value.timestamp,
            key: this.props.data.key,
            value: this.props.data.value,
            switchState: false,
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.switchState !== this.state.switchState) {
            console.log(this.state.switchState)
            this.props.callback(this.props.data, this.state.switchState)
        }
        if (prevProps.mainSwitch != this.props.mainSwitch) {
            this.setState({ switchState: this.props.mainSwitch  })
        }
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={styles.tablica}>
                <View>
                    <Image style={styles.userlogo} source={this.state.userlogo} />
                </View>
                <View>
                    <Text style={styles.textBig}>Timestamp: {this.state.timestamp}</Text>
                    <Text style={styles.text}>Latitude: {this.props.data.value.coords.latitude}</Text>
                    <Text style={styles.text}>Longitude: {this.props.data.value.coords.longitude}</Text>
                </View>
                <View>
                    <Switch
                        style={{ justifyContent: 'flex-end' }}
                        trackColor={{ false: "#767577", true: "#7289da" }}
                        thumbColor={this.state.switchState ? "#3f5ca8" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => { this.setState({ switchState: !this.state.switchState }) }}
                        value={this.state.switchState}
                    />
                </View>

            </View>
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 12
    },
    textBig: {
        fontSize: 15
    }
}




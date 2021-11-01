import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native';
import MyButton from './MyButton'
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mapData: this.props.route.params.mapData,
            mapMarkerList: '',
            start: { lat: 50.111, lon: 20.111 }
        }
    }
    componentDidUpdate(){
        console.log(this.state.start.lat)
    }
    componentDidMount() {
        this.setState({ mapMarkerList:''})
        this.setState({start: { lat: this.state.mapData[0].value.coords.latitude, lon: this.state.mapData[0].value.coords.longitude }})
        console.log(this.state.mapData)
        let mapViewList = []
        this.state.mapData.forEach(element => {
            mapViewList.push(<MapView.Marker key={String(Math.random())} coordinate={{ latitude: element.value.coords.latitude, longitude: element.value.coords.longitude, }} title={"pos"} description={"opis"} />)
        });
        console.log(mapViewList)
        this.setState({ mapMarkerList: mapViewList })
    }
    render() {

        return (
            <View>

                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: this.state.start.lat,
                        longitude: this.state.start.lon,
                        // latitude: this.state.mapData[0].value.coords.latitude == undefined ? 50.111 : this.state.mapData[0].value.coords.latitude,
                        // longitude: this.state.mapData[0].value.coords.longitude == undefined ? 50.111 : this.state.mapData[0].value.coords.longitude,
                        latitudeDelta: 0.001,
                        longitudeDelta: 0.001,
                    }}
                >
                    {this.state.mapMarkerList}

                </MapView>
            </View>
        )
    }
}

const styles = {
    main: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
}


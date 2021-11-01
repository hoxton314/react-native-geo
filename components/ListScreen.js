import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';
import Item from './Item';
import MyButton from './MyButton'

export default class ListScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flatlist: [],
            userlistFlag: ''
        }
    }
    componentDidMount() {
    }
    componentDidUpdate(prevState) {
    }
    handleCallback = () => {
    }
    render() {


        const renderItem = ({ item }) => (<Item data={item} />);
        return (
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MyButton
                        styles={{ height: 60 }}
                        fontsize={15}
                        text="Pobierz i zapisz pozycje"
                        func={() => { }}
                    />
                    <MyButton
                        styles={{}}
                        fontsize={15}
                        text="Usuń wszystkie dane"
                        func={() => { }}
                    />
                </View>
                <View>
                    <MyButton
                        styles={{}}
                        fontsize={20}
                        text="Przejdź do mapy"
                        func={() => { }}
                    />
                </View>
                <View>
                    <FlatList
                        data={this.state.flatlist}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View></View>
        )
    }
}

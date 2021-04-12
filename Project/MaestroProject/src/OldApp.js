import React, { Component } from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Title from './Components/Welcome'

class App extends Component{
    render(){     
        return (
        <View style={styles.container}>
        <Title/>
        <Text>Virjin cantik</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
    },
})
export default App
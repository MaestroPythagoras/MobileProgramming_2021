import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/welcome';

class App extends Component{
    render() {
        const title = 'Welcome';
        return (
            <View style={styles.container}>
            <Text>{title}</Text>
            <Text>Hello World</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
    },
    });

export default App;
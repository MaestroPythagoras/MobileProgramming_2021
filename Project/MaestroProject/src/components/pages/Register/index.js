import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const App = () =>{
    return (
    <View style={styles.container}>
    <Text style={styles.title}>Registration</Text>
    <Gap height={40} />
    <TextInput label="* First Name" placeholder="Masukan (Nama Pertama) Anda"/>
    <Gap height={24} />
    <TextInput label="* Last Name" placeholder="Masukan (Nama Terakhir) Anda"/>
    <Gap height={24} />
    <TextInput label="* E-Mail" placeholder="Masukan (E-mail) Anda"/>
    <Gap height={48} />
    <Button label="DAFTAR" />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical:25,
    },
    title: {
        fontSize: 36,
        fontWeight: '700',
    },
});
export default App;
   
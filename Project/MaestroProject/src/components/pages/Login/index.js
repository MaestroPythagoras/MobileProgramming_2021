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
    <TextInput label="Name" placeholder="Masukan Nama Lengkap Anda"/>
    <Gap height={24} />
    <TextInput label="Username" placeholder="Masukan Username Anda"/>
    <Gap height={24} />
    <TextInput label="E-Mail" placeholder="Masukan E-mail Anda"/>
    <Gap height={24} />
    <TextInput label="Address" placeholder="Masukan Alamat Anda"/>
    <Gap height={24} />
    <TextInput label="Phone Number" placeholder="Masukan Nomor Telepon Anda"/>
    <Gap height={48} />
    <Button label="Register" />
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
   
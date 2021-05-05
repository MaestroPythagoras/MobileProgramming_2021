import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Button, TextInput, Gap} from '../../components';

const Format = ({navigation}) => {
    return (
    <View style={styles.page}>
    <Header title="Back" onBack={() => navigation.goBack()} />
    <View style={styles.contentWrapper}></View>
    <TextInput
          title="Format Kertas"
          placeholder="A4"
        />
    <Gap />
    <TextInput
          title="Jenis Bahan Kertas"
          placeholder="A4"
        />
     <TextInput
          title="Kliping"
          placeholder="A4"
        />
     <TextInput
          title="Keterangan"
          placeholder="A4"
        />
     <Gap />
    <Button title="Pesan" />
    </View>
    );
};

export default Format;

const styles = StyleSheet.create({
    contentWrapper: {
        marginTop: 24,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: 26,
    },
    page: {
        flex: 1,
      },
  });
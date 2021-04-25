import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';

const SignIn = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Sign In</Text>
    <Gap height={40} />
    <TextInput label="E-Mail" placeholder="Masukan E-mail Anda"/>
    <Gap height={24} />
    <TextInput label="Password" placeholder="Masukan Password Anda"/>
    <Gap height={48} />
    <Button label="Sign In" />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
      marginHorizontal: 25,
      marginVertical:25,
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 20,
  },
  title: {
      fontSize: 36,
      fontWeight: '700',
      textAlign: 'center',
  },
});

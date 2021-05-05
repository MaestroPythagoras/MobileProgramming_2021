import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/icon/LogoPJ/index';
import { Gap } from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.text}>PrintJoDg.com</Text>
      <Gap height={16} width={20} />
      <Text style={styles.quotes}>Your Paper Our Priority</Text>
      <Text style={styles.quotes}>Order Now PrintJoDg.com</Text>
    </View>

  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },

  quotes: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#f44336',
    fontStyle: 'italic',
    
  },
});

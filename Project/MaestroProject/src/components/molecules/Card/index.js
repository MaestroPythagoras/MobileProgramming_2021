import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Card = ({name, username, email, address, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Name: {name}</Text>
      <Text style={styles.username}>Username: {username}</Text>
      <Text style={styles.email}>Email: {email}</Text>
      <Text style={styles.address}>Address: {address}</Text>
      <Text style={styles.phone}>Phone: {phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    alignItems: 'flex-start',
    borderWidth: 2,
    padding: 10,
    marginHorizontal: 25,
    marginVertical:25,
    
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
  },
  username: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
  },
  email: {
    fontSize: 14,
    color: 'grey',
    marginTop: 14,
  },
  address: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
  },
  phone: {
    fontSize: 14,
    color: 'grey',
    marginTop: 10,
  },
});
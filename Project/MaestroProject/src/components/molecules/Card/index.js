import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({fullName, userName, email, phone}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{fullName}</Text>
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  userName: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  phone: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
});
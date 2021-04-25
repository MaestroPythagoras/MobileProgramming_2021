import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Card = ({fullName, username, email, address, phone, imageUrl}) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: `${imageUrl}`}} />
      <View>
      <Text style={styles.name}>- Name: {fullName}</Text>
      <Text style={styles.email}>- Email: {email}</Text>
      </View>
      {/* <Text style={styles.address}>Address: {address}</Text>
      <Text style={styles.phone}>Phone: {phone}</Text> */}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 3,
    padding: 15,
    marginHorizontal: 10,
    marginVertical:15,
  },
  cardWrapper: {
    marginLeft: 10,
    justifyContent: 'center'
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
  image: {
    height: 100,
    width: 100,
    marginTop: 5,
    borderRadius: 100,
  },
});
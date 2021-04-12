import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Card from '../../molecules/Card';
import Axios from 'axios';

const HomeScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //Fetch
    // fetch('https://reqres.in/api/users')
    //   .then(res => res.json())
    //   .then(json => setUsers(json.data));
    
    //Axios
    Axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => setUsers(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Users List</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {users.map(item => 
          <Card
          name={item.name}
          username={item.username}
          email={item.email}
          address={`${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
          phone={item.phone}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
  },
  card: {
    marginTop: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
  },
  email: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  image: {
    height: 150,
    width: 150,
    marginTop: 10,
  },
});
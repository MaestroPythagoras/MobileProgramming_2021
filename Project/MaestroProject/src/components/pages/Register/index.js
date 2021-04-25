import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import TextInput from '../../atoms/TextInput';
import Button from '../../atoms/Button';
import Gap from '../../atoms/Gap';
import Card from '../../molecules/Card';
import Axios from 'axios';

const Register = () => {
    const [users, setUsers] = useState([]);
    const [firstName, set_FirstName] = useState('');
    const [lastName, set_LastName] = useState('');
    const [email, set_Email] = useState('');
  
    useEffect(() => {
      Axios
        .get('http://localhost:3004/users')
        .then(res => setUsers(res.data),
        );
    }, [users]);
  
    const handleSubmit = () => {
      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      Axios.post('http://localhost:3004/users', data)
    };
  
    return (
    <ScrollView showsVerticalScrollIndicator={false}> 
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View>
        <Gap height={40} />
        <TextInput
          value={firstName}
          label="First Name"
          placeholder="Masukan First Name Anda"
          onChangeText={e => set_FirstName(e)}
        />
        <Gap height={24} />
        <TextInput
          value={lastName}
          label="Last Name"
          placeholder="Masukan Last Name Anda"
          onChangeText={e => set_LastName(e)}
        />
        <Gap height={24} />
        <TextInput
          value={email}
          label="Email"
          placeholder="Masukan Email Name Anda"
          onChangeText={e => set_Email(e)}
        />
        <Gap height={48} />
        <Button label="S A V E" onSubmit={handleSubmit} />
        </View>

        <View>
          {users.map(item => (
            <Card
            key={item.id}
            fullName={`${item.firstName} ${item.lastName}`}
            email={item.email}
            />
          ))}
          </View>
      </View>
    </ScrollView>
    );
  };
  
  export default Register;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 15,
      paddingTop: 20,
    },
    title: {
      fontSize: 36,
      marginBottom: 20,
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
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import React, { Component, useState } from "react";

function EnterData({navigation}) {
  const [dateOfBirthInput, setDateOfBirth] = useState('0');
  const [dateOfExpiryInput, setDateOfExpiry] = useState('0');
  const [documentNumberInput, setDocumentNumber] = useState('0');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>NFC Reader</Text>
      </View>
      <View style={styles.body}>
        <Text>Fecha de nacimiento 'AAmmdd'</Text>
        <TextInput style={styles.inputs}
          onChangeText={value => setDateOfBirth(value)}>
        </TextInput>
        <Text>Fecha de vencimiento 'AAmmdd'</Text>
        <TextInput style={styles.inputs}
          onChangeText={value => setDateOfExpiry(value)}>
        </TextInput>
        <Text>Codigo de documento</Text>
        <TextInput style={styles.inputs}
          onChangeText={value => setDocumentNumber(value)}>
        </TextInput>
      </View>
      <View style={styles.buttons}>
      <Button
        title="Leer Cedula"
        color="rgba(7,201,219,1)"
        onPress={() =>
          navigation.navigate('Processing', {
            dateOfBirth: dateOfBirthInput,
            dateOfExpiry: dateOfExpiryInput,
            documentNumber: documentNumberInput
          })
        }
      />
      </View>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:{
    flex:1,
    backgroundColor: 'green',
    alignItems: 'flex-start'
  },
  body:{
    flex: 5
  },
  inputs:{
    backgroundColor: 'gray'
  },
  buttons:{
    flex: 1
  }
  
});

export default EnterData;

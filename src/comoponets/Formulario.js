import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Formulario = ({onSearch, onClear}) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if(input.trim()){
      onSearch(input);
      setInput('');
    }
  };

    return (
    <View style={FStyle.container}>
        <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Buscar Pokemon..."
            style={FStyle.input}
        />
        <TouchableOpacity style={FStyle.button} onPress={handleSearch}>
            <Text style={FStyle.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[FStyle.button, FStyle.clearButton]} onPress={onClear}>
          <Text style={FStyle.buttonText}>Limpiar</Text>
        </TouchableOpacity>
    </View>
  );
};
const FStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  clearButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
export default Formulario;

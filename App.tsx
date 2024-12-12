import React, {useState, useEffect} from 'react'
import { StyleSheet, 
  Text, 
  View, 
  Alert, 
  Keyboard, 
  TouchableWithoutFeedback,
  FlatList,
  Image,
  TouchableOpacity, } from 'react-native';
import Formulario from './src/comoponets/Formulario';
import PokemonInfo from './src/comoponets/PokemonInfo';

const App = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [allPokemon, setAllPokemon] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  //Funcion para obtenner todos los pokemon
  useEffect(() => {
    const fectAllPokemoon = async () => {
      try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        const data = await response.json();
        const pokemonList = data.results.map((pokemon, index) => ({
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
        }));
        setAllPokemon(pokemonList);
      } catch(error) {
        Alert.alert('Error','No se encontro el Pokemon. Intentelo nuevamente',[
          {text: 'OK'}]);
      }
    };
    fectAllPokemoon();
  }, []);

  //Funcion para Obtener los detalles del Pokemon buscado
  useEffect(() => {
    if(!pokemonName) return;

    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        if(!response.ok) throw new Error('No se encontro el pokemon');

        const data = await response.json();
        setPokemonData(data);
        setIsSearching(true);
      }catch(error){
        Alert.alert('Error', 'No se encontro el Pokemon. Intentelo nuevamente',[
          {text: 'OK'}]);
          setIsSearching(false);

      }
    };
    fetchPokemonData();
  }, [pokemonName]);

  
  const clearSearch = () => {
    setPokemonName('');
    setPokemonData(null);
    setIsSearching(false);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  }
  return (
   <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={style.container}>
      <Formulario onSearch={setPokemonName} onClear={clearSearch} />
      {isSearching && pokemonData ? (
        <PokemonInfo data={pokemonData}/>
      ):(
        <FlatList 
          data={allPokemon}
          keyExtractor={(item) => item.name}
          renderItem={({item}) => (
            <View style={style.pokemonCard}>
              <Image source={{uri: item.image}} style={style.pokemonImage}/>
              <Text style={style.pokemonName}>{item.name}</Text>
            </View>
          )}
          numColumns={3}
          contentContainerStyle={style.pokemonList}
        />
      )}
    </View>
   </TouchableWithoutFeedback>
    /**/
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  pokemonList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  pokemonCard: {
    width: 100,
    margin: 10,
    alignItems: 'center',
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
  pokemonName: {
    marginTop: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});
export default App;

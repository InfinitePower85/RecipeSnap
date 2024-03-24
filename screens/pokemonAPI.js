// PokemonInfo.js

import React, { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import baseStyle from "../styles/baseStyles";
import { SafeAreaView } from "react-native-safe-area-context";

const PokemonInfo = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      try {
        const rand = Math.ceil(Math.random() * 1025) 
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${rand}`);
        console.log(response.data.height, "hello")
        setPokemonData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchRandomPokemon();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <SafeAreaView style={baseStyle.container}>
      {pokemonData && (
        <> 
          <Text style={{ fontSize: 24 }}>Random Pokémon:</Text>
          <Text style={{fontSize: 24 }}>Name: {pokemonData.name}</Text>
          <Image
            source={{ uri: pokemonData.sprites.front_default }}
            style={{ width: 300, height: 300 }}
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default PokemonInfo;

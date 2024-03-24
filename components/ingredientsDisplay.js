import React, { useState, useEffect } from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { Linking } from 'react-native';


function test(title, text) {
  //console.log(title.includes('http'))
  if (title.includes('http')) {
    return ((
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionHeaderText, {color: '#98ff98'}]}
          onPress={() => Linking.openURL(`${title}`)}>
          {text}
        </Text>
      </View>
    ))
  } else {
    return ((
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionHeaderText, {color: 'white'}]}>
          {text}
        </Text>
      </View>
    ))
  }
}

export default function IngredientsDisplay() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const foodData = require('../result.json');
      setData(foodData);
    };

    fetchData();
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  // Transform your data into sections
  const sections = Object.keys(data).map((category) => ({
    title: category,
    data: Object.entries(data[category]).map(([key, value]) => ({
      key,
      value,
    })),
  }));

  
  return (
    <View style={styles.container}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.key}: {item.value}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => test(title, title)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: "#00563f",
    padding: 8,
    marginTop: 8
  },
  sectionHeaderText: {
    fontSize: 18,
    color: "#fff",
  },
  item: {
    padding: 8,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#3cb371",
  },
  text: {
    fontSize: 14,
  },
});




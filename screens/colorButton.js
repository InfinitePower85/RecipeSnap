import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import baseStyle from "../styles/baseStyles";
const ExampleComponent = () =>  {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={baseStyle.container}>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </SafeAreaView>
  );
}

export default ExampleComponent;
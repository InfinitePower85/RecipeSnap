import React from "react";
import { View, Text, Image, TouchableOpacity,  
    StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 
import { useState } from "react";

export default function ImageInput() { 
    // Stores the selected image URI 
    const [file, setFile] = useState(null); 

    // Stores any error message 
    const [error, setError] = useState(null); 
  
    // Function to pick an image from  
    //the device's media library 
    const pickImage = async () => { 
        const { status } = await ImagePicker. 
            requestMediaLibraryPermissionsAsync(); 
  
        if (status !== "granted") { 
  
            // If permission is denied, show an alert 
            Alert.alert( 
                "Permission Denied", 
                `Sorry, we need camera  
                 roll permission to upload images.` 
            ); 
        } else { 
  
            // Launch the image library and get 
            // the selected image 
            const result = 
                await ImagePicker.launchImageLibraryAsync(); 
  
            if (!result.cancelled) { 

                // If an image is selected (not cancelled),  
                // update the file state variable 
                setFile(result.uri); 
  
                // Clear any previous errors 
                setError(null); 
            } 
        } 
    }; 
  
    return ( 
        <View style={styles.container}> 
            {/* Button to choose an image */} 
            <TouchableOpacity style={styles.button} 
                onPress={pickImage}> 
                <Text style={styles.buttonText}> 
                    Choose Image 
                </Text> 
            </TouchableOpacity> 
  
            {/* Conditionally render the image  
            or error message */} 
            {file ? ( 
                // Display the selected image 
                <View style={styles.imageContainer}> 
                    <Image source={{ uri: file }} 
                        style={styles.image} /> 
                </View> 
            ) : ( 
                // Display an error message if there's  
                // an error or no image selected 
                <Text style={styles.errorText}>{error}</Text> 
            )} 
        </View> 
    ); 
} 

const styles = StyleSheet.create({ 
    container: { 
        alignItems: "center", 
        padding: 2, 
    }, 
    header: { 

    }, 
    button: { 

    }, 
    buttonText: { 

    }, 
    imageContainer: { 

    }, 
    image: { 

    }, 
    errorText: { 

    }, 
});
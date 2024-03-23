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
            <Text style={styles.header}> 
                Snap Image
            </Text> 
  
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
        fontSize: 20, 
        marginBottom: 16, 
    }, 
    button: { 
        backgroundColor: "#3cb371", 
        padding: 10, 
        borderRadius: 8, 
        marginBottom: 16, 
        shadowColor: "#000000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 
    buttonText: { 
        color: "#FFFFFF", 
        fontSize: 16, 
        fontWeight: "bold", 
    }, 
    imageContainer: { 
        borderRadius: 8, 
        marginBottom: 4, 
        shadowColor: "#000000", 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.4, 
        shadowRadius: 4, 
        elevation: 5, 
    }, 
    image: { 
        width: 200, 
        height: 200, 
        borderRadius: 8, 
    }, 
    errorText: { 
        color: "red", 
        marginTop: 16, 
    }, 
});
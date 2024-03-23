import React from "react";
import { View, Text, Image, TouchableOpacity,  
    StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 
import { useState } from "react";

export default function ImageInput() { 
    const [file, setFile] = useState(null); 
    const [error, setError] = useState(null); 
  
    // pick image from library
    const pickImage = async () => { 
        const { status } = await ImagePicker. 
            requestMediaLibraryPermissionsAsync(); 
  
        if (status !== "granted") { 
  
            // if permission is denied, show an alert 
            Alert.alert( 
                "Permission Denied", 
                `Sorry, we need camera roll permission to upload images.` 
            ); 
        } else { 

            // launch image library and get selected image
            const result = 
                await ImagePicker.launchImageLibraryAsync(); 
  
            if (!result.cancelled) { 

                // if an image is selected (not cancelled),  
                // update the file state variable 
                setFile(result.uri); 
  
                // Clear any previous errors 
                setError(null); 
            } 
        } 
    }; 
  
    return ( 
        <View style={styles.container}> 
            {/* button to choose an image */} 
            <TouchableOpacity style={styles.button} 
                onPress={pickImage}> 
                <Text style={styles.buttonText}> 
                    Choose Image 
                </Text> 
            </TouchableOpacity> 
  
            {/* render the image or error message */} 
            {file ? ( 

                // display the selected image 
                <View style={styles.imageContainer}> 
                    <Image source={{ uri: file }} 
                        style={styles.image} /> 
                </View> 
            ) : ( 

                // no image selected
                <Text style={styles.errorText}>{error}</Text> 
            )} 
        </View> 
    ); 
} 

const styles = StyleSheet.create({ 
    container: { 
        alignItems: "center", 
    }, 
    header: { 

    }, 
    button: { 
        backgroundColor: "#007AFF", 
    }, 
    buttonText: { 
        color: "#FFFFFF", 
    }, 
    imageContainer: { 

    }, 
    image: { 

    }, 
    errorText: { 

    }, 
});
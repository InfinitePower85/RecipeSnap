import React from "react";
import { View, Text, Image, TouchableOpacity,  
    StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 
import { useState } from "react";
import baseStyle from "../styles/baseStyles";


export default function ImageInput() { 
    const [file, setFile] = useState(null); 
    const [error, setError] = useState(null); 
  
    // pick image from library
    const pickImage = async () => { 
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync(); 
  
        if (status !== "granted") { 
  
            // if permission is denied, show an alert 
            Alert.alert( 
                "Permission Denied", 
                `Sorry, we need camera roll permission to upload images.` 
            ); 
        } 
        
        else { 

            // launch image library and get selected image
            let result = await ImagePicker.launchImageLibraryAsync();
            console.log("ImagePicker result:", result); 
            const ts = result.assets;
            console.log(ts[0].uri)
            console.log("sdajlfdsajlkfdsajlkfdsajlkfdsajlkf");
            console.log("hello", result.assets[0].uri);
            if(!result.cancelled && result.assets[0].uri) { 
                // if an image is selected (not cancelled),  
                // update the file state variable 
                setFile(result.assets[0].uri); 
                console.log("File state updated:", result.assets[0].uri);
  
                // Clear any previous errors 
                setError(null); 
            } else {

                // Handle when the user cancels image selection
                setError("Image selection cancelled.");
            }

        } 
    }; 
  
    return ( 
        <View style={styles.container}> 
            
            {/* button to choose an image */} 
            <TouchableOpacity style={baseStyle.button} 
                onPress={pickImage}> 
                
                <Text > 
                    Choose Image 
                </Text> 
            </TouchableOpacity> 
  
            {/* render the image or error message */} 
            {file ? ( 

                // display the selected image 
                <View style={styles.imageContainer}> 
                    <Text>{file}</Text>
                    <Image source={{ uri: {file} }} /> 
                </View> 
            ) : ( 

                // no image selected
                
                <Text style={styles.errorText}>nooo22222{error}</Text> 
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
import React from "react";
import { View, Text, Image, TouchableOpacity,  
    StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 
import { useState } from "react";
import baseStyle from "../styles/baseStyles";
//import * as FileSystem from 'expo-file-system';

import axios from "axios";
  
  // Example usage:
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
            console.log("hello", result.assets[0].uri);
            if(!result.cancelled && result.assets[0].uri) { 
                // if an image is selected (not cancelled),  
                // update the file state variable 
                setFile(result.assets[0].uri); 
                console.log("hello world")
                console.log("File state updated:", result.assets[0].uri);
                const formData = new FormData();
                formData.append(file)
                /*formData.append('image', {
                  //name: 'SampleFile.jpg', // Whatever your filename is
                  file: file,
                  //type: 'image/jpeg', // Adjust the type based on your image format
                });*/

                try { // note that the backend api doesn't work currently   
                    console.log("before error ")
                    const response2 = await axios.post('http://127.0.0.1:8000', 'hello world');
                    console.log(response2.data)
                    const response = await axios.post('http://127.0.0.1:8000', formData);
                    if (response.status === 200) {
                        console.log('Image uploaded successfully:', response.data);
                        // Handle the backend response as needed
                    } else {
                        console.error('Image upload failed.');
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
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
                    <Image source={{ uri: file }} style={{ width: 200, height: 200 }} />
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
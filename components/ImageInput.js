import React from "react";
import { View, Text, Image, TouchableOpacity,  
    StyleSheet, Alert } from "react-native"; 
import * as ImagePicker from "expo-image-picker"; 
import { useState } from "react";
import baseStyle from "../styles/baseStyles";
//import * as FileSystem from 'expo-file-system';
//import axios from "axios";
//import storage from '@react-native-firebase/storage';

  // Example usage:


import { firebase } from '@react-native-firebase/app';

  const firebaseConfig = {
    apiKey: "AIzaSyAQ5CZNUn5AQVyqDcWKCLy78qRZYNiLdbM",
    authDomain: "recipesnap-1adae.firebaseapp.com",
    projectId: "recipesnap-1adae",
    storageBucket: "recipesnap-1adae.appspot.com",
    messagingSenderId: "84217242804",
    appId: "1:84217242804:web:9b94568ad783c9e8b7a3e1",
    measurementId: "G-V08JX7V0QP"
  };
  
  firebase.initializeApp(firebaseConfig);

  const uploadImageToFirebase = async (imageUri, imageName) => {
    const reference = storage().ref(`images/${imageName}`);
    await reference.putFile(imageUri);
    console.log('Image uploaded successfully!');
  };
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
                console.log("File state updated:", file);
                uploadImageToFirebase('hello_world.jpg', file);                
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
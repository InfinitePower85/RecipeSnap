import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { Dimensions } from 'react-native';
import baseStyle from '../styles/baseStyles';

export default function CameraInput() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert('Picture saved to camera roll');
        setImage(null);
        console.log('saved successfully');
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 5,
            }}
          >
            <TouchableOpacity 
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
               {type === 'front' ? <Image source={require('../assets/flip_alt.png')} style={styles.image} /> : <Image source={require('../assets/flip.png')} style={styles.image} />}
            </TouchableOpacity>   
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
        {image ? (
            <>
              <TouchableOpacity style={[baseStyle.button2, {marginRight: 50}]} onPress={() => setImage(null)}>
                <Text>Retake</Text>
              </TouchableOpacity>
              <TouchableOpacity style={baseStyle.button2} onPress={savePicture}>
                <Text>Save Picture</Text>
              </TouchableOpacity>
            </>

            
        ) : (
          <TouchableOpacity onPress={takePicture} style={{alignItems: 'center'}}>
            <Image source={require('../assets/pic_button.png')} style={[styles.image, {width: '45%', marginTop: 10}]}/>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    backgroundColor: '#f5fbe2',
  },
  camera: {
    height: Dimensions.get('screen').width
  },
  image: { 
    width: '37.5%', 
    height: undefined, 
    aspectRatio: 1,
    }
});
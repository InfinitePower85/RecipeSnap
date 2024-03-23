import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { MaterialIcons } from '@expo/vector-icons';


export default function CameraInput() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])

    const savePicture = async () => {
        if (image) {
          try {
            const asset = await MediaLibrary.createAssetAsync(image);
            alert('Picture saved');
            setImage(null);
            console.log('saved successfully');
          } catch (error) {
            console.log(error);
          }
        }
    };

    const takePicture = async () => {
        if(cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
            }
            catch(e) {
                console.log(e);
            }
        }
    }

    if(hasCameraPermission === false){
        return <Text>Sorry, we need camera permissions</Text>
    }

    return(
        <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View>
            <TouchableOpacity
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <Text>Flip Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
            >
              <Text>Flash</Text>
            </TouchableOpacity>
            
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
          >
            <TouchableOpacity onPress={() => setImage(null)}>
              <Text>Retake</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={savePicture}>
              <Text>SAVE</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={takePicture}>
            <Text>TAKE PIC</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
  },
  controls: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    color: '#E9730F',
  },
  camera: {
    flex: 1,
  },
  topControls: {
    flex: 1,
  },
});

import React, { useState, useEffect } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { 
  Camera, 
  useCameraDevice,
  useCameraPermission
} from 'react-native-vision-camera';

const QRCodeScanner = () => {
  const [permission, setPermission] = useState<boolean | null>(null);
  
  
const device = useCameraDevice('back')
const { hasPermission } = useCameraPermission()

  useEffect(() => {
    const requestPermission = async () => {
      try {
        const status = await Camera.requestCameraPermission();
        console.log('Camera Permission Status:', status);
        
        setPermission(status === 'authorized');
      } catch (error) {
        console.error('Permission Request Error:', error);
        setPermission(false);
      }
    };

    requestPermission();
  }, []);


  if (!hasPermission) return console.log("hsuhsh");
  
  if (device == null) return console.log("hsuhsh");
 

  // Render camera
  return (
    <Camera
      style={styles.camera}
      device={device}
      isActive={true}
      onError={(error) => {
        console.error('Camera Error:', error);
        Alert.alert('Camera Error', error.message);
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
  camera: {
    flex: 1,
    width: '100%',
  },
});

export default QRCodeScanner;
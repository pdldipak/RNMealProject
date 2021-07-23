import React, { useState, useEffect, useRef, useContext } from 'react';
import { Camera } from 'expo-camera';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonContainer,
  CameraButton,
  PressButton,
  ProfileCamera,
  SnapButton,
} from '../components/SettingStyled';
import { Wrapper } from '../../../components/utility/GlobalStyles';
import { Text } from '../../../components/typography/Text';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const cameraRef = useRef();
  const navigation = useNavigation();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <Wrapper />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <Wrapper>
      <ProfileCamera type={type} ref={cameraRef} ratio={'16:9'}>
        <ButtonContainer>
          <CameraButton
            onPress={() => {
              setType(
                type === Camera.Constants.Type.front
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.front,
              );
            }}
          >
            <Text> Flip </Text>
          </CameraButton>
        </ButtonContainer>
        <SnapButton onPress={snap} ref={cameraRef}>
          <PressButton></PressButton>
        </SnapButton>
      </ProfileCamera>
    </Wrapper>
  );
};

export default CameraScreen;

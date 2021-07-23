import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { List } from 'react-native-paper';

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
export const AvatarContainer = styled.View`
  margin-top: ${(props) => props.theme.space[6]};
  align-items: center;
`;

export const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
`;

export const CameraButton = styled(TouchableOpacity)`
  flex: 0.9;
  align-self: flex-end;
  align-items: flex-end;
`;

export const SnapButton = styled(TouchableOpacity)`
  align-self: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const PressButton = styled.View`
  height: 65px;
  width: 65px;
  background-color: #fff;
  border-radius: 50;
`;

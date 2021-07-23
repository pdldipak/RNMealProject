import React, { useContext, useState, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { List, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wrapper } from '../../../components/utility/GlobalStyles';
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext';
import { AvatarContainer, SettingsItem } from '../components/SettingStyled';
import { Spacer } from '../../../components/spacer/Spacer';
import { Text } from '../../../components/typography/Text';

export const SettingsScreen = () => {
  const [photo, setPhoto] = useState(null);
  const navigation = useNavigation();
  const { onLogout, user } = useContext(AuthenticationContext);

  const getProfilePicture = async () => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user]),
  );
  return (
    <Wrapper>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate('Favourites')}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="red" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </Wrapper>
  );
};

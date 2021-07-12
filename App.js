import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import TabNavigation from './src/navigations/TabNavigation';
import AppLoading from 'expo-app-loading';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsContextProvider } from './src/services/restaurants/RestaurantsContext';
import { LocationContextProvider } from './src/services/location/LocationContext';
//import { SafeArea } from './src/components/utility/GlobalStyles';

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <TabNavigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}

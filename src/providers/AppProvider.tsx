import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../store';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigator from '../navigation/DrawerNavigator';

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;

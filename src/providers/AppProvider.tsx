import {Provider as ReduxProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '../store';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;

import {createStackNavigator} from 'react-navigation';
import SplashScreen from '../screens/splash/splash.screen';
import UsersScreen from '../screens/users/users.screen';

const stackNavigatorOptions = {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: 'white',
  },
};

export const AppNavigator = createStackNavigator(
  {
    Splash: {screen: SplashScreen},
    Users: {screen: UsersScreen},
  },
  stackNavigatorOptions,
);

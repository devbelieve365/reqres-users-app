import {createStackNavigator} from 'react-navigation';
import SplashScreen from '../screens/splash/splash.screen';
import UsersScreen from '../screens/users/users.screen';
import UserScreen from '../screens/user/user.screen';

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
    User: {screen: UserScreen},
  },
  stackNavigatorOptions,
);

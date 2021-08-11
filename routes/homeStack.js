import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import ChallengeScreen from '../screens/ChallengeScreen';

const screens = {
  LoginScreen: {
    screen: LoginScreen,
  },
  ChallengeScreen: {
    screen: ChallengeScreen,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
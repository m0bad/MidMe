import { createBottomTabNavigator,
        createAppContainer,
        createStackNavigator, } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import { CartScreen, ProfileScreen, LoginScreen, OrdersScreen, SignupScreen, SearchScreen,
   ResultSearchScreen } from '../screens';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Result: ResultSearchScreen,
},
{
    initialRouteName: 'Home'
}
);

const CartStack = createStackNavigator({
  Cart: CartScreen,
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Login: LoginScreen,
  Signup: SignupScreen,
},
{
    initialRouteName: 'Profile'
});

const OrdersStack = createStackNavigator({
    Orders: OrdersScreen
});

const AppTabsNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Cart: CartStack,
    Orders: OrdersStack,
    Profile: ProfileStack,
},
{
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
}
);

export default createAppContainer(AppTabsNavigator);

import { createBottomTabNavigator,
        createAppContainer,
        createStackNavigator, } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen';
import OrdersScreen from '../screens/OrdersScreen';
import SignupScreen from '../screens/SignupScreen';
import SearchScreen from '../screens/SearchScreen';
import ResultSearchScreen from '../screens/ResultSearchScreen';

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

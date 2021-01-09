import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './Modules/ProfileScreen';
import Settings from './Modules/Settings';


const Stack = createStackNavigator();
export default class App extends Component{
  render()
  {
    return (
     
         <ProfileScreen></ProfileScreen>
         
      
      
    );
  }
}



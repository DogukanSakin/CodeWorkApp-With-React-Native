import React from 'react';
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritedJobs from './Pages/FavoritedJobs/FavoritedJobs';
import Jobs from './Pages/Jobs/Jobs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import JobsDetail from './Pages/JobsDetail/JobsDetail';
import AuthProvider from './Context/AuthProvider';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const JobsStack=()=>{
  return(
    
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name='JobsScreen' component={Jobs}></Stack.Screen>
      <Stack.Screen name='JobsDetailScreen' component={JobsDetail}></Stack.Screen>
    </Stack.Navigator>
  )
}
const App=()=>{
  return(
    <AuthProvider>
    <NavigationContainer>
      
    <Tab.Navigator>
      <Tab.Screen name="Jobs" component={JobsStack}  options={{
      title:'Jobs',
      tabBarLabelStyle:{fontSize:13},
      tabBarActiveTintColor: '#d63333',
      headerTitleAlign:'center',
      headerTintColor:'#d63333',
      tabBarIcon: ({ focused }) => {
        
        return (
          <View>
            <Icons name='briefcase' size={30} color={focused? '#d63333' : 'grey'}></Icons>
          </View>
        );
      },
    }}/>
      <Tab.Screen name="FavoritedJobs" component={FavoritedJobs} options={{
      title:'Favorited Jobs',
      tabBarActiveTintColor: '#d63333',
      tabBarLabelStyle:{fontSize:13},
      headerTitleAlign:'center',
      headerTintColor:'#d63333',
      tabBarIcon: ({ focused }) => {
        return (
          <View>
            <Icons name='heart' size={30} color={focused? '#d63333' : 'grey'}></Icons>
          </View>
        );
      },
    }} />
    </Tab.Navigator>
  </NavigationContainer>  
  </AuthProvider>
  )
}
export default App;
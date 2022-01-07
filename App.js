import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './component/Home'
import Play from './component/Play'

const Stack=createStackNavigator()
const App=()=>{
   return(
     <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
          <Stack.Screen name="Play" component={Play} options={{headerShown:false}} />
        </Stack.Navigator>
     </NavigationContainer>

   )
 }
 export default App
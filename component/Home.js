import React from 'react'
import {
    Text,
    View,
    Image
} from 'react-native'
import App from '../App'

const Home=({navigation})=>{
    return(
        <View style={{ alignItems:'center'}}>
            <Image source={require('./image/background.png')} />
            <Text style={{fontSize:40, color:'red', position:'absolute', paddingTop:'50%'}} onPress={()=>{
                navigation.navigate('Play')
            }} >
                PLAY!!!
            </Text>
        </View>
    )
}
export default Home
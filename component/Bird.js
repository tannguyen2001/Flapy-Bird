import React from 'react';
import {
  Image
} from 'react-native';

const Bird=({birdBottom,birdLeft})=>{
    const birdWidth=50
    const birdHeight=60

    return (
        <Image source={require('./image/bird.png')} style ={{ position :'absolute',
         
         width:birdWidth,
         height:birdWidth,
         bottom:birdBottom - (birdHeight/2),
         left:birdLeft -(birdWidth/2),

        }} />

       
    )
}
export default Bird
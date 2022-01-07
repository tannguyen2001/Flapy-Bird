import React from 'react';
import {
  Image
} from 'react-native';

const Obstacle =({obstacleLeft,obstacleWidth,obstacleHeight,gap,randomBottom})=>{

    return(
        <>
            <Image source={require('./image/pipe2.png')} style={{
                position:'absolute',
                width: obstacleWidth,
                height:obstacleHeight,
                left:obstacleLeft,
                bottom:randomBottom +obstacleHeight +gap,
                resizeMode:'stretch',
                zIndex:1,
            }} />

            <Image source={require('./image/pipe.png')} style={{
                position:'absolute',
                width: obstacleWidth,
                height:obstacleHeight,
                left:obstacleLeft,
                bottom:randomBottom,
                resizeMode:'stretch',
                zIndex:1,
            }} />
        </>
    )
}

export default Obstacle
import React, {  useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
   Dimensions,
   TouchableWithoutFeedback,
   Image,
   Text,
} from 'react-native';
import Bird from './Bird'
import Obstacle from './Obstacles'


const Play=({navigation})=>{
    const screenWidth=Dimensions.get("screen").width
    const screenHeight=Dimensions.get("screen").height
    const birdLeft= screenWidth/2;
    const [birdBottom,setBirdbottom] = useState(screenHeight/2)
    const gravity=5
    const [obstaclesLeft,setObstaclesLeft] = useState(screenWidth)
    const [obstaclesLeftTwo,setObstaclesLeftTwo] = useState( screenWidth+ screenWidth/2 + 30 )
    let gameTimerid
    let  obstaclesLeftTimerId
    let  obstaclesLeftTimerIdTwo
    const obstacleWidth=60
    const obstacleHeight=250
    const gap=120
    const [obstacleNegHeight,setObstaclesNegHeight]=useState(0)
    const [obstacleNegHeightTwo,setObstaclesNegHeightTwo]=useState(0)
    const [isGameOver,setIsGameOver]=useState(false)
    const [score,setScore]=useState(1)
    const [exit,setExit]=useState("")
    const jump=()=>{
      if(!isGameOver && (birdBottom<screenHeight))
      {
        setBirdbottom(birdBottom => birdBottom+40)
      }
    }

    //start bird falling
  
    useEffect(()=>{
      if(birdBottom >0  ) {
        gameTimerid= setInterval(() =>{
          setBirdbottom(birdBottom=> birdBottom-gravity)
        },20)
       return ()=>{
         clearInterval(gameTimerid)
       }
      }
    },[birdBottom])
    //start first obstacle
    useEffect(()=>{
        if(obstaclesLeft> -obstacleWidth){
          obstaclesLeftTimerId= setInterval(()=>{
            setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
          },30)

          return ()=>{
            clearInterval(obstaclesLeftTimerId)
          }
        }else{
          setObstaclesLeft(screenWidth)
          setObstaclesNegHeight(-Math.random()*100)
          setScore(score => score+1)
        }
       

    },[obstaclesLeft])

    //start second obstacle
    useEffect(()=>{
      if(obstaclesLeftTwo> -obstacleWidth){
        obstaclesLeftTimerIdTwo= setInterval(()=>{
          setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
        },30)

        return ()=>{
          clearInterval(obstaclesLeftTimerIdTwo)
        }
      }else{
        setObstaclesLeftTwo(screenWidth)
        setObstaclesNegHeightTwo(-Math.random()*100)
        setScore(score => score+1)
      }
     

    },[obstaclesLeftTwo])

    //check for collistions
    useEffect(()=>{
      if(
        ((birdBottom<(obstacleNegHeight+obstacleHeight+30) ||
        birdBottom>(obstacleNegHeight+obstacleHeight+gap-20)) &&
        (obstaclesLeft>screenWidth/2-30 && obstaclesLeft < screenWidth/2 +30)
        )
        ||
        ((birdBottom<(obstacleNegHeightTwo+obstacleHeight+30) ||
        birdBottom>(obstacleNegHeightTwo+obstacleHeight+gap-20)) &&
        (obstaclesLeftTwo>screenWidth/2-30 && obstaclesLeftTwo < screenWidth/2 +30)
        )
        )

       {
        gameOver()
       }
      })
    
    const gameOver=()=>{
      clearInterval(gameTimerid)
      clearInterval(obstaclesLeftTimerId)
      clearInterval(obstaclesLeftTimerIdTwo)
      setIsGameOver(true)
      setExit("Exit!")
    }

    return (
      <TouchableWithoutFeedback onPress={jump}>
        <View style={styles.container}>
          <Image source={require('./image/background.png')} style={{width:'100%',height:'100%', resizeMode:'stretch'}} />
          <Text style={styles.SCORE} >Score : {score}</Text>
          <Bird
            birdBottom={birdBottom}
            birdLeft={birdLeft}
           />
           <Obstacle
            obstacleHeight={obstacleHeight}
            obstacleWidth={obstacleWidth}
            obstacleLeft={obstaclesLeft}
            gap={gap}
            randomBottom={obstacleNegHeight}
            />
          <Obstacle
            obstacleHeight={obstacleHeight}
            obstacleWidth={obstacleWidth}
            obstacleLeft={obstaclesLeftTwo}
            gap={gap}
            randomBottom={obstacleNegHeightTwo}
          />
          <View style={{position:'absolute', flexDirection:'row', paddingBottom:300, zIndex:4}} >
            <Text style={{ fontSize:40, color:'yellow', padding:10  }} 
            onPress={()=>{
              navigation.navigate('Home')
            }}
             >{exit}</Text>
          </View>
      </View>
      </TouchableWithoutFeedback>
      
    )
}
const styles=StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  SCORE:{
    position:'absolute',
    color:'red',
    fontSize:30,
    paddingBottom:400,
    paddingRight:200,
    zIndex:2,
  }
})
export default Play
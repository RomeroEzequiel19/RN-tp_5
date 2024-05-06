import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const ContadorScreen = () =>{
    //Use Effect
    const [count, setCount] = useState(0)
    const [load, setLoad] = useState(false)
  
    useEffect(() => {
      if(load){
        Alert.alert('Contador', `${count}`, [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }else{
        setLoad(true)
      }
    }, [count])
  
    return(
      <View style={{padding: 30}}>
        <Button
        title='+'
        onPress={() => setCount(count + 1)}
        />
        <Text style={{textAlign:"center"}}>{count}</Text>
        <Button
        title='-'
        onPress={() => setCount(count - 1)}
        />
      </View>
    )
}
  
export default ContadorScreen;
  
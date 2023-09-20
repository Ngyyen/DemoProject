import { StyleSheet, View, Text, SafeAreaView, Image, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { Int32 } from "react-native/Libraries/Types/CodegenTypes";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Cat = (props) => {
  const [isHungry,setIsHungry] = useState(true);

  return (  
    <View>
      <Text style = {styles.text1}>
        My name is {props.name}, I'm {props.age}, I'm {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={()=>{
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please=((' : 'Arigato!'}
      />
    </View>
  );
};

const PizzaTrans = () => {
  const [text, setText] = useState('');

  return (
    <View style = {{padding: 10, backgroundColor: 'white'}}>
      <TextInput
        style = {{height: 40}}
        placeholder="Input some words here, please"
        onChangeText={(newText) => {
          setText(newText);
        }}
        defaultValue={text}
      />  
      <Text style = {styles.text1}>
          {text.split(' ').map(word => word && '🍕').join(' ')}
      </Text>
    </View>
  );
};

const Test = (props) => {
  return (
    <View style={{backgroundColor: '#F4CE14'}}>
      <Text>  
        {props.func('Nguyen')}
      </Text>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style = {styles.background}>
      <Text style = {[styles.text1, styles.text2]}>Cat caffe app</Text>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}
        onLoad={() => {
          console.log("Invoked");
        }}
      />
      <Cat name='Milu' age={12}/>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200}}

      />
      <Cat name="Milo" age={19}/>
      <PizzaTrans/>
      <Test func = {name => name + name}/>
    </SafeAreaView>
  );
};

export default App;

const styles  = StyleSheet.create({
  background: {
    backgroundColor: 'orange',
    flex: 1
  },
  text1: {
    fontSize: 30,
    marginLeft: 16,
    color: 'white',
  },
  text2: {
    fontWeight: '900',
  },
});
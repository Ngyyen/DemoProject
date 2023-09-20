import { StyleSheet, View, Text, SafeAreaView, Image, Button, TextInput } from "react-native";
import React, { useState } from "react";

const Test = (props) => {
    return (
        <View style={{backgroundColor: '#F4CE14'}}>
            <Text>  
                {props.func('Nguyen')}
            </Text>
        </View>
    );
  };

export default Test;
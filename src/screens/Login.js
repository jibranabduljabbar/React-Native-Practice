import React, { createElement } from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Login (){
    return(
       
   <View style={styles.container}>
     <Text style={styles.txt}>Login Page</Text>
   </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItem: "center",
        // justifyContent: "center"
    },

})

export default Login;
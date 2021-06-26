import React, { createElement } from 'react';
import {StyleSheet, Text, View} from 'react-native';

function SignUp (){
    return(
       
   <View style={styles.container}>
     <Text style={styles.txt}>SignUp Page</Text>
   </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItem: "center",
        justifyContent: "center"
    }

})

export default SignUp;
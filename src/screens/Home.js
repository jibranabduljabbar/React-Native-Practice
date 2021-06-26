import React, { createElement } from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Home (){
    return(
       
   <View style={styles.container}>
     <Text style={styles.txt}>Home Page</Text>
   </View>
       
    )
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: "#fff",
        alignItem: "center",
        justifyContent: "center"
    },
})

export default Home;
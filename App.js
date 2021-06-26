import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View ,Image, TextInput, Button, TouchableOpacity,ScrollView} from 'react-native';
import Navigation from './src/config/Navigation';

export default function App() {

  return (
    // {/* <ScrollView>*/}

    <View style={styles.container}>

{/* BackgroundImage / BackgroundColor */}

    {/* <ImageBackground style={{width: "100%", height: "100%"}} source={{uri: "https://cdn.statically.io/img/kreditings.com/wp-content/uploads/2020/06/CB-Edit-Photo-Editing-background-Download-6.jpg?quality=100&f=auto"}}>
      <Text style={{fontWeight: "bold",fontSize: 20,fontFamily: "Arial",color: "white",textAlign:"center",marginTop: "260px"}}>Jibran Abdul Jabbar</Text>
    </ImageBackground> */}

{/* React Navigation */}

    <Navigation />

{/* Flex  */}

    {/* <View style={styles.box1}>
     <Text style={styles.txt}>Header</Text>
    </View>
    <View style={styles.box2}>
      <View style={styles.Boxes}>
      <View style={styles.secBox}>
      <Text style={styles.itm}>Item_1</Text>
      </View>
      <View style={styles.secBox}>
      <Text style={styles.itm}>Item_2</Text>
      </View>
      <View style={styles.secBox}>
      <Text style={styles.itm}>Item_3</Text>
      </View>
      <View style={styles.secBox}>
      <Text style={styles.itm}>Item_4</Text>
      </View>
      <View style={styles.secBox}>
      <Text style={styles.itm}>Item_5</Text>
      </View>
      <View style={styles.secBox}>
      <Text style={styles.itm}>Item_6</Text>
      </View>
      
      </View>
      
    </View>
    <View style={styles.box3}>
    <Text style={styles.txt}>Footer</Text>
    </View> */}
  
{/* Login Form */}

      {/* <Text style={{fontFamily: "PingFangHK-Medium",fontSize: 40,marginBottom: 10,marginTop: -10,fontWeight: "bold"}}>Login</Text> */}
      {/* <Image style={styles.img} source={{uri:"data:image/jpeg;base64,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"}} /> */}
       {/* <Image style={styles.img} source={require("./assets/car2.jpeg")}/>
       <TextInput keyboardType={"default"} onChangeText={(text)=> console.log(text)} style={styles.inp} placeholder="Enter your name..." />
       <TextInput secureTextEntry={true} keyboardType={"default"} style={styles.inp} placeholder="Enter your password..." />
       <View style={{marginTop: 25,}}> */}
       {/* <Button title="Login" onPress={() => alert("Login Succusfully...!")}/> */}
       {/* <TouchableOpacity activeOpacity={0.5} onPress={()=>alert("Login Succusfully...!")} style={{color: "white"}} style={styles.btn}>
         <Text style={{textAlign: "center",color: "white",fontWeight: "bold", fontFamily: "PingFangHK-Medium"}}>Login</Text>
       </TouchableOpacity>
       </View> */}
       
{/* ScrollView */}

        {/* {[1,2,3,4,5,6,7,8,9,10].map((v,i)=>{
          return <View key={i} style={styles.card}>
               <Text style={styles.text}>Jibran Abdul Jabbar</Text>
                </View>
 
        })} */}

       

    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },

// Login Form

  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 100,
  //   marginTop: 10,
  //   resizeMode: "contain"
  // },
  // inp: {
  //   width: "80%",
  //   height: 50,
  //   borderColor: "grey",
  //   marginTop: 30,
  //   padding: 10,
  //   borderWidth: 1,
  //   borderRadius: 5,
  // },
  // btn: {
  //   backgroundColor: "black",
  //   color: "white",
  //   padding: 10,
  //   marginTop: 5,
  //   width: 150,
  //   borderRadius: 10
  // }

  // Flex

//    box1: {
//      backgroundColor: "red",
//      flex: 1,
//      width: "100%"
//    },
//    box2: {
//     backgroundColor: "green",
//     flex: 8,
//     width: "100%"
//   },
//   box3: {
//     backgroundColor: "blue",
//     flex: 1,
//     width: "100%"
//   },
//   txt: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "white"
//   },
//   Boxes: {
//   flexDirection: "row",
//   justifyContent: "space-Around",  
//   flexWrap: "wrap",
//   alignItems: "flex-end",
//   flex: 1,
//   alignContent: "center"
// },
//   secBox: {
//     width: 100,
//     height: 100,
//     backgroundColor: "#fff",
//     marginBottom: 10
//   },
//   itm: {
//     textAlign: "center",
//     fontWeight: "bold",
//     fontFamily: "Arial",
//     marginTop: 40,
//   },

// ScrollView

card: {
  backgroundColor: "white",
  marginTop: 20,
  width: 190,
  height: 70,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  shadowColor: "#000",
shadowOffset: {
	width: 0,
  height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,
padding: 10,
elevation: 7,
},

text: {
  fontFamily: "Arial",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: 15
}


});

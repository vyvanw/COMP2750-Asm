import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  const [selectedVegetable, setSelectedVegetable] = useState('val-cabbage-5');
  const [selectedFruit, setSelectedFruit] = useState('val-apple-13');
  const [quantityVegetable, setQuantityVegetable] = useState('1');
  const [quantityFruit, setQuantityFruit] = useState('1');
  const [totalPrice, setTotalPrice] = useState("0");

  const [fontsLoaded] = useFonts({
    'VT323-Regular': require('./assets/fonts/VT323-Regular.ttf'),
  });

  return (
    <LinearGradient
        colors={['#C7CBC5', '#C6F7A7', '#C7CBC5']}
        style={styles.container}
    >
      <SafeAreaView style={styles.container}>
  
      <View style={styles.row1}>
        <Text style={styles.heading}> POGS Online Shopping </Text>
      </View>

      <View>
        <Image source={require('/veg.png')} style={styles.image} />
      </View>

      <View style={styles.row2}>
        <Picker
          style={styles.picker1}
          selectedValue={selectedVegetable}
          onValueChange={(itemValue, itemIndex) => setSelectedVegetable(itemValue)}
        >
            <Picker.Item label="Cabbage-$5" value="val-cabbage-5" />
            <Picker.Item label="Carrot-$6" value="val-carrot-6" />
            <Picker.Item label="Broccoli-$5" value="val-broccoli-5" />
            <Picker.Item label="Spinach-$4" value="val-spinach-4" />
            <Picker.Item label="Beetroot-$7" value="val-beetroot-7" />
        </Picker>
        <Picker
          style={styles.picker2}
          selectedValue={selectedFruit}
          onValueChange={(itemValue, itemIndex) => setSelectedFruit(itemValue)}
        >
            <Picker.Item label="Apple-$13" value="val-apple-13" />
            <Picker.Item label="Banana-$14" value="val-banana-14" />
            <Picker.Item label="Orange-$15" value="val-orange-15" />
            <Picker.Item label="Strawberry-$13" value="val-strawberry-13" />
            <Picker.Item label="Blueberry-$14" value="val-blueberry-14" />
        </Picker>
      </View>

      <View style={styles.row2}>
        <Picker
          style={styles.picker1}
          selectedValue={quantityVegetable}
          onValueChange={(itemValue, itemIndex) => setQuantityVegetable(itemValue)}
        >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value='1' />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>

        <Picker
          style={styles.picker2}
          selectedValue={quantityFruit}
          onValueChange={(itemValue, itemIndex) => setQuantityFruit(itemValue)}
        >
            <Picker.Item label="0" value="0" />
            <Picker.Item label="1" value='1' />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.row1}>
        <Pressable 
        style={styles.button}
        onPress={() => {
          const lastChar = selectedVegetable[selectedVegetable.length -1];
          const lastTwoChar = selectedFruit.slice(-2);
          const charToIntForVegetables = parseInt(lastChar);
          const charToIntForFruits = parseInt(lastTwoChar);
          const quantityVeg = parseInt(quantityVegetable);
          const quantityFruits = parseInt(quantityFruit)
          setTotalPrice(charToIntForVegetables * quantityVeg + charToIntForFruits *quantityFruits);
        }}
         >
      <Text style={styles.text}>CALCULATE</Text>

         </Pressable>
      </View>
      <View style={styles.row1}>
        <Text style={styles.text}>Total Cost of Order: ${totalPrice} </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>App developed by: </Text> 
        <Text style={styles.footerText}>Jerold Cortez, Benjamin Swinbourne </Text>
        <Text style={styles.footerText}>Alexander Wilson and Canh Yen Vy Van </Text>
      </View>

      </SafeAreaView>
    </LinearGradient>

  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10
    },
    heading: {
      fontSize:32,
      textAlign: 'center',
      marginTop: 50,
      fontFamily: "VT323-Regular",
      fontWeight: 400,
      fontStyle: 'normal',
      color: '#006400'
    }, 
    text:{
      fontSize:24,
      textAlign:'center',
      fontFamily: "VT323-Regular",
      fontWeight: 400,
      fontStyle: 'normal',
      color: '#006400'
    },
    image: {
      width: 180,
      height: 180,
      marginBottom: 10,
      marginTop: 30,
      alignSelf: 'center'
    }, 
    row1:{
      marginTop:10,
      fontFamily: "VT323-Regular",
      fontWeight: 400,
      fontStyle: 'normal',
      color: '#006400'
    },
    row2:{
      flexDirection: 'row',
      marginTop: 10,
    },
    picker1:{
      flex:1
    },
    picker2:{
      flex:1
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#DFFDD0',
    },
    footer: {
      margin: 10,
      paddingTop: 110,
    },
    footerText: {
      color: '#00000',
      alignSelf: 'center',
      fontFamily: "VT323-Regular",
      fontWeight: 400,
      fontSize: 20
    }
  });
  

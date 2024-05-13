import React, {useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Button, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker'; 

export default function App() {

  const [selectedVegetable, setSelectedVegetable] = useState('val-cabbage-5');
  const [selectedFruit, setSelectedFruit] = useState('val-apple-13');
  const [quantityVegetable, setQuantityVegetable] = useState('1');
  const [quantityFruit, setQuantityFruit] = useState('1');
  const [totalPrice, setTotalPrice] = useState("0");

  return (
  <SafeAreaView style={styles.container}>
      <View style={styles.row1}>
        <Text style={styles.heading}> POGS Online Shopping </Text>
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
            <Picker.Item label="1" value='1' />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
        </Picker>
      </View>

      <View style={styles.row1}>
        <Button 
        style={styles.button}
        title="CALCULATE"
        onPress={() => {
          const lastChar = selectedVegetable[selectedVegetable.length -1];
          const lastTwoChar = selectedFruit.slice(-2);
          const charToIntForVegetables = parseInt(lastChar);
          const charToIntForFruits = parseInt(lastTwoChar);
          const quantityVeg = parseInt(quantityVegetable);
          const quantityFruits = parseInt(quantityFruit)
          setTotalPrice(lastChar * quantityVeg + lastTwoChar *quantityFruits);
        }}
         />
      </View>
      <View style={styles.row1}>
        <Text style={styles.price}>Total Cost of Order: ${totalPrice} </Text>
      </View>

      <View style={styles.footer}>
        <Text>App developed by Jerold Cortez, Benjamin Swinbourne, Alexander Wilson, Canh Yen Vy Van</Text>
      </View>


  </SafeAreaView>
  );}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffcc',
    },
    heading: {
      fontSize:26,
      textAlign: 'center',
      marginTop: 50
    }, 
    price:{
      fontSize:18,
      textAlign:'center',
      marginTop: 10
    },
    image: {
      width: 150,
      height: 150,
      marginBottom: 30,
      marginTop: 30,
      alignSelf: 'center'
    }, 
    row1:{
      marginTop:10
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
      marginTop: 30,
      marginBottom:30,
      color: '#228B22', //note: how to change color?
  },
    footer: {
      margin: 10,
      paddingTop: 370,
    }

  });

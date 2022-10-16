import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Styles from './Styles.js';

export default function app() {
  return (
    <View style={Styles.container}>
      <Image source={require('./src/crono.png')} />

      <Text style={Styles.timer}>00:00:00</Text>

      <View style={Styles.areabtn}>
        <TouchableOpacity style={Styles.btn}>
          <Text style={Styles.btnText}>Vai</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btn}>
          <Text style={Styles.btnText}>Vai</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.areaUltimo}>
        <Text style={Styles.textUltimo}>O ultimo tempo foi 00:00:00</Text>
      </View>
    </View>
  );
}

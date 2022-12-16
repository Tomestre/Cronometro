import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Styles from './Styles.js';

//Escopo Global
let timer = null;
let ss = 0;
let mm = 0;
let hh = 0;

export default function app() {
  //Escopo Local
  const [cronometro, setCronometro] = useState('00:00:00');
  const [vai, setVai] = useState('Vai');
  const [ultimo, setUltimo] = useState('');

  function botaoVai() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;

      setVai('Vai');
    } else {
      setVai('Parar');

      timer = setInterval(() => {
        ss++;

        if (ss === 60) {
          ss = 0;
          mm++;
        } else if (mm === 60) {
          mm === 0;
          hh++;
        }

        let format = `${hh < 10 ? '0' + hh : hh}:${mm < 10 ? '0' + mm : mm}:${
          ss < 10 ? '0' + ss : ss
        }`;

        setCronometro(format);
      }, 100);
    }
  }

  function limpar() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = null;
      ss = 0;
      mm = 0;
      hh = 0;
      setCronometro('00:00:00');
      setVai('Vai');
      setUltimo(
        cronometro == '00:00:00' ? '' : 'Ultimo tempo foi ' + cronometro,
      );
    }
  }

  return (
    //Layout
    <View style={Styles.container}>
      <Image source={require('./src/crono.png')} />

      <Text style={Styles.timer}>{cronometro}</Text>

      <View style={Styles.areabtn}>
        <TouchableOpacity style={Styles.btn} onPress={() => botaoVai()}>
          <Text style={Styles.btnText}>{vai}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.btn} onPress={() => limpar()}>
          <Text style={Styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.areaUltimo}>
        <Text style={Styles.textUltimo}>{ultimo}</Text>
      </View>
    </View>
  );
}

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {

    const fotos = [
      {id: 1, usuario: 'Julio Cesar'},
      {id: 2, usuario: 'Lissett' },
      {id: 3, usuario: 'Josue' }
    ];
    return (  
      
      <FlatList 
        data={fotos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) =>
        <View >
              <Text>{item.usuario}</Text>
              <Image source={require('./resources/img/img-teste.jpg')} 
                style={{width: width, height: width}} 
              />
            </View>  
        }

      />

      // <ScrollView>
      //   { fotos.map(foto =>
      //     <View key={foto.id}>
      //       <Text>{foto.usuario}</Text>
      //       <Image source={require('./resources/img/img-teste.jpg')} 
      //         style={{width: width, height: width}} 
      //       />
      //     </View>  
      //   )} 
      //   </ScrollView>          
    );
  }
}


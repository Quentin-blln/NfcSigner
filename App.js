import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect } from 'react';
import { SafeAreaView, Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet, Button } from 'react-native';
// import NfcManager, {NfcTech} from 'react-native-nfc-manager';
import QRCode from 'react-native-qrcode-svg';
import QRCodeScanner from './components/QRCodeScanner';

export default function App() {
  const [scanning, setScanning] = useState(false);


  // const NfcRead = () => {

  //   // Pre-step, call this before any NFC operations
  //   NfcManager.start();
  
  //   async function readNdef() {
  //     try {
  //       // register for the NFC tag with NDEF in it
  //       await NfcManager.requestTechnology(NfcTech.Ndef);
  //       // the resolved tag object will contain `ndefMessage` property
  //       const tag = await NfcManager.getTag();
  //       console.warn('Tag found', tag);
  //     } catch (ex) {
  //       console.warn('Oops!', ex);
  //     } finally {
  //       // stop the nfc scanning
  //       NfcManager.cancelTechnologyRequest();
  //     }
  //   }
  
  //   return (
  //     <View style={styles.wrapper}>
  //       <TouchableOpacity onPress={readNdef}>
  //         <Text>Scan a Tag</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // }

  return (
      scanning
      ?
        <QRCodeScanner updateScanning={setScanning}/>
      :
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={()=>{setScanning(true)}}
          title="Scan QR Code"
          color="#841584"
          accessibilityLabel="With this button you can scan qr code"
        />
        <QRCode
        value="bezjbksjdbkbdbdiubdsuizb545678a"
      />
        <StatusBar style="auto" />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
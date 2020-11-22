import React, {useRef} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Modalize} from 'react-native-modalize';

export default function Search() {
  const modalizeRef = useRef(null);

  function openModal() {
    modalizeRef.current?.open();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openModal}>
        <Text>Abrir Modal</Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} snapPoint={500}>
        <View style={styles.containerModal}>
          <Text>Teste</Text>
        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    flex: 1,
    height: 180,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

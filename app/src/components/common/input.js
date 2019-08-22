import React, {Component, ReactNode} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {sizeWidth, sizeFont} from '../../helpers/size.helper';
import {font} from '../../constants/app.constant';
import Text from './text';

export default class Input extends Component {
  render(): ReactNode {
    const {
      style,
      value,
      onChangeText,
      placeholder,
      secureTextEntry,
      label,
      labelStyle,
      icon,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        <View style={styles.body}>
          <TextInput
            placeholder={placeholder}
            value={value}
            autoCapitalize="none"
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C7C7CC"
            style={styles.input}
          />
          {icon}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(290),
    alignSelf: 'center',
    marginVertical: sizeWidth(6),
  },
  body: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#A0B1B7',
    height: sizeWidth(34),
    borderRadius: sizeWidth(6),
    paddingHorizontal: sizeWidth(8),
    marginTop: sizeWidth(4),
  },
  label: {
    fontFamily: font.medium,
    fontWeight: '500',
    fontSize: sizeFont(13),
  },
  input: {
    fontSize: sizeFont(13),
    flex: 1,
    textAlign: 'left',
    color: '#444444',
    padding: 0,
    fontFamily: font.regular,
  },
});

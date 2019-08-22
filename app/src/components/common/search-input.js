import React, {Component, ReactNode} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {sizeWidth, sizeFont} from '../../helpers/size.helper';
import {appColor} from '../../constants/app.constant';
import Text from './text';

export default class SearchInput extends Component {
  render(): ReactNode {
    const {
      style,
      placeholder,
      onPress,
      onIconPress,
      value,
      onChangeText,
    } = this.props;
    const Root = onPress ? TouchableOpacity : View;
    return (
      <Root onPress={onPress} style={[styles.container, style]}>
        <View style={styles.body}>
          {onPress ? (
            <View style={styles.wrap}>
              <Text style={styles.text}>{value || placeholder}</Text>
            </View>
          ) : (
            <TextInput
              placeholder={placeholder}
              value={value}
              autoFocus={true}
              autoCapitalize="none"
              returnKeyType="search"
              onChangeText={onChangeText}
              onSubmitEditing={onIconPress}
              underlineColorAndroid="transparent"
              placeholderTextColor="#999999"
              style={styles.input}
            />
          )}

          <TouchableOpacity disabled={!!onPress} onPress={onIconPress}>
            <Image
              resizeMode="stretch"
              source={require('../../../res/icon/search.png')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: sizeWidth(30),
    paddingHorizontal: sizeWidth(14),
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: sizeWidth(15),
    marginHorizontal: sizeWidth(6),
    borderColor: '#AAAAAA',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: sizeWidth(15),
    height: sizeWidth(15),
    tintColor: appColor.icon,
  },
  input: {
    fontSize: sizeFont(12),
    flex: 1,
    textAlign: 'left',
    color: '#444444',
    height: sizeWidth(30),
    marginRight: sizeWidth(14),
  },
  wrap: {
    flex: 1,
    height: sizeWidth(30),
    marginRight: sizeWidth(14),
    justifyContent: 'center',
  },
  text: {
    fontSize: sizeFont(14),
    color: '#444444',
  },
});

import React, {Component, ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './text';
import {sizeWidth} from '../../helpers/size.helper';

export default class DataRow extends Component {
  render(): ReactNode {
    const {label, value, valueStyle} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Text style={[styles.value, valueStyle]}>{value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 1,
    width: sizeWidth(320),
  },
  label: {
    flex: 1,
    padding: sizeWidth(8),
    backgroundColor: '#EEEEEE',
  },
  value: {
    flex: 2,
    padding: sizeWidth(8),
  },
});

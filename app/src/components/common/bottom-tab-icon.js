import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import {sizeWidth} from '../../helpers/size.helper';

export default class BottomTabIcon extends Component {
  render() {
    const {focused, source} = this.props;
    const tintColorStyle = focused ? styles.active : styles.inactive;
    return (
      <Image
        resizeMode="stretch"
        source={source}
        style={[styles.icon, tintColorStyle]}
      />
    );
  }
}

BottomTabIcon.propTypes = {
  icon: PropTypes.any,
};

const styles = StyleSheet.create({
  icon: {
    width: sizeWidth(17),
    height: sizeWidth(17),
  },
  active: {
    tintColor: '#04508A',
  },
  inactive: {
    tintColor: '#A0B1B7',
  },
});

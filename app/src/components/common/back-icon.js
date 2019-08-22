import React, {Component} from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import {sizeWidth} from '../../helpers/size.helper';
import {navigateBack} from '../../actions/nav.action';
import {connect} from 'react-redux';

class BackIcon extends Component {
  render() {
    const {style, iconStyle, source} = this.props;
    return (
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={this.props.navigateBack}>
        <Image
          style={[styles.icon, iconStyle]}
          resizeMode="contain"
          source={source || require('../../../res/icon/back.png')}
        />
      </TouchableOpacity>
    );
  }
}

export default connect(
  null,
  {navigateBack},
)(BackIcon);

const styles = StyleSheet.create({
  container: {
    padding: sizeWidth(4),
  },
  icon: {
    width: sizeWidth(21),
    height: sizeWidth(21),
    tintColor: 'white',
  },
});

import React, {Component, ReactNode} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {sizeWidth, sizeHeight} from '../../helpers/size.helper';
import Text from '../../components/common/text';

export default class UserItem extends Component {
  onUserPress = () => {
    const {item, onUserPress} = this.props;
    onUserPress(item);
  };

  render(): ReactNode {
    const {item} = this.props;
    return (
      <TouchableOpacity onPress={this.onUserPress} style={styles.container}>
        <Image
          source={{uri: item.avatar}}
          resizeMode="stretch"
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: sizeWidth(302),
    alignSelf: 'center',
    marginVertical: sizeWidth(4),
    backgroundColor: 'white',
    borderRadius: sizeWidth(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: sizeWidth(64),
    height: sizeHeight(64),
    marginRight: sizeWidth(8),
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: sizeWidth(4),
  },
  name: {
    fontWeight: '500',
  },
  email: {
    fontStyle: 'italic',
    marginTop: sizeWidth(4),
  },
});

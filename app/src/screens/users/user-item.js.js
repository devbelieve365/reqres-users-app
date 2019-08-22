import React, {Component, ReactNode} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {sizeWidth, sizeHeight} from '../../helpers/size.helper';
import Text from '../../components/common/text';

export default class UserItem extends Component {
  render(): ReactNode {
    const {item} = this.props;
    return (
      <View style={styles.container}>
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
      </View>
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

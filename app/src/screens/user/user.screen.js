import React, {Component, ReactNode} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {sizeWidth, sizeHeight, sizeFont} from '../../helpers/size.helper';
import {appColor} from '../../constants/app.constant';
import Toolbar from '../../components/common/toolbar';
import Text from '../../components/common/text';
import DataRow from '../../components/common/data-row';
import BackIcon from '../../components/common/back-icon';

export default class UserScreen extends Component {
  render(): ReactNode {
    const {user} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Toolbar
          left={<BackIcon />}
          center={
            <Text style={styles.title}>
              {user.first_name} {user.last_name}
            </Text>
          }
        />
        <Image source={{uri: user.avatar}} style={styles.avatar} />
        <DataRow label="ID" value={user.id} />
        <DataRow label="First name" value={user.first_name} />
        <DataRow label="Last name" value={user.last_name} />
        <DataRow label="Email" value={user.email} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
  avatar: {
    width: sizeWidth(140),
    height: sizeHeight(140),
    alignSelf: 'center',
  },
  title: {
    fontSize: sizeFont(14),
    fontWeight: 'bold',
    color: 'white',
  },
});

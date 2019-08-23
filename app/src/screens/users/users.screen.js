import React, {Component, ReactNode} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {resetPage, navigateToPage} from '../../actions/nav.action';
import {connect} from 'react-redux';
import {sizeWidth, sizeHeight} from '../../helpers/size.helper';
import {requestedUsers} from '../../actions/users.action';
import UserItem from './user-item.js';
import {appColor} from '../../constants/app.constant';
import Text from '../../components/common/text';
import LoadingIndicator from '../../components/common/loading-indicator';

class UsersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  render(): ReactNode {
    const {users, loading, totalPages} = this.props.users;
    const {page} = this.state;
    return (
      <View style={styles.container}>
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            <FlatList
              bounces={false}
              data={users}
              renderItem={this.renderUser}
              keyExtractor={item => item.id.toString()}
            />
            <View style={styles.footer}>
              <TouchableOpacity
                disabled={page <= 1}
                onPress={this.loadPreviousPage}
                style={page <= 1 ? styles.disabled : styles.button}>
                <Text style={styles.action}>PREVIOUS</Text>
              </TouchableOpacity>
              <View style={styles.line} />
              <TouchableOpacity
                disabled={page >= totalPages}
                onPress={this.loadNextPage}
                style={page >= totalPages ? styles.disabled : styles.button}>
                <Text style={styles.action}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    );
  }

  onUserPress = user => {
    this.props.navigateToPage('User', {user});
  };

  renderUser = ({item}) => {
    return <UserItem onUserPress={this.onUserPress} item={item} />;
  };

  loadNextPage = () => {
    const {page} = this.state;
    const nextPage = page + 1;
    this.props.requestedUsers({page: nextPage});
    this.setState({page: nextPage});
  };

  loadPreviousPage = () => {
    const {page} = this.state;
    const previousPage = page - 1;
    this.props.requestedUsers({page: previousPage});
    this.setState({page: previousPage});
  };

  componentDidMount = async () => {
    const {page} = this.state;
    this.props.requestedUsers({page});
  };
}

export default connect(
  state => ({users: state.users}),
  {resetPage, navigateToPage, requestedUsers},
)(UsersScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.bg,
  },
  image: {
    width: sizeWidth(320),
    height: sizeHeight(568),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#AAAAAA',
  },
  action: {
    color: 'white',
    fontWeight: '500',
    fontStyle: 'italic',
  },
  footer: {
    height: sizeWidth(30),
    backgroundColor: appColor.primary,
    flexDirection: 'row',
  },
  line: {
    width: 1,
    backgroundColor: 'white',
  },
});

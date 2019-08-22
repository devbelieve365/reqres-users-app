import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  BackHandler,
  SafeAreaView,
} from 'react-native';
import {AppNavigator} from './navigators/app.navigator';
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';

import {createReduxContainer} from 'react-navigation-redux-helpers';
import {appColor} from './constants/app.constant';

const AppContainer = createReduxContainer(AppNavigator);
const mapStateToProps = state => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(AppContainer);

class Main extends Component {
  shouldCloseApp = () => {
    return this.props.nav.index === 0;
  };

  handleBackPress = () => {
    if (this.shouldCloseApp()) {
      return false;
    }
    this.props.dispatch(NavigationActions.back({}));
    return true;
  };

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={appColor.primary}
          barStyle="light-content"
        />
        <SafeAreaView style={styles.body}>
          <AppWithNavigationState />
        </SafeAreaView>
      </View>
    );
  }
}

const statusBarHeight = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(31, 39, 43)',
  },
  statusBar: {
    height: statusBarHeight,
    backgroundColor: 'rgb(31, 39, 43)',
  },
  body: {
    flex: 1,
    backgroundColor: '#04508A',
  },
});

export default connect(
  state => ({
    nav: state.nav,
  }),
  null,
)(Main);

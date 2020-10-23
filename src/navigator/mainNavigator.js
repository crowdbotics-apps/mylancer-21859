import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial156887Navigator from '../features/Tutorial156887/navigator';
import NotificationList156859Navigator from '../features/NotificationList156859/navigator';
import Settings156858Navigator from '../features/Settings156858/navigator';
import Settings156850Navigator from '../features/Settings156850/navigator';
import UserProfile156848Navigator from '../features/UserProfile156848/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial156887: { screen: Tutorial156887Navigator },
NotificationList156859: { screen: NotificationList156859Navigator },
Settings156858: { screen: Settings156858Navigator },
Settings156850: { screen: Settings156850Navigator },
UserProfile156848: { screen: UserProfile156848Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

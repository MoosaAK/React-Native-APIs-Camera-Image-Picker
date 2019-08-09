import {createStackNavigator, createAppContainer} from 'react-navigation';

import Page from "./Page"
import Page1 from "./Page1"
import Page2 from "./Page2"
// import Page3 from "./Page3"

const MainNavigator = createStackNavigator({

  Page: 
  {screen: Page},
  
  Page1: 
  {screen: Page1},

  Page2:
   {screen: Page2},

  //  Page3: 
  //  {screen: Page3},
 
});

const App = createAppContainer(MainNavigator);

export default App;
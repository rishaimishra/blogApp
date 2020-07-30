import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/indexScreen';
import {Provider} from './src/context/blogContext';
import ShowScreen from './src/screens/showScreen';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen
},{
    initialRouteName : 'Index',
    defaultNavigationOptions: {
        title: 'Blogs'
    }
});

const App = createAppContainer(navigator);

export default () =>{
    return <Provider>
        <App />
    </Provider>;
};

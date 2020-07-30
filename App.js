import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import IndexScreen from './src/screens/indexScreen';
import {Provider} from './src/context/blogContext';
import ShowScreen from './src/screens/showScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit:EditScreen
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

import { StackNavigator } from 'react-navigation';
import TitleScreen from '../containers/TitleScreen';
import EntitiesNavigator from './EntitiesNavigator';

const RootNavigator = StackNavigator({
  Title: {
    screen: TitleScreen,
  },
  Entities: {
    screen: EntitiesNavigator,
  },
}, {
  headerMode: 'none',
});

export default RootNavigator;

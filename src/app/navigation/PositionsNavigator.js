import genCrudNavBlock from './genCrudNavBlock';
import PositionsListScreen from '../containers/PositionsListScreen';
import PositionEditScreen from '../containers/PositionEditScreen';
import PositionCreateScreen from '../containers/PositionCreateScreen';

const PositionsNavigator = genCrudNavBlock({
  entityName: 'Position',
  ListScreen: PositionsListScreen,
  EditScreen: PositionEditScreen,
  CreateScreen: PositionCreateScreen,
});

export default PositionsNavigator;

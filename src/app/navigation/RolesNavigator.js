import RolesListScreen from '../containers/RolesListScreen';
import RoleEditScreen from '../containers/RoleEditScreen';
import RoleCreateScreen from '../containers/RoleCreateScreen';
import genCrudNavBlock from './genCrudNavBlock';

const RolesNavigator = genCrudNavBlock({
  entityName: 'Roles',
  ListScreen: RolesListScreen,
  EditScreen: RoleEditScreen,
  CreateScreen: RoleCreateScreen,
});

export default RolesNavigator;

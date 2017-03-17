import EntityApi from '../../api/EntityApi';
import genEntitySagas from './_entitySagas';
import { genListSagas, genFormSagas } from './_genSaga';
import { actions as listActions, constants as listConstants } from '../ui/positionList';
import { actions as formActions, constants as formConstants } from '../ui/positionForm';
import { actions as entityActions, constants as entityConstants } from '../entity/positions';

const api = new EntityApi('positions');
const entitySagas = genEntitySagas(api, entityActions, entityConstants);

const listSagas = genListSagas(entitySagas, listActions, listConstants);
const formSagas = genFormSagas(entitySagas, formActions, formConstants);
export default [...listSagas, ...formSagas, ...entitySagas.watchEntityEvents];

import Api from './Api';

export default class EntityApi {
  constructor(entityName) {
    this.api = new Api(entityName);
  }

  getOne(id) {
    return this.api.get(id);
  }

  getAll() {
    return this.api.get();
  }

  create(data) {
    return this.api.post('', data);
  }

  update(data) {
    return this.api.put(data.id, data);
  }

  remove(id) {
    return this.api.remove(id);
  }

}

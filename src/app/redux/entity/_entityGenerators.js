export function genConstants(namespace) {
  return {
    CREATE: `${namespace}_CREATE_ENTITY`,
    UPDATE: `${namespace}_UPDATE_ENTITY`,
    DELETE: `${namespace}_DELETE_ENTITY`,
  };
}

export function genActions(namespace) {
  const constants = genConstants(namespace);
  return {
    createEntity(payload) {
      return {
        type: constants.CREATE,
        payload,
      };
    },

    deleteEntity(payload) {
      return {
        type: constants.DELETE,
        payload,
      };
    },

    updateEntity(payload) {
      return {
        type: constants.UPDATE,
        payload,
      };
    },
  };
}

let id = 100;
function nextId() {
  id += 1;
  return id;
}

export function genReducer(namespace, DEFAULT) {
  const constants = genConstants(namespace);
  return function users(state = DEFAULT, action) {
    switch (action.type) {
      case constants.CREATE:
        return [...state, Object.assign({ id: nextId() }, action.payload)];

      case constants.DELETE:
        return state.filter(item => item.id !== action.payload);

      case constants.UPDATE:
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });

      default:
        return state;
    }
  };
}

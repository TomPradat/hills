import {ADD_ELEMENT, SELECT_ELEMENT, UPDATE_ELEMENT} from './../actions/actions';

const initialState = {
  gelements: {
      circle: [
          {id: 1, r: 50, label: 'hello', properties: '', activity: ''}
      ],
      node: [
          {id: 1, dot: 'right'}
      ],
  },
  selectedElement: false
}

const addElement = (state, action) => {
    const type = action.elementType;
    const newId = state.gelements[type].length + 1;
    const newElement = Object.assign({}, action.element, {id: newId});
    let temp = {};
    temp[type] = state.gelements[type].concat(newElement);

    return Object.assign({}, state, {
        gelements: Object.assign({}, state.gelements, temp)
    }
    );
}

const updateElement = (state, action) => {
    const temp = {};
    const type = action.elementType;
    const values = action.values;

    temp[type] = state.gelements[type].map( function (element) {
        if (action.id === element.id) {
            return Object.assign({}, element, values);
        } else {
            return element;
        }
    });

    return Object.assign({}, state, {
        gelements: Object.assign({}, state.gelements, temp)
    });
}

export default function todoApp(state = initialState, action) {

    switch(action.type){
        case ADD_ELEMENT :
        return addElement(state, action);

        case SELECT_ELEMENT :
        return Object.assign({}, state, {
            selectedElement: {
                type: action.elementType,
                id: action.id
            }
        });

        case UPDATE_ELEMENT :
        return updateElement(state, action);

        default :
        return state;
    }
}
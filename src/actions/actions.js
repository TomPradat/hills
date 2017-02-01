export const ADD_CIRCLE = 'ADD_CIRCLE';
export const ADD_NODE = 'ADD_NODE';
export const SELECT_CIRCLE = 'SELECT_CIRCLE';

const addCircle = (circle) => ({type: ADD_CIRCLE, circle});

const addNode = (node) => ({type: ADD_NODE, node});

export function addElement(element, ElementType) {
    switch(ElementType) {
        case 'circle':
        return addCircle(element);

        default :
        return addNode(element);
    }
}

export function selectCircle(id) {
    return {
        type: SELECT_CIRCLE,
        id
    }
}
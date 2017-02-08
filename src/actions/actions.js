export const ADD_ELEMENT = 'ADD_ELEMENT';
export const SELECT_ELEMENT = 'SELECT_ELEMENT';
export const UPDATE_ELEMENT = 'UPDATE_ELEMENT';
export const MOVE_PATH_DOT = 'MOVE_PATH_DOT';

export function addElement(type, element) {
    return {
        type: ADD_ELEMENT,
        elementType: type,
        element
    }
}

export function selectElement(type, id) {
    return {
        type: SELECT_ELEMENT,
        elementType: type,
        id
    }
}

export function updateElement(type, id, values) {
    return {
        type: UPDATE_ELEMENT,
        elementType: type,
        id,
        values
    }
}

export function movePathDot(pathId, dot) {
    return {
        type: MOVE_PATH_DOT,
        pathId,
        dot
    }
}
import {ADD_CIRCLE, ADD_NODE, ADD_BLACK_CIRCLE} from './../actions/actions';

const initialState = {
  gelements: {
      blackCircles: [{}],
      circles: [
          {r: 50}
      ],
      nodes: [
          {dot: 'right'}
      ],
  }
}

export default function todoApp(state = initialState, action) {
    switch(action.type){
        case ADD_CIRCLE : 
        return Object.assign({}, state, {
            gelements: {
                blackCircles: state.gelements.blackCircles,
                nodes: state.gelements.nodes,
                circles: [
                    ...state.gelements.circles,
                    {r: 50}
                ]
            }
        });

        case ADD_BLACK_CIRCLE :
        return Object.assign({}, state, {
            gelements: {
                circles: state.gelements.circles,
                nodes: state.gelements.nodes,
                blackCircles: [
                    ...state.gelements.blackCircles,
                    {}
                ]
            }
        });

        case ADD_NODE :
        return Object.assign({}, state, {
            gelements: {
                blackCircles: state.gelements.blackCircles,
                nodes: [
                    ...state.gelements.nodes,
                    {dot: 'right'}
                ],
                circles: state.gelements.circles,
            }
        });

        default :
        return state;
    }
}
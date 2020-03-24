import { ADD_PEOPLE, ADD_FILMS, ADD_PLANETS, ADD_SPECIES, ADD_STARSHIPS, ADD_VEHICLES } from "../constants/action-types";

const initialState = {
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PEOPLE:
            return Object.assign({}, state, {
                people: action.payload
            });
        case ADD_FILMS:
            return Object.assign({}, state, {
                films: action.payload
            });
        case ADD_PLANETS:
            return Object.assign({}, state, {
                planets: action.payload
            });
        case ADD_SPECIES:
            return Object.assign({}, state, {
                species: action.payload
            });
        case ADD_STARSHIPS:
            return Object.assign({}, state, {
                starships: action.payload
            });
        case ADD_VEHICLES:
            return Object.assign({}, state, {
                vehicles: action.payload
            });
        default:
            return state;
    }
}

export default rootReducer;
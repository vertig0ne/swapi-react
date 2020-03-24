import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import { ADD_PEOPLE, ADD_FILMS, ADD_PLANETS, ADD_SPECIES, ADD_STARSHIPS, ADD_VEHICLES } from "../constants/action-types";

const cache = setupCache({
    maxAge: 15 * 60 * 1000
});

const api = axios.create({
    adapter: cache.adapter
});

export function getPeople() {
    return function (dispatch) {
        return api("https://swapi.co/api/people/")
            .then(data => {
                dispatch({ type: ADD_PEOPLE, payload: data.data.results });
            });
    };
}

export function getFilms() {
    return function (dispatch) {
        return api("https://swapi.co/api/films/")
            .then(data => {
                dispatch({ type: ADD_FILMS, payload: data.data.results });
            });
    };
}

export function getPlanets() {
    return function (dispatch) {
        return api("https://swapi.co/api/planets/")
            .then(data => {
                dispatch({ type: ADD_PLANETS, payload: data.data.results });
            });
    };
}

export function getSpecies() {
    return function (dispatch) {
        return api("https://swapi.co/api/species/")
            .then(data => {
                dispatch({ type: ADD_SPECIES, payload: data.data.results });
            });
    };
}

export function getStarships() {
    return function (dispatch) {
        return api("https://swapi.co/api/starships/")
            .then(data => {
                dispatch({ type: ADD_STARSHIPS, payload: data.data.results });
            });
    };
}

export function getVehicles() {
    return function (dispatch) {
        return api("https://swapi.co/api/vehicles/")
            .then(data => {
                dispatch({ type: ADD_VEHICLES, payload: data.data.results });
            });
    };
}

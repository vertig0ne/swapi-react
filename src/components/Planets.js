import React from "react";
import { connect } from "react-redux";
import { getPlanets } from '../actions/index';
import { Table } from 'react-bootstrap';

export class Planets extends React.Component {
    componentDidMount() {
        this.props.getPlanets();
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Rotation Period</th>
                        <th>Orbital Period</th>
                        <th>Diameter</th>
                        <th>Climate</th>
                        <th>Gravity</th>
                        <th>Terrain</th>
                        <th>Surface Water</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.planets.map(el => (
                    <tr>
                        <td></td>
                        <td>{el.name}</td>
                        <td>{el.rotation_period}</td>
                        <td>{el.orbital_period}</td>
                        <td>{el.diameter}</td>
                        <td>{el.climate}</td>
                        <td>{el.gravity}</td>
                        <td>{el.terrain}</td>
                        <td>{el.surface_water}</td>
                        <td>{el.population}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { planets: state.planets };
};

export default connect(mapStateToProps, { getPlanets })(Planets);

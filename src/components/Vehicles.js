import React from "react";
import { connect } from "react-redux";
import { getVehicles } from '../actions/index';
import { Table } from 'react-bootstrap';

export class Vehicles extends React.Component {
    componentDidMount() {
        this.props.getVehicles();
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Manufacturer</th>
                        <th>Cost in Credits</th>
                        <th>Length</th>
                        <th>Max Atmosphering Speed</th>
                        <th>Crew</th>
                        <th>Passengers</th>
                        <th>Cargo Capacity</th>
                        <th>Consumables</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.vehicles.map(el => (
                    <tr>
                        <td></td>
                        <td>{el.name}</td>
                        <td>{el.model}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.cost_in_credits}</td>
                        <td>{el.length}</td>
                        <td>{el.max_atmosphering_speed}</td>
                        <td>{el.crew}</td>
                        <td>{el.passengers}</td>
                        <td>{el.cargo_capacity}</td>
                        <td>{el.consumables}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { vehicles: state.vehicles };
};

export default connect(mapStateToProps, { getVehicles })(Vehicles);

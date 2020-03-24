import React from "react";
import { connect } from "react-redux";
import { getStarships } from '../actions/index';
import { Table } from 'react-bootstrap';

export class Starships extends React.Component {
    componentDidMount() {
        this.props.getStarships();
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
                        <th>Hyperdrive Rating</th>
                        <th>MGLT</th>
                        <th>Starship Class</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.starships.map(el => (
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
                        <td>{el.hyperdrive_rating}</td>
                        <td>{el.MGLT}</td>
                        <td>{el.starship_class}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { starships: state.starships };
};

export default connect(mapStateToProps, { getStarships })(Starships);

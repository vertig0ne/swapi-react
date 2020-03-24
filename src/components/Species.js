import React from "react";
import { connect } from "react-redux";
import { getSpecies } from '../actions/index';
import { Table } from 'react-bootstrap';

export class Species extends React.Component {
    componentDidMount() {
        this.props.getSpecies();
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Classification</th>
                        <th>Designation</th>
                        <th>Average Height</th>
                        <th>Skin Colours</th>
                        <th>Hair Colours</th>
                        <th>Eye Colours</th>
                        <th>Average Lifespan</th>
                        <th>Homeworld</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.species.map(el => (
                    <tr>
                        <td></td>
                        <td>{el.name}</td>
                        <td>{el.classification}</td>
                        <td>{el.designation}</td>
                        <td>{el.average_height}</td>
                        <td>{el.skin_colors}</td>
                        <td>{el.hair_colors}</td>
                        <td>{el.eye_colors}</td>
                        <td>{el.average_lifespan}</td>
                        <td>{el.homeworld}</td>
                        <td>{el.language}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { species: state.species };
};

export default connect(mapStateToProps, { getSpecies })(Species);

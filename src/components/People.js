import React from "react";
import { connect } from "react-redux";
import { getPeople } from '../actions/index';
import { Table } from 'react-bootstrap';

export class People extends React.Component {
    componentDidMount() {
        this.props.getPeople();
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Colour</th>
                        <th>Skin Colour</th>
                        <th>Eye Colour</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.people.map(el => (
                    <tr>
                        <td>{el.url}</td>
                        <td>{el.name}</td>
                        <td>{el.height}</td>
                        <td>{el.mass}</td>
                        <td>{el.hair_color}</td>
                        <td>{el.skin_color}</td>
                        <td>{el.eye_color}</td>
                        <td>{el.birth_year}</td>
                        <td>{el.gender}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { people: state.people };
};

export default connect(mapStateToProps, { getPeople })(People);

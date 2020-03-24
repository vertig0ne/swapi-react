import React from "react";
import { connect } from "react-redux";
import { getFilms } from '../actions/index';
import { Table } from 'react-bootstrap';

export class Films extends React.Component {
    componentDidMount() {
        this.props.getFilms();
    }

    render() {
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Release Date</th>
                        <th>Crawl</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.films.map(el => (
                    <tr>
                        <td>{el.episode_id}</td>
                        <td>{el.title}</td>
                        <td>{el.director}</td>
                        <td>{el.producer}</td>
                        <td>{el.release_date}</td>
                        <td>{el.opening_crawl}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = state => {
    return { films: state.films };
};

export default connect(mapStateToProps, { getFilms })(Films);

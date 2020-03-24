import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to SWAPI-React</h1>
            <p>This is an application built using React to display information found in the <a href="https://swapi.co/">Star Wars API</a></p>

            <p>This application was built in around 3-4 hours. Using Redux to provide a global store to disassociate the core logic from the display logic.
                It also uses axios for all HTTP requests to the API. This has been enabled with the axios cache adapter to enable cached responces to reduce the
                amount of API calls we actually make to the SWAPI (While their limit is 10k/day we also don't want to abuse their generosity).
            </p>

            <h3>To-do:</h3>
            <ul>
                <li>In depth linking of each category</li>
                <li>Pagination of tables</li>
                <li>Results filtering</li>
                <li>Extra Styling</li>
            </ul>
        </div>
    );
}

export default Home;
import React from 'react';

const Header = (props) => {
    return (
        <div className="jumbotron">
            <h1>Trail Tracker</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Account</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">Watch List</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
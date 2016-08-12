import React from 'react';
import {Link} from 'react-router'

const App = React.createClass({
    render() {
        return (
            <div>
                <h1>ReactJS - Course</h1>
                {this.props.children}
            </div>
        );
    }
});

export default App;

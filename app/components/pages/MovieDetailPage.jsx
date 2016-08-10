import React from 'react';

import {Link} from 'react-router';


class MovieDetailPage extends React.Component {
    constructor(){
        super(...arguments);
        console.log(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h1>{this.props.params.id}</h1>
            </div>
        )
    }
}

export default MovieDetailPage;

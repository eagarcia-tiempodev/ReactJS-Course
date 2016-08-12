import React from 'react';

import {Link} from 'react-router';
import TVStore from '../../stores/TVStore';
import TVActions from '../../actions/TVActions';

class MovieDetailPage extends React.Component {
    constructor(){
        super(...arguments);
        TVActions.getMovie(this.props.params.id);
        this.state = TVStore.getState();
    }

    componentDidMount() {
        this.storeSubscription = TVStore.addListener(data => this.handleStoreChange(data));
    }

    componentWillUnmount() {
        this.storeSubscription.remove();
    }

    handleStoreChange(){
        this.setState(TVStore.getState());
    }

    render() {
        const metadata = [
            { key: 'original_title', label: 'Original Title' },
            { key: 'homepage', label: 'Homepage' },
            { key: 'overview', label: 'Overview' },
        ];
        return (
            <div className='movie-detail'>
                <h2>{this.state.currentMovie.title}</h2>
                <table>
                    <tbody>
                        { metadata.map((row, idx) => {
                            return (
                                <tr key={idx}>
                                    <th>{row.label}</th>
                                    <td>{this.state.currentMovie[row.key]}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <img src={`http://image.tmdb.org/t/p/w500${this.state.currentMovie.poster_path}`} />
            </div>
        )
    }
}

export default MovieDetailPage;

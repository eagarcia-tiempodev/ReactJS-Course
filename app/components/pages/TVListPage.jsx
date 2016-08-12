import React from 'react';

import {TVList} from '../TVList';

const App = React.createClass({
  render() {
    return (
      <div>
          <h1>TVList Page Container</h1>
          <TVList />
      </div>
    )
  }
})

export default App;

import React from 'react';

import Navheader from './Components/Nav';
import Sidenav from './Components/Sidenav';

function App() {
  return (
    <div className="uk-container" style={{padding: "0", margin: "0"}}>
      <Sidenav />
      <div className="main" style={{margin: "0 0 0 250px", width: "100%"}}>
        <Navheader titleText="Home" />
      </div>
    </div>
  );
}

export default App;

import React from 'react';

class Home extends React.Component {
  render() {
    const logInUrl = '/api/login?callback=' + encodeURIComponent(document.location.origin + '/api/callback');

    return (
      <div>
        <h2>welcome to dndtextui</h2>
        <br />
        <a href={logInUrl}>log in</a>
      </div>
    );
  }
}

export default Home;

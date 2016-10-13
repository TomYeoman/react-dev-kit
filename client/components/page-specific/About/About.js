
import HeaderSmall from '../../common/Headers/HeaderSmall/HeaderSmall';

import React from 'react'

class Home extends React.Component {
  render () {
    return (
        <div>
            <HeaderSmall
                text = "About!"
            />
          <p>
            You've landed on the about page, You can go to //localhost:2900/About and land straight here if you wish
          </p>
        </div>
    )
  }
};

export default Home;

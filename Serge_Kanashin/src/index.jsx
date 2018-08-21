import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';

import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const menuItems = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'News',
    href: '/news'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <Menu size="big" items = {menuItems} />
          <div>Hello World from Wrapper</div>
          <Button color="danger">Danger!</Button>
        </Wrapper>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

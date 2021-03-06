import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom"
import { shallow, configure } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><App/></Router>, div);
  ReactDOM.unmountComponentAtNode(div);
});

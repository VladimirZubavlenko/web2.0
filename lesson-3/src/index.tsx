import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';

import App from './App';
import "./styles.scss";

const mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);

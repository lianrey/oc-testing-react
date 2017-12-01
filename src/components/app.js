import React from 'react'
import {render} from 'react-dom';
import View from './Contact.js';

const data = document.__INITIALSTATE__;
render(<View contact={data.contact}/>, document.getElementById("root"))
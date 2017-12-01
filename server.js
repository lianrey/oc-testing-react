import React from 'react';
import {renderToString} from 'react-dom/server';
import View from "./src/components/Contact.js";

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const data = {};

  const contact = {
    'firstName': 'Liana',
    'lastName': 'Reyes',
    'email': 'liana.reyes@senioradvisor.com',
    'phone': '+12107770422'
  }

  data.contact = contact;

  const renderedApp = renderToString(<View contact={contact}/>);

  callback(null, {
    name,
    staticPath,
    componentProps: JSON.stringify(data),
    app: renderedApp
  });
};

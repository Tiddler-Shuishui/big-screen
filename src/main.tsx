import React from 'react';
import {render} from 'react-dom';
import { createRoot } from 'react-dom/client';
import './shared/style.scss';
import App from './app';

createRoot(document.getElementById('root') as Element | DocumentFragment).render(
  <App/>
);

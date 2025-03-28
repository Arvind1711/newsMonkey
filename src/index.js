import React from 'react';
import ReactDOM from 'react-dom/client';
import NewsApp from './NewsApp';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NewsApp />
    </BrowserRouter>,
);
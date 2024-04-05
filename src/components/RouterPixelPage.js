import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreationPage from './audienceCreation';
import PixelPage from './PixelPage';
import NewPage from './NewPage'; // Import the NewPage component

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={CreationPage} />
            <Route path="/pixel-page" component={PixelPage} />
            <Route path="/new-page" component={NewPage} /> {/* Add route for NewPage */}
        </Switch>
    </Router>,
    document.getElementById('root')
);

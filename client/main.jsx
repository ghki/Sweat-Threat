import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { createHistory, useBasename } from 'history';

import routes from '../imports/router/routes.js';
import MainLayout from '../imports/ui/containers/MainLayout.jsx';

import '../imports/startup/accounts-config.js';
//import ThreatForm from '../imports/ui/components/ThreatForm.jsx';

const rootRoute = {
  component: MainLayout,
  childRoutes: routes,
};

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory} routes={rootRoute} />,
  	//<ThreatForm />, 
  	document.getElementById('render-target')
  );

	GoogleMaps.load({
		key: 'API-KEY-HERE', 
		libraries: 'places' 
	});
});

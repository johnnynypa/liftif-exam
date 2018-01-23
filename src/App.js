//Dependencies
// eslint-disable-next-line
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

//Containers
import Home from './containers/home';
import Login from './containers/login';

import store from './redux/store';

const App = (
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<Route exact path ="/" component={Home} />
				<Route exact path ="/login" component={Login} />
			</div>
		</BrowserRouter>
	</Provider>
);

export default App;

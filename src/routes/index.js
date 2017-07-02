import React from 'react';
import { Route }   from 'react-router';
import CoreLayout  from 'layouts/coreLayout';
import Home    from 'views/homeView.react';
import Blog    from 'views/blog.react';

export default (
	<Route>
	    <Route component={CoreLayout}>
	        <Route name='home' path='/' component={Home} />
	        <Route name='home' path='/article/:articleId' component={Blog} />
	    </Route>
    </Route>
);

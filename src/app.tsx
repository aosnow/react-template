/**
 * Created by AoSnow on 2017/6/19.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Greeter from './components/Greeter';
import './css/app';

ReactDOM.render(
	<Greeter name="Reactor"/>,
	document.getElementById( 'app' )
);

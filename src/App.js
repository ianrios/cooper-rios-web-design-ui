import React, { useState } from 'react';
import {
	Switch,
	Route,
	Link
} from 'react-router-dom'
import Home from './Home'
import Demo from './Demo'
import Services from './Services'
import Contact from './Contact'
import './App.scss';

function App() {
	const options = ["home", "demo", "services", "contact"];
	const [view, setView] = useState(0)
	return (

		<div class="container" id="page">
			<h1 id="header">Cooper & Rios Web Design</h1>
			<div class="container" id="options" >
				{options.map((item, idx) => {
					return (
						<Link
							key={idx}
							to={"/" + item}
							onClick={() => setView(idx)}
						>
							{item}
						</Link>
					)
				})}
			</div>
			<div class="container" id="content">
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/demo">
						<Demo />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>

					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</div>

	);
}

export default App;

import React, { useState } from 'react';
import './App.scss';
import data from "./data/data.json"

function App() {
	const options = ["home", "demo", "services", "contact"];
	const [view, setView] = useState(0)
	return (
		<div class="container" id="page">
			<h1 id="header">Cooper & Rios Web Design</h1>
			<div class="container" id="options" >
				{options.map((item, idx) => {
					return (
						<a

							key={idx}
							href="#"
							onClick={() => setView(idx)}
						>{item}</a>
					)
				})}
			</div>
			<div class="container" id="content">
				{Object.keys(data.content[options[view]]).map((item, idx) => {
					return (
						<div key={idx} >
							<h2>{item}</h2>
							<p>{data.content[options[view]][item].map((i, j) => { return (<span key={j}>{i}</span>) })}</p>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default App;

import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import NewsListPage from "./components/News/NewsListPage"
import ResturantList from "./components/Lunch/ResturantList"

export default function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	return(
		<div>
			<NewsListPage />
			<ResturantList />
		</div>
	);
}

function About() {
	return(
		<div>
			<p> This is an react app running against a graphql api</p>
			<p> Cool right? </p>
		</div>
	);
}

import * as React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
	return (
		<Router basename="project-irminsul">
			<Nav />
		</Router>
	);
}

export default App;

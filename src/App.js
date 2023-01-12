import * as React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import Nav from "./components/Nav";
import CharacterBrowser from "./components/characters/CharacterBrowser";
import WeaponBrowser from "./components/weapons/WeaponBrowser";

const App = () => {
	return (
		<Router basename="project-irminsul">
			<Nav />
			<Switch>
				<Route exact path="/" component={CharacterBrowser} />
				<Route path="/characters" component={CharacterBrowser} />
				<Route path="/weapons" component={WeaponBrowser} />
			</Switch>
		</Router>
	);
}

export default App;

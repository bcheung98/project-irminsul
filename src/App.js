import * as React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "./redux/actions/fetchCharacters";
import { fetchWeapons } from "./redux/actions/fetchWeapons";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CharacterBrowser from "./components/characters/CharacterBrowser";
import CharacterPage from "./components/characters/page/_CharacterPage";
import WeaponBrowser from "./components/weapons/WeaponBrowser";
import WeaponPage from "./components/weapons/page/_WeaponPage";
import { AppBar, Typography } from "@mui/material";

const App = (props) => {

	useEffect(() => {
		if (props.characters.characters.length === 0) {
			fetchCharacters();
		}
		if (props.weapons.weapons.length === 0) {
			fetchWeapons();
		}
	}, [])

	let { fetchCharacters, fetchWeapons } = props;

	return (
		<Router basename="project-irminsul">
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/characters" component={CharacterBrowser} />
				<Route path="/character/:char_name" children={<CharacterPage />} />
				<Route path="/weapons" component={WeaponBrowser} />
				<Route path="/weapon/:weapon_name" children={<WeaponPage />} />
			</Switch>
			<AppBar position="static" sx={{
				mt: 10,
				mb: -5,
				padding: 2,
				textAlign: "center",
				backgroundColor: "rgb(0, 30, 60)",
				borderTop: "1px solid rgb(30, 73, 118)",
			}}>
				<Typography sx={{ fontFamily: "Genshin, sans-serif" }} variant="subtitle2">Project Irminsul is not affiliated with HoYoverse.<br />Genshin Impact, images and data are registered trademarks of HoYoverse.</Typography>
			</AppBar>
		</Router>
	);
}

const mapStateToProps = (state) => {
	return {
		characters: state.characters,
		weapons: state.weapons,
		characterFilters: state.characterFilters
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCharacters: () => dispatch(fetchCharacters()),
		fetchWeapons: () => dispatch(fetchWeapons())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

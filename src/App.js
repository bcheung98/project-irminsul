import * as React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { defaultTheme as theme } from "./Theme";
import { fetchCharacters, fetchWeapons, fetchArtifacts, fetchBanners, fetchCards } from "./redux/actions/fetch";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CharacterBrowser from "./components/characters/CharacterBrowser";
import CharacterPage from "./components/characters/page/_CharacterPage";
import WeaponBrowser from "./components/weapons/WeaponBrowser";
import WeaponPage from "./components/weapons/page/_WeaponPage";
import ArtifactBrowser from "./components/artifacts/ArtifactBrowser";
import AscensionPlanner from "./components/planner/_AscensionPlanner";
import BannerArchive from "./components/banners/BannerArchive";
import TCGBrowser from "./components/tcg/TCGBrowser";
import { AppBar, Typography, Box, Fade, useScrollTrigger, Fab, IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GitHubIcon from "@mui/icons-material/GitHub";

function ScrollTop(props) {
	const { children } = props;
	const trigger = useScrollTrigger({ threshold: 600 });
	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(
			"#back-to-top-anchor",
		);
		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
			});
		}
	};

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				sx={{ position: "fixed", bottom: 96, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	);
}

const App = (props) => {

	useEffect(() => {
		if (props.characters.characters.length === 0) {
			fetchCharacters();
		}
		if (props.weapons.weapons.length === 0) {
			fetchWeapons();
		}
		fetchArtifacts();
		fetchBanners();
		fetchCards();
	}, [])

	let { fetchCharacters, fetchWeapons, fetchArtifacts, fetchBanners, fetchCards } = props;

	return (
		<ThemeProvider theme={theme}>
			<Router basename="project-irminsul">
				<Box id="back-to-top-anchor" />
				<Nav />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/characters" component={CharacterBrowser} />
					<Route path="/character/:char_name" children={<CharacterPage />} />
					<Route path="/weapons" component={WeaponBrowser} />
					<Route path="/weapon/:weapon_name" children={<WeaponPage />} />
					<Route path="/artifacts" component={ArtifactBrowser} />
					<Route path="/planner" component={AscensionPlanner} />
					<Route path="/banners/" component={BannerArchive} />
					<Route path="/tcg/" component={TCGBrowser} />
				</Switch>
				<AppBar position="static" sx={{
					mt: 10,
					mb: -5,
					pt: 2,
					textAlign: "center",
					backgroundColor: `${theme.appbar.backgroundColor}`,
					borderTop: `1px solid ${theme.border.color}`,
				}}>
					<Typography sx={{ fontFamily: "Genshin, sans-serif", mb: "5px" }} variant="body2">Project Irminsul is not affiliated with HoYoverse.<br />Genshin Impact, images and data are registered trademarks of HoYoverse.</Typography>
					<Box>
						<IconButton disableRipple href={"https://github.com/bcheung98/project-irminsul"} target="_blank" color="inherit">
							<GitHubIcon />
						</IconButton>
					</Box>
				</AppBar>
				<ScrollTop {...props}>
					<Fab size="medium" disableRipple color="primary">
						<KeyboardArrowUpIcon sx={{ color: `${theme.text.color}` }} />
					</Fab>
				</ScrollTop>
			</Router>
		</ThemeProvider>

	);
}

const mapStateToProps = (state) => {
	return {
		characters: state.characters,
		weapons: state.weapons,
		artifacts: state.artifacts,
		characterBanners: state.characterBanners,
		weaponBanners: state.weaponBanners,
		cards: state.cards,
		deck: state.deck
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCharacters: () => dispatch(fetchCharacters()),
		fetchWeapons: () => dispatch(fetchWeapons()),
		fetchArtifacts: () => dispatch(fetchArtifacts()),
		fetchBanners: () => dispatch(fetchBanners()),
		fetchCards: () => dispatch(fetchCards())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

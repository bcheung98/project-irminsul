import { useEffect } from "react"
import { connect } from "react-redux"
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom"

// Fetch imports
import { fetchCharacters, fetchWeapons, fetchArtifacts, fetchCharacterBanners, fetchWeaponBanners, fetchChronicledWish, fetchCards } from "./redux/actions/fetch"

// Component imports
import Nav from "./components/Nav"
import BottomNav from "./components/BottomNav"
import Home from "./components/Home"
import CharacterBrowser from "./components/characters/CharacterBrowser"
import CharacterPage from "./components/characters/page/_CharacterPage"
import WeaponBrowser from "./components/weapons/WeaponBrowser"
import WeaponPage from "./components/weapons/page/_WeaponPage"
import ArtifactBrowser from "./components/artifacts/ArtifactBrowser"
import AscensionPlanner from "./components/planner/_AscensionPlanner"
import BannerArchive from "./components/banners/BannerArchive"
import TCGBrowser from "./components/tcg/TCGBrowser"

// MUI imports
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Box, CssBaseline } from "@mui/material"

// Helper imports
import ScrollTopFab from "./helpers/ScrollTopFab"

// Type imports
import { AppDispatch, RootState } from "./redux/store"

function App(props: any) {

	let { fetchCharacters, fetchWeapons, fetchArtifacts, fetchCharacterBanners, fetchWeaponBanners, fetchChronicledWish, fetchCards, theme } = props

	useEffect(() => {
		fetchCharacters()
		fetchWeapons()
		fetchArtifacts()
		fetchCharacterBanners()
		fetchWeaponBanners()
		fetchChronicledWish()
		fetchCards()
	}, [])

	return (
		<ThemeProvider theme={createTheme(theme)}>
			<CssBaseline />
			<Router basename={`${process.env.REACT_APP_BASENAME}`}>
				<Box id="back-to-top-anchor" />
				<Box sx={{ display: "flex" }}>
					<Nav />
					<Box sx={{ pt: 10, minHeight: "90vh" }}>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/characters" component={CharacterBrowser} />
							<Route path="/characters/:char_name" children={<CharacterPage />} />
							<Route exact path="/weapons" component={WeaponBrowser} />
							<Route path="/weapons/:weapon_name" children={<WeaponPage />} />
							<Route exact path="/artifacts" component={ArtifactBrowser} />
							<Route exact path="/planner" component={AscensionPlanner} />
							<Route exact path="/banners/" component={BannerArchive} />
							<Route exact path="/tcg/" component={TCGBrowser} />
						</Switch>
					</Box>
				</Box>
				<BottomNav />
				<ScrollTopFab />
			</Router>
		</ThemeProvider>
	)
}

const mapStateToProps = (state: RootState) => ({
	theme: state.theme.theme
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		fetchCharacters: () => dispatch(fetchCharacters()),
		fetchWeapons: () => dispatch(fetchWeapons()),
		fetchArtifacts: () => dispatch(fetchArtifacts()),
		fetchCharacterBanners: () => dispatch(fetchCharacterBanners()),
		fetchWeaponBanners: () => dispatch(fetchWeaponBanners()),
		fetchChronicledWish: () => dispatch(fetchChronicledWish()),
		fetchCards: () => dispatch(fetchCards())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
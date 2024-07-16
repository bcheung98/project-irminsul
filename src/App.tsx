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
import Home from "./components/Home"
import Nav from "./components/Nav"
import CharacterBrowser from "./components/characters/CharacterBrowser"
import CharacterPage from "./components/characters/page/_CharacterPage"
import WeaponBrowser from "./components/weapons/WeaponBrowser"
import WeaponPage from "./components/weapons/page/_WeaponPage"
import ArtifactBrowser from "./components/artifacts/ArtifactBrowser"
import AscensionPlanner from "./components/planner/_AscensionPlanner"
import BannerArchive from "./components/banners/BannerArchive"
import TCGBrowser from "./components/tcg/TCGBrowser"

// MUI imports
import { defaultTheme as theme } from "./Theme"
import { ThemeProvider } from "@mui/material/styles"
import { AppBar, Typography, Box, Fade, useScrollTrigger, Fab, IconButton } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import GitHubIcon from "@mui/icons-material/GitHub"

// Type imports
import { AppDispatch } from "./redux/store"

const App = (props: any) => {

	useEffect(() => {
		fetchCharacters()
		fetchWeapons()
		fetchArtifacts()
		fetchCharacterBanners()
		fetchWeaponBanners()
		fetchChronicledWish()
		fetchCards()
	}, [])

	let { fetchCharacters, fetchWeapons, fetchArtifacts, fetchCharacterBanners, fetchWeaponBanners, fetchChronicledWish, fetchCards } = props

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

	)
}

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

export default connect(null, mapDispatchToProps)(App)

interface ScrollTopProps {
	children: React.ReactNode
}

const ScrollTop: React.FC<ScrollTopProps> = (props) => {
	const { children } = props
	const trigger = useScrollTrigger({ threshold: 600 })

	const handleClick = (event: React.BaseSyntheticEvent) => {
		const anchor = (event.target.ownerDocument || document).querySelector("#back-to-top-anchor")
		if (anchor) {
			anchor.scrollIntoView({
				block: "center",
			})
		}
	}

	return (
		<Fade in={trigger}>
			<Box
				onClick={handleClick}
				sx={{ position: "fixed", bottom: 96, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	)
}
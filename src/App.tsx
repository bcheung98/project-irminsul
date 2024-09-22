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
import theme from "./themes/theme"
import { ThemeProvider } from "@mui/material/styles"
import { Box, Fade, useScrollTrigger, Fab } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

// Type imports
import { AppDispatch } from "./redux/store"

function App(props: any) {

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
				<ScrollTop {...props}>
                    <Fab
                        size="medium"
                        disableRipple
                        sx={{
                            backgroundColor: `${theme.button.selected}`,
                            "&:hover": {
                                backgroundColor: `${theme.button.hover}`
                            }
                        }}
                    >
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
				sx={{ position: "fixed", bottom: 128, right: 16 }}
			>
				{children}
			</Box>
		</Fade>
	)
}
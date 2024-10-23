import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"

// MUI imports
import { useTheme, Box, Typography, AppBar, LinearProgress } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import { isTBA } from "../../helpers/isTBA"

// Type imports
import { RootState } from "../../redux/store"
import { BannerData } from "../../types/banner/BannerData"
import Countdown from "../_custom/Countdown"

function CurrentBanners(props: any) {

    const theme = useTheme()

    let { characterBanners, weaponBanners, chronicledWish } = props.banners

    const currentCharacterBanners = characterBanners.filter((banner: BannerData) => isCurrentBanner(createDateObject(banner.start).obj, createDateObject(banner.end).obj))
    const currentWeaponBanners = weaponBanners.filter((banner: BannerData) => isCurrentBanner(createDateObject(banner.start).obj, createDateObject(banner.end).obj))
    const currentChronicledWish = chronicledWish.filter((banner: BannerData) => isCurrentBanner(createDateObject(banner.start).obj, createDateObject(banner.end).obj))

    const activeBanners = currentCharacterBanners.concat(currentWeaponBanners, currentChronicledWish).length > 0
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        if (!activeBanners) {
            const timer = setTimeout(() => {
                setLoading(false)
                clearTimeout(timer)
            }, 5000)
        }
        else {
            setLoading(false)
        }
    }, [activeBanners, setLoading])

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                color: `${theme.text.color}`,
                mb: "20px"
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                    height: "70px"
                }}
            >
                <Typography noWrap sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px", ml: "5px", lineHeight: "45px" }}>
                    Current Banners
                </Typography>
            </AppBar>
            <Box sx={{ p: 2 }}>
                {
                    activeBanners ?
                        <React.Fragment>
                            <Grid container rowSpacing={1} columnSpacing={3}>
                                {
                                    currentCharacterBanners.length > 0 &&
                                    <Grid size={{ xs: 12, lg: "auto" }}>
                                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px", mb: "10px" }}>
                                            Character Event Wish
                                        </Typography>
                                        <Grid container spacing={0.75}>
                                            {currentCharacterBanners[0].fiveStars.map((item: string, index: number) => <CustomCard key={index} type="character" name={item} rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                                            {currentCharacterBanners[0].fourStars.map((item: string, index: number) => <CustomCard key={index} type="character" name={item} rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                                        </Grid>
                                        <Countdown date={createDateObject(currentCharacterBanners[0].end)} />
                                    </Grid>
                                }
                                {
                                    currentWeaponBanners.length > 0 &&
                                    <Grid size={{ xs: 12, lg: "grow" }}>
                                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px", mb: "10px" }}>
                                            Weapon Event Wish
                                        </Typography>
                                        <Grid container spacing={0.75}>
                                            {currentWeaponBanners[0].fiveStars.map((item: string, index: number) => <CustomCard key={index} type="weapon" name={item} rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                                            {currentWeaponBanners[0].fourStars.map((item: string, index: number) => <CustomCard key={index} type="weapon" name={item} rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                                        </Grid>
                                        <Countdown date={createDateObject(currentWeaponBanners[0].end)} />
                                    </Grid>
                                }
                            </Grid>
                            {
                                currentChronicledWish.length > 0 &&
                                <Box>
                                    <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "25px 0px 15px 0px" }} />
                                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px", mb: "10px" }}>
                                        Chronicled Wish
                                    </Typography>
                                    <Grid container spacing={0.75}>
                                        {currentChronicledWish[0].characters.fiveStars.map((item: string, index: number) => <CustomCard key={index} type="character" name={item} rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                                        {currentChronicledWish[0].characters.fourStars.map((item: string, index: number) => <CustomCard key={index} type="character" name={item} rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                                    </Grid>
                                    <br />
                                    <Grid container spacing={0.75}>
                                        {currentChronicledWish[0].weapons.fiveStars.map((item: string, index: number) => <CustomCard key={index} type="weapon" name={item} rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                                        {currentChronicledWish[0].weapons.fourStars.map((item: string, index: number) => <CustomCard key={index} type="weapon" name={item} rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                                    </Grid>
                                    <Countdown date={createDateObject(currentChronicledWish[0].end)} />
                                </Box>
                            }
                        </React.Fragment>
                        :
                        <Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                    sx={{
                                        display: loading ? "block" : "none",
                                        width: "100%",
                                        color: theme.button.selected
                                    }}
                                >
                                    <LinearProgress color="inherit" />
                                </Box>
                                <Typography
                                    sx={{
                                        display: !loading && !activeBanners ? "block" : "none",
                                        fontFamily: theme.font.genshin.family,
                                        fontSize: "18px",
                                    }}
                                >
                                    There are no active banners.
                                </Typography>
                            </Box>
                            <img
                                src={`${process.env.REACT_APP_URL}/emotes/error5.png`}
                                alt="No banners"
                                style={{
                                    display: !loading && !activeBanners ? "block" : "none",
                                    height: "128px",
                                    marginTop: "20px",
                                }}
                            />
                        </Box>
                }
            </Box>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    banners: state.banners
})

export default connect(mapStateToProps)(CurrentBanners)
import * as React from "react"
import { connect } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Dialog, AppBar, Button } from "@mui/material"

// Helper imports
import { Keywords } from "./TCGKeywords"

// Type imports
import { RootState } from "../../redux/store"
import { TCGKeywordsData } from "../../types/tcg/TCGKeywordsData"

function TCGKeywordPopup(props: any) {

    const theme = useTheme()

    let { name, type, image, cost, description, keywords } = props

    const [open, setOpen] = React.useState(false)
    const [tag, setTag] = React.useState("")
    const handleClickOpen = (event: React.BaseSyntheticEvent) => {
        setTag(event.target.className.split("-")[1])
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // The following code block transforms certain keywords into underlined elements
    // When clicked on, these elements will open up a dialog box showing info about the corresponding keyword
    const options: HTMLReactParserOptions = {
        replace: domNode => {
            const typedDomNode = domNode as Element
            if (!typedDomNode.attribs) {
                return
            }
            if (typedDomNode.attribs.class !== undefined && typedDomNode.attribs.class.split("-")[0].startsWith("tooltip")) {
                let dataTag = typedDomNode.attribs.class.split("-")[1]
                return React.createElement(
                    "u",
                    {
                        className: `${typedDomNode.attribs.class.split("-")[0]}-${dataTag}`,
                        style: { cursor: "pointer" },
                        onClick: (event: React.BaseSyntheticEvent) => { handleClickOpen(event) }
                    },
                    domToReact(typedDomNode.children, options)
                )
            }
        }
    }

    let keywordName
    let keywordImage
    let keywordType
    let keywordDescription
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordImage = Keywords[tag].image
        keywordType = Keywords[tag].type
        keywordDescription = Keywords[tag].description
    }
    else if (tag !== "") {
        let currentKeyword = keywords.find((kw: TCGKeywordsData) => kw.tag === tag)
        try {
            keywordName = currentKeyword.name
            keywordImage = currentKeyword.image
            keywordType = currentKeyword.type
            keywordDescription = currentKeyword.description
        }
        catch {
            keywordName = ""
            keywordImage = null
            keywordType = ""
            keywordDescription = ""
        }
    }

    return (
        <Box
            sx={{
                width: { xs: "100%", sm: "35vw" },
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Box sx={{ p: "10px" }}>
                <Box sx={{ mb: "10px" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {
                            image &&
                            <Box sx={{ mr: "10px", height: "32px" }}>{image}</Box>
                        }
                        {
                            cost &&
                            <Box sx={{ mr: "5px" }}>
                                <TCGDiceCost cost={cost} />
                            </Box>
                        }
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: { xs: "16px", sm: "20px" }, fontWeight: `${theme.font.genshin.weight}`, color: `${theme.text.color}` }}>
                            {name}
                        </Typography>
                    </Box>
                    {
                        type &&
                        <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontWeight: `${theme.font.genshin.weight}`, fontSize: { xs: "14px", sm: "16px" }, color: "#ffe7b9", mt: "5px" }}>
                            {type}
                        </Typography>
                    }
                </Box>
                <hr style={{ border: `.5px solid ${theme.border.color}` }} />
                <Typography component="span" sx={{ fontSize: { xs: "14px", sm: "16px" }, color: `${theme.text.colorAlt}`, mb: "5px" }}>
                    {
                        typeof (description) === "object" ?
                            description
                            :
                            parse(description, options)
                    }
                </Typography>
            </Box>
            <AppBar position="sticky"
                sx={{
                    display: { xs: "block", sm: "none" },
                    top: "auto",
                    bottom: 0,
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    px: 2,
                    py: 1,
                }}
            >
                <Button variant="contained" sx={{ height: "18px", p: 0, backgroundColor: "#d32f2f" }} onClick={props.handleClose}>
                    <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "11px" }}>Close</Typography>
                </Button>
            </AppBar>
            {
                keywordName && keywordDescription &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={false}
                >
                    <TCGKeywordPopup keywords={props.keywords} name={keywordName} image={keywordImage} type={keywordType} description={keywordDescription} handleClose={handleClose} />
                </Dialog>
            }
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    keywords: state.cards.cards[2]
})

export default connect(mapStateToProps)(TCGKeywordPopup)
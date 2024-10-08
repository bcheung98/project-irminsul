import * as React from "react"
import { connect } from "react-redux"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import TCGDiceCost from "./TCGDiceCost"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Dialog } from "@mui/material"

// Helper imports
import { Keywords } from "./TCGKeywords"

// Type imports
import { RootState } from "../../redux/store"
import { TCGKeywordsData } from "../../types/tcg/TCGKeywordsData"

function TCGKeywordPopup(props: any) {

    const theme = useTheme()

    let { name, type, cost, description, keywords } = props

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
    let keywordDescription
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordDescription = Keywords[tag].description
    }
    else if (tag !== "") {
        let currentKeyword = keywords.find((kw: TCGKeywordsData) => kw.tag === tag)
        keywordName = currentKeyword.name
        keywordDescription = currentKeyword.description
    }

    return (
        <Box
            sx={{
                width: "25vw",
                p: "15px",
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `2px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <Box sx={{ display: "flex" }}>
                {cost &&
                    <Box sx={{ mr: "5px" }}>
                        <TCGDiceCost cost={cost} type={"keyword-popup"} />
                    </Box>
                }
                <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                    {name}
                </Typography>
            </Box>
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "5px", marginBottom: "10px" }} />
            {
                type &&
                <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, fontWeight: `${theme.font.genshin.weight}`, color: "#ffe7b9", mb: "5px" }}>
                    {type}
                </Typography>
            }
            <Typography variant="body1" component="span" sx={{ color: `${theme.text.colorAlt}`, mb: "5px" }}>
                {
                    typeof (description) === "object" ?
                        description
                        :
                        parse(description, options)
                }
            </Typography>
            {
                keywordName && keywordDescription &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={false}
                >
                    <TCGKeywordPopup keywords={props.keywords} name={keywordName} description={keywordDescription} />
                </Dialog>
            }
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    keywords: state.cards.cards[2]
})

export default connect(mapStateToProps)(TCGKeywordPopup)
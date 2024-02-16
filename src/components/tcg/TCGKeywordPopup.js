import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Box } from "@mui/system";
import { Typography, Dialog } from "@mui/material";
import { Keywords } from "./TCGKeywords";

const TCGKeywordPopup = (props) => {

    const theme = useTheme();

    let { name, type, description } = props;

    const [open, setOpen] = React.useState(false);
    const [tag, setTag] = React.useState("");
    const handleClickOpen = (e) => {
        setTag(e.target.className.split("-")[1]);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // The following code block transforms certain keywords into underlined elements
    // When clicked on, these elements will open up a dialog box showing info about the corresponding keyword
    const { domToReact } = parse;
    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }
            if (attribs.class !== undefined && attribs.class.split("-")[0].startsWith("tooltip")) {
                let dataTag = attribs.class.split("-")[1]
                return React.createElement(
                    "u",
                    {
                        className: `${attribs.class.split("-")[0]}-${dataTag}`,
                        style: { cursor: "pointer" },
                        onClick: (e) => { handleClickOpen(e) }
                    },
                    domToReact(children, options)
                )
            }
        }
    }

    let keywordName;
    let keywordDescription;
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name;
        keywordDescription = Keywords[tag].description;
    }
    else if (tag !== "") {
        let currentKeyword = props.keywords.find(kw => kw.tag === tag);
        keywordName = currentKeyword.name;
        keywordDescription = currentKeyword.description;
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
            <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: "white" }}>
                {name}
            </Typography>
            <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "5px", marginBottom: "10px" }} />
            {
                type &&
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: "#ffe7b9", mb: "5px" }}>
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

export default TCGKeywordPopup;
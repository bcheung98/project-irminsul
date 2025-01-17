import { useParams } from "react-router";

// Component imports
import ArtifactInfo from "./ArtifactInfo";
import BetaTag from "custom/BetaTag";
import PageNotFound from "components/PageNotFound";

// MUI imports
import { Stack } from "@mui/material";

// Helper imports
import { useAppSelector } from "helpers/hooks";
import { selectArtifacts } from "reducers/artifact";

function ArtifactPage() {
    const params = useParams<{ name: string }>();
    const artifact = useAppSelector(selectArtifacts).find(
        (a) => a.name.split(" ").join("_").toLowerCase() === params.name
    );

    if (artifact) {
        const documentTitle = `${artifact.displayName} ${
            import.meta.env.VITE_DOCUMENT_TITLE
        }`;
        const documentDesc = `2-Pieces: ${artifact.setEffect.twoPiece}\n4-Pieces: ${artifact.setEffect.fourPiece}`;
        document.title = documentTitle;
        document
            .querySelector('meta[property="og:title"]')
            ?.setAttribute("content", documentTitle);
        document
            .querySelector('meta[property="description"]')
            ?.setAttribute("content", documentDesc);
        document
            .querySelector('meta[property="og:description"]')
            ?.setAttribute("content", documentDesc);

        return (
            <Stack spacing={2}>
                <BetaTag version={artifact.release.version} />
                <ArtifactInfo artifact={artifact} />
            </Stack>
        );
    } else {
        return <PageNotFound />;
    }
}

export default ArtifactPage;

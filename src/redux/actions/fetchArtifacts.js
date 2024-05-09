export const fetchArtifacts = () => {
    // https://bcheung98.github.io/project-irminsul-db/artifacts.json
    const url = "https://bcheung98.github.io/project-irminsul-db/artifacts.json";
    return (dispatch) => {
        dispatch({ type: "START_GETTING_ARTIFACTS_REQUEST" });
        fetch(url)
            .then(res => res.json())
            .then(artifacts => dispatch({ type: "GET_ARTIFACTS", artifacts }))
            .catch((error) => {
                console.error(error);
            });
    }
}
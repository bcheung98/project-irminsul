import { Avatar } from "@mui/material"

interface IconProps {
    size?: string
}

export const Pyro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Pyro.png`} alt="Pyro" sx={{ width: size, height: size }} />
export const Hydro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Hydro.png`} alt="Hydro" sx={{ width: size, height: size }} />
export const Electro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Electro.png`} alt="Electro" sx={{ width: size, height: size }} />
export const Cryo = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Cryo.png`} alt="Cryo" sx={{ width: size, height: size }} />
export const Anemo = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Anemo.png`} alt="Anemo" sx={{ width: size, height: size }} />
export const Geo = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Geo.png`} alt="Geo" sx={{ width: size, height: size }} />
export const Dendro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/elements/Dendro.png`} alt="Dendro" sx={{ width: size, height: size }} />

export const TCGPhysical = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Physical.png`} alt="Physical" sx={{ width: size, height: size }} />
export const TCGPyro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Pyro.png`} alt="Pyro" sx={{ width: size, height: size }} />
export const TCGHydro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Hydro.png`} alt="Hydro" sx={{ width: size, height: size }} />
export const TCGElectro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Electro.png`} alt="Electro" sx={{ width: size, height: size }} />
export const TCGCryo = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Cryo.png`} alt="Cryo" sx={{ width: size, height: size }} />
export const TCGAnemo = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Anemo.png`} alt="Anemo" sx={{ width: size, height: size }} />
export const TCGGeo = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Geo.png`} alt="Geo" sx={{ width: size, height: size }} />
export const TCGDendro = ({ size = "32px" }: IconProps) => <Avatar src={`${process.env.REACT_APP_URL}/tcg/icons/elements/Dendro.png`} alt="Dendro" sx={{ width: size, height: size }} />
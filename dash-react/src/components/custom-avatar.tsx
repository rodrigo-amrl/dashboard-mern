import { Avatar } from "antd"
import { getNameInitials } from "../utilities"
type Props = {
    name?: string
}
const CustomAvatar = ({ name, style, ...rest }: Props) => {
    return (

        <Avatar alt="React" size="small"
            style={{ backgroundColor: "#87d068", display: "flex", alignItems: "center", border: "none", ...style }}
            {...rest}
        >
            {getNameInitials(name || '')}
        </Avatar>
    )
}

export default CustomAvatar
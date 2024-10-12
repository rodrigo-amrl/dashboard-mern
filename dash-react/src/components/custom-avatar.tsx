import { Avatar } from "antd"
type Props = {
    name: string
}
const CustomAvatar = ({ name, style, ...rest }: Props) => {
    return (

        <Avatar alt="React" size="small"
            style={{ backgroundColor: "#87d068", display: "flex", alignItems: "center", border: "none" }}>
            {name}
        </Avatar>
    )
}

export default CustomAvatar
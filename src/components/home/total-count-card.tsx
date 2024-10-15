import { Card } from "antd"

type Props = {
    resource: "companies" | "contacts" | "deals",
    isLoading: boolean,
    totalCount: number
}
const DashboardTotalCountCard = ({ resource, isLoading, totalCount }: Props) => {

    return (
        <Card style={{ height: "96px", padding: 0 }}
            bodyStyle={{ padding: "8px 8px 8px 12px" }}
            size="small">

        </Card>
    )
}

export default DashboardTotalCountCard
import { DollarOutlined } from "@ant-design/icons"
import { Card } from "antd"
import { Text } from "../text"
import { Area, AreaConfig } from "@ant-design/plots"
import { useList } from "@refinedev/core"
import { DASHBOARD_DEALS_CHART_QUERY } from "../../graphql/queries"
import React from "react"
const DealsChart = () => {
    const { data } = useList({
        resource: 'dealsStages',
        meta: {
            gqlQuery: DASHBOARD_DEALS_CHART_QUERY
        }
    })
    const dealData = React.useMemo(() => {
        // return mapDealsData(data?.data);
        return data?.data
    }, [data?.data])
    const config: AreaConfig = {
        data: dealData,
        xField: "timeText",
        yField: "value",
        stack: false,
        seriesField: 'state',
        animation: true,
        startOnZero: false,
        smooth: true,
        legend: {
            offsetY: -6
        },
        yAxis: {
            tickCount: 4,
            label: {
                formatter: (v: string) => {
                    return `$${Number(v) / 1000}k`
                }
            }
        },
        tooltip: {
            formatter: (data) => {
                return {
                    name: data.state,
                    value: `$${Number(data.value) / 1000}k`
                }
            }
        }
    }
    return (

        <Card style={{ height: "100%" }} title={
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <DollarOutlined />
                <Text size="sm" style={{ marginLeft: "0.5rem" }}>Deals</Text>
            </div>
        }>

            <Area {...config} height={325} />
        </Card>
    )
}

export default DealsChart
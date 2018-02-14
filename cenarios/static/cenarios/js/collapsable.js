var chart_config = {
    chart: {
        container: "#collapsable-example",
        rootOrientation: "WEST",
        node: {
            collapsable: true
        },
        connectors: {
            type: "straight",
            style: {
                "stroke": '#bbb',
                "stroke-width": 2
            }
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    nodeStructure: {
        text: { name: "Fev" },
        collapsed: true,
        children: [
            {
                text: { name: "Mar" },
                collapsed: true,
                children: [
                    {
                        text: { name: "Abr" }
                    },
                    {
                        text: { name: "Abr" }
                    },
                    {
                        text: { name: "Abr" }
                    }
                ]
            },
            {
                text: { name: "Mar" },
                collapsed: true,
                children: [
                    {
                        text: { name: "Abr" }
                    },
                    {
                        text: { name: "Abr" }
                    },
                    {
                        text: { name: "Abr" }
                    }
                ]
            },
            {
                text: { name: "Mar" },
                collapsed: true,
                children: [
                    {
                        text: { name: "Abr" },
                        collapsed: true,
                        children: [
                            {
                                text: { name: "Abr" }
                            },
                            {
                                text: { name: "Abr" }
                            },
                            {
                                text: { name: "Abr" }
                            }
                        ]
                    },
                    {
                        text: { name: "Abr" }
                    },
                    {
                        text: { name: "Abr" }
                    }
                ]
            }
        ]
    }
};
export class PortalMenuConfig {
    public config: any = {};

    constructor() {
        this.config = {
            services: [
                {
                    name: 'Farm Management',
                    items: [
                        {
                            name: 'Agri Analyzer',
                            page: '/dashboard/portal'
                        },
                        {
                            name: 'Farm Watch',
                            page: '/dashboard/portal'
                        }
                    ]
                },
                {
                    name: 'Crop Management',
                    items: [
                        {
                            name: 'Crop Gazer',
                            page: '/dashboard/classic'
                        },
                        {
                            name: 'Yield Analyzer',
                            page: '/dashboard/classic'
                        }
                    ]
                },
                {
                    name: 'Internet Of Things',
                    items: [
                        {
                            name: 'Device Central',
                            page: '/dashboard/analytical'
                        },
                        {
                            name: 'Device Monitor',
                            page: '/dashboard/analytical'
                        }
                    ]
                },
                {
                    name: 'Water Management',
                    items: [
                        {
                            name: 'AmanziJo',
                            page: '/dashboard/analytical'
                        },
                        {
                            name: 'Irrigation Monitor',
                            page: '/dashboard/analytical'
                        }
                    ]
                },
                {
                    name: 'Agricode Cost Management',
                    items: [
                        {
                            name: 'Cost Explorer',
                            page: '/dashboard/sale'
                        },
                        {
                            name: 'Agricode Budgets',
                            page: '/cost/bugets'
                        }
                    ]
                }
            ]
        }
    }
}
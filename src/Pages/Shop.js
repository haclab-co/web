import React from 'react'
import Page from '../Components/Page'

const Shop = () => {

    const packages = [
        {
            name: 'Static Website',
            price: '550000',
            features: [
                '10 Pages',
                'Attractive fully responsive design',
                'A Feedback form',
                'Search Optimisation(SEO) Basic',
                'Facebook, Twitter Integration',
                '1 Free.com, .org, .net domain',
                '1 Year Free of Starter Web Hosting',
                '10 Free Email Accounts',
                'Free SSL',
                'Free Chanel account',
            ]
        },
        {
            name: 'Dynamic Website',
            price: '850000',
            features: [
                'Pin on Google maps',
                'Unlinited Pages',
                'Attractive fully responsive design',
                'A Feedback form',
                'Basic Search Optimisation(SEO)',
                'Facebook, Twitter Integration',
                '1 Free.com, .org, .net domain',
                '1 Year Free of Starter Web Hosting',
                'Unlinited Free Email Accounts',
                'Free SSL',
                'Free Chanel account',
            ]
        },
        {
            name: 'E-Commerce Website',
            price: '1500000',
            features: [
                'Pin on Google maps',
                'Free CMS',
                'E-Commerce Intergration',
                'Email Marteting',
                'Invoicing & Billing',
                'Online Payment Processing',
                'Unlinited Pages',
                'Attractive fully responsive design',
                'A Feedback form',
                'Basic Search Optimisation(SEO)',
                'Facebook, Twitter Integration',
                '1 Free.com, .org, .net domain',
                '1 Year Free of Starter Web Hosting',
                'Unlinited Free Email Accounts',
                'Free SSL',
                'Free Chanel account',
            ]
        },
    ]

    console.log(packages);

    return (
        <Page>
            <div className="shop">
                <div className="products">
                    Shop
                </div>
            </div>
        </Page>
    )
}

export default Shop

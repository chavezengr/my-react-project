import React, { ReactNode } from "react";
import { Clinics } from "../views/pages/Medoc/Consultations";
import { PublicWall } from "../views/pages/Medoc/Home";
import { Medicines, TransactionHistories, Pharmacies, PharmaciesNearLocation, SideMenu } from "../views/pages/Medoc/Products"

interface INavRoutes {
    path: string;
    element?: any
}

interface ISideBarRoutes {
    path: string;
    element?: any;
    name?: string;
}

const navRoutes: INavRoutes[] = [
    {
        path: "/",
        element: PublicWall,
    },
    // {
    //     path: "/user-wall",
    //     element: UserWall,
    // },
    {
        path: "/clinics",
        element: Clinics,
    },
    {
        path: "/products",
        element: SideMenu,
    },
];

const productRoutes: ISideBarRoutes[] = [
    {
        path: "/products/medicines",
        element: Medicines,
        name: "Medicines"
    },
    {
        path: "/products/transaction-histories",
        element: TransactionHistories,
        name: "Purchase history"
    },
    {
        path: "/products/pharmacies",
        element: Pharmacies,
        name: "Pharmacies"
    },
    {
        path: "/products/pharmacies-near-location",
        element: PharmaciesNearLocation,
        name: "Pharmacies near you"
    },
]

export default { navRoutes, productRoutes }
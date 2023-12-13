import React from "react";

const publicRoutes = [
    {
        path: "/",
        component: React.lazy(() => import("../pages/home/home")),
    },
    {
        path: "/balance",
        component: React.lazy(() => import("../pages/my-account/my-account-balance")),
        flag: "agent.display.balance",
    },
    {
        path: "/otp",
        component: React.lazy(() => import("../pages/my-account/my-account-otp")),
        flag: "agent.display.otp",
    },
    {
        path: "/withdrawal",
        component: React.lazy(() => import("../pages/my-account/my-account-withdrawal")),
        flag: "agent.display.withdrawal",
    },
    {
        path: "*",
        component: React.lazy(() => import("../pages/no-permission/no-permission")),
    },
];

const privateRoutes = [
    {
        path: "/create-downline",
        component: React.lazy(
            () =>
                import(
                    "../pages/agency-management/create-edit-downline/create-edit-downline"
                )
        ),
        flag: "agent.display.create.downline",
    },
    {
        path: "/downline-listing",
        component: React.lazy(
            () => import("../pages/agency-management/downline-listing/downline-listing")
        ),
        flag: "agent.display.downline.listing",
    },
    {
        path: "/credit-balance",
        component: React.lazy(
            () => import("../pages/agency-management/credit-balance/credit-balance")
        ),
        flag: "agent.display.credit.balance",
    },
];

export { publicRoutes, privateRoutes };

import React, { useEffect } from "react";
import { privateRoutes, publicRoutes } from "../app/routes/routes";
import { TRoute } from "../app/routes/types";
import { flagFeature, subUserPermission } from "../data";

function useBuildRoutesData() {
    const [routesData, setRoutesData] = React.useState<TRoute[]>([]);

    useEffect(() => {
        setRoutesData(data());
    }, []);
    // $10 to VND = 230000
    function data() {
        const tmpData: TRoute[] = [];
        [...publicRoutes, ...privateRoutes].map((route) => {
            const { flag, component, path } = route;
            const isHasPermission = subUserPermission[path] ?? false;
            tmpData.push({
                flag: flagFeature[flag!] ?? true,
                path,
                component,
                permission: isHasPermission,
            });
        });
        return tmpData;
    }
    return routesData;
}
export default useBuildRoutesData;

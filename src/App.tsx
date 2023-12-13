import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoPermission from "./app/pages/no-permission/no-permission";
import "./App.css";
import useBuildRoutesData from "./hooks/useBuildRoutesData";
import HeaderLayout from "./app/layout/header";
import { Suspense } from "react";
import SpinLoading from "./app/layout/spin";
import Default from "./app/pages/default";

function App() {
    const routesData = useBuildRoutesData();

    return (
        <BrowserRouter>
            <HeaderLayout />
            <div className="routes">
                <Suspense fallback={<SpinLoading />}>
                    <Routes>
                        {routesData.map((route, index) => {
                            const { flag, component, path, permission } = route;
                            const Page = permission && flag ? component : NoPermission;
                            const routesPath = permission && flag ? path : "*";
                            return (
                                <Route
                                    key={index}
                                    path={routesPath}
                                    element={<Default children={<Page />} />}
                                />
                            );
                        })}
                    </Routes>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;

import { Routes, Route, BrowserRouter, useHistory, useNavigate } from "react-router-dom";
import NoPermission from "./app/pages/no-permission/no-permission";
import "./App.css";
import useBuildRoutesData from "./hooks/useBuildRoutesData";
import HeaderLayout from "./app/layout/header";
import { Suspense } from "react";
import SpinLoading from "./app/layout/spin";
import Default from "./app/pages/default";

function App() {
    const routesData = useBuildRoutesData();
    const history = useNavigate();
    console.log("🚀 ~ file: App.tsx:13 ~ App ~ history:", history)
    
    return (
            <>
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
            </>
    );
}

export default App;

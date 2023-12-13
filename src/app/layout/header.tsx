import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { Link } from "react-router-dom";

function HeaderLayout() {
    const path = window.location.pathname;
    const items = [
        {
            key: "/",
            label: <Link to="/">Home</Link>,
        },
        {
            key: "/balance",
            label: <Link to="/balance">Balance</Link>,
        },
        {
            key: "/otp",
            label: <Link to="/otp">OTP</Link>,
        },
        {
            key: "/withdrawal",
            label: <Link to="/withdrawal">Withdrawal</Link>,
        },
        {
            key: "/create-downline",
            label: <Link to="/create-downline">Create Downline</Link>,
        },
        {
            key: "/downline-listing",
            label: <Link to="/downline-listing">Downline Listing</Link>,
        },
        {
            key: "/credit-balance",
            label: <Link to="/credit-balance">Credit Balance</Link>,
        },
    ];
    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#242424",
                marginBottom: "20px",
                padding: 0,
                height: "40px",
            }}
        >
            <Menu
                style={{
                    backgroundColor: "#242424",
                    height: "40px",
                    lineHeight: "40px",
                }}
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[path]}
                items={items}
            />
        </Header>
    );
}
export default HeaderLayout;

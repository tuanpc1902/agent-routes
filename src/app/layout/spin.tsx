import { Alert, Spin } from "antd";

function SpinLoading(){
    return (
        <Spin tip="Loading...">
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
        </Spin>
    );
}
export default SpinLoading;
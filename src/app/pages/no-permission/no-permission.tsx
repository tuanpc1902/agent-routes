import { WarningOutlined } from "@ant-design/icons";
import { Space } from "antd";

function NoPermission() {
    return (
        <div className="no-permission">
            <Space size="large">
                <WarningOutlined width={64} height={64} />
                You <code>don't have permission</code> to access this resource.
            </Space>
        </div>
    );
}
export default NoPermission;

import { TFlagFeature, TSubUserPermission } from "./app/routes/types";

// true/false is for testing purpose only
// it should be based on sub-user's permission
const subUserPermission: TSubUserPermission = {
    "/": false,
    "/balance": true,
    "/otp": true,
    "/withdrawal": true,
    "/create-downline": true,
    "/downline-listing": true,
    "/credit-balance": true,
};

// true/false is for testing purpose only
// it should be based on system's feature flag
const flagFeature: TFlagFeature = {
    "agent.display.balance": true,
    "agent.display.otp": true,
    "agent.display.withdrawal": true,
    "agent.display.create.downline": true,
    "agent.display.downline.listing": true,
    "agent.display.credit.balance": false,
};

export { subUserPermission, flagFeature };

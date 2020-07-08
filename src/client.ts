// const algosdk = require("algosdk");

import * as algosdk from "algosdk";

export function genAccount(): string {
    const a = algosdk.generateAccount();
    return a.addr;
}

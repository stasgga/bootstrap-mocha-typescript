// require works, but it disables type checks.
// const algosdk = require("algosdk");

// adding this is a workaround: @ts-ignore-line
import * as algosdk from "algosdk";

export function genAccount(): string {
    const a = algosdk.generateAccount();
    return a.addr;
}

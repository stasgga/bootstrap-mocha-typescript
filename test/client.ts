import { genAccount } from "../src/client";

describe("package-info", () => {
    it("Should give the right package.json", () => {
        const s = genAccount();
        console.log("generated account:", s);
        if (s.length == 0) {
            throw Error("wrong account");
        }
    });
});

import { generateCodeVerifier } from "../src"
import { getCodeChallenge } from "../src/client/authorization-code"
import { expect } from "chai"

describe("generateCodeVerifier", () => {
  it("should generate a 32byte base4url string", async () => {
    const out = await generateCodeVerifier()
    //console.debug(out, out.length);
    expect(out).to.match(/^[A-Za-z0-9-_]{43}$/)
  })
})

describe("getCodeChallenge", () => {
  it("should generate the matching code challenge for a given code verifier", async () => {
    const codeVerifier = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
    const codeChallenge = "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"

    expect(await getCodeChallenge(codeVerifier)).to.eql(["S256", codeChallenge])
  })
})

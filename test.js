import {readFileSync} from "node:fs";

test("diff", () => {
  const a = JSON.parse(readFileSync(new URL("a.json", import.meta.url), "utf8"));
  const b = JSON.parse(readFileSync(new URL("b.json", import.meta.url), "utf8"));
  expect(a).toEqual(b);
});

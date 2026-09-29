import test from "node:test"
import assert from "node:assert/strict"
import { classifyCoverage, statusFor } from "./coverage.mjs"

test("a price wins when another row has only a transaction count", () => {
  const cells = classifyCoverage([
    { area: "North", year: 2025, month: 4, transactions: 3 },
    { area: "North", year: 2025, month: 4, medianPrice: 2400 },
  ])

  assert.equal(statusFor(cells, "North", 2025, 4), "priced")
})

test("a count without a price stays distinct from missing data", () => {
  const cells = classifyCoverage([
    { area: "South", year: 2025, month: 4, transactions: 2 },
    { area: "South", year: 2025, month: 5, transactions: 0 },
  ])

  assert.equal(statusFor(cells, "South", 2025, 4), "count-only")
  assert.equal(statusFor(cells, "South", 2025, 5), "missing")
  assert.equal(statusFor(cells, "South", 2025, 6), "missing")
})

test("invalid months do not enter the map", () => {
  assert.throws(
    () => classifyCoverage([{ area: "North", year: 2025, month: 13 }]),
    RangeError,
  )
})

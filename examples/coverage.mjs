/**
 * Classify the data available for each area and month.
 * A price takes precedence over a transaction count when rows overlap.
 */
export function classifyCoverage(rows) {
  const cells = new Map()

  for (const row of rows) {
    if (!row.area || !Number.isInteger(row.year) || !Number.isInteger(row.month)) {
      throw new TypeError("Each row needs an area, year, and month")
    }
    if (row.month < 1 || row.month > 12) {
      throw new RangeError("Month must be between 1 and 12")
    }

    const key = `${row.area}:${row.year}:${row.month}`
    const previous = cells.get(key) ?? "missing"
    const hasPrice = row.averagePrice != null || row.medianPrice != null
    const hasTransactions = (row.transactions ?? 0) > 0

    if (hasPrice) {
      cells.set(key, "priced")
    } else if (hasTransactions && previous !== "priced") {
      cells.set(key, "count-only")
    } else if (!cells.has(key)) {
      cells.set(key, "missing")
    }
  }

  return cells
}

export function statusFor(cells, area, year, month) {
  return cells.get(`${area}:${year}:${month}`) ?? "missing"
}

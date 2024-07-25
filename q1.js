// LCS
function lcs(a, b, ind1, ind2) {
  if (ind1 < 0 || ind2 < 0) return 0;

  if (a[ind1] == b[ind2]) return 1 + lcs(a, b, ind1 - 1, ind2 - 1);

    const drop1 = lcs(a, b, ind1 - 1, ind2);
    const drop2 = lcs(a, b, ind1, ind2 - 1);

    return Math.max(drop1, drop2);
}

const ans = lcs("name", "nm", 3, 1);
console.log(ans);

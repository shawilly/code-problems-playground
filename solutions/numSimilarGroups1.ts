import { execTest } from "../problems/exec-test";
import { inputs, outputs } from "../problems/numSimilarGroups/data";

function numSimilarGroups(strs: string[]): number {
  const n = strs.length;
  let adj = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isSimilar(strs[i], strs[j])) {
        adj.get(i).push(j);
        adj.get(j).push(i);
      }
    }
  }

  var visit = new Array(n);
  let count = 0;

  function dfs(node: any, adj: any) {
    visit[node] = true;
    if (!adj.get(node)) return;
    const adjN = adj.get(node);
    for (const n of adjN) {
      if (!visit[n]) {
        visit[n] = true;
        dfs(n, adj);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visit[i]) {
      dfs(i, adj);
      count++;
    }
  }

  return count;
}

function isSimilar(x: any, y: any) {
  let diff = 0;
  for (let i = 0; i < x.length; i++) {
    if (x.charAt(i) !== y.charAt(i)) diff++;
  }
  return diff === 0 || diff === 2;
}

execTest({
  inputs,
  outputs,
  function: numSimilarGroups,
});

---
name: Bug report
about: Create a report to help us improve libgn
title: '[BUG] '
labels: ['bug', 'needs-triage']
assignees: ''

---

## Describe the bug

A clear and concise description of what the bug is.

## To Reproduce

Steps to reproduce the behavior:

```typescript
import libgn from "libgn";

// Example code that reproduces the issue
console.log(libgn.getPrefecturesByRegion("Conakry"));
```

**Expected behavior**
A clear and concise description of what you expected to happen.

**Actual behavior**
A clear and concise description of what actually happened.

## Environment

- **OS**: [e.g. macOS, Windows, Linux]
- **Node.js version**: [e.g. 18.0.0]
- **libgn version**: [e.g. 1.0.0]
- **Package manager**: [e.g. npm, pnpm, yarn]

## Additional context

Add any other context about the problem here, such as:
- Screenshots if applicable
- Error messages or stack traces
- Related issues or discussions
- Data accuracy concerns (if reporting incorrect geographical/administrative data)

## Data Source Verification

If this bug involves incorrect data (prefectures, regions, population, etc.), please provide:
- Official sources that contradict the current data
- Links to government websites or reliable geographical databases
- Any other references that support your claim

---

**Note**: For data accuracy issues, we take them very seriously as this library serves as a reference for Guinea's administrative structure. Please provide reliable sources when reporting data-related bugs.

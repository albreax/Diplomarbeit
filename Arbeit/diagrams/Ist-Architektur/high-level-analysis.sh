EXLUDE="\\.stories\\.|node_modules|__mocks__|__stubs__|assets|GoogleTagManagerWrapper.tsx|polyfill.ts|startvideo.tsx|startvideo.scss|environment.ts|fs|path|^version.json"
npx depcruise -x $EXLUDE --config .dependency-cruiser.js -v -T json src -f results.json && 
npx depcruise-fmt -T archi results.json | dot -T svg > high-level-graph.svg &&
npx depcruise-fmt -T archi results.json | dot -T svg | npx depcruise-wrap-stream-in-html > high-level-graph.html &&
npx depcruise -x $EXLUDE --config .dependency-cruiser.js -v -T err-html src -f violation-report.html 

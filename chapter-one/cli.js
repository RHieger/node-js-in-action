// cli.js

// This very simple module is an example command line interface
// (CLI) application. It is, in principle, the same paradigm
// as programs such as npm, albeit far more simple.

// Robert Hieger
// July 31, 2019

const [nodePath, scriptPath, name] = process.argv;

console.log('\nHello', name + '!\n');

// To use this CLI, type in:
//
// node client.js <yourName>.

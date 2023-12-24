const {
    tokenizer,
    parser,
    transformer,
    codeGenerator,
    compiler,
} = require('./the-super-tiny-compiler');

var toplevel = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    divide: (x, y) => x / y,
    multiply: (x, y) => x * y,
    define: (name, value) => {
        toplevel[name] = value
    }
}

const fs = require('node:fs');

fs.readFile('main.lisp', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log(tokenizer(data)); // tokenizer step
    var comp = compiler(data);
    console.log(comp);
    console.log(eval(comp));
    console.log(toplevel);
});

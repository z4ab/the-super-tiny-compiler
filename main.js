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
    },
    add1: x => x+1,
    list: (...args) => [...args],
    show: inp => { console.log(inp)},
    map: (fn, lst) => {
        return lst.reduce((result, e) => {
            result.push(toplevel[fn](e));
            return result;
        }, [])
    },
    func: (name, args, body) => {
        toplevel[name] = (...vals) => {
            args.forEach((e, i) => {
                toplevel[e] = vals[i];
            });
            return eval(compiler(body));
        }
    },
}

const fs = require('node:fs');

fs.readFile('main.lisp', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };
    //console.log(data);
    //console.log(tokenizer(data)); // tokenizer step
    var comp = compiler(data);
    //console.log(comp);
    eval(comp)
    console.log(toplevel);
});

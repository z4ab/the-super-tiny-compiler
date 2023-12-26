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

    not: (a) => !a,
    and: (a, b) => a && b,
    or: (a, b) => a || b,

    equal: (a, b) => a === b,

    list: (...args) => [...args],
    show: (inp) => { console.log(inp) },
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
    if: (condition, fn, ...args) => {
        if (condition)
        {
            return toplevel[fn](...args);
        } 
    }
}

const fs = require('node:fs');

fs.readFile('main.lisp', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };
    var comp = compiler(data);
    eval(comp)
});

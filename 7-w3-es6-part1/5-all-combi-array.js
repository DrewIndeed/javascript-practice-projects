const powerset =
    arr => arr.reduce(
        (a, v) => {
            console.log("_______________________________\n");
            console.log('a:', a);
            console.log(`v: ${v}`);
            console.log("a is the container array");
            console.log("r is each of a's arrays");
            console.log("v is each of arr's values");
            // console.log(a.concat(a.map(r => [v].concat(r))));
            console.log();
            return a.concat(a.map(r => {
                console.log("-------Jump in-------");
                console.log('r:', r);
                console.log('[v]:',[v]);
                console.log('[v] <- r: ', [v].concat(r));
                console.log('And here a <- [[v] <- r]')
                console.log("---------------------");
                return [v].concat(r)
            }))
        }, [[]]);

console.log("\n\nFinal result:", powerset([1, 2, 3, 4]));
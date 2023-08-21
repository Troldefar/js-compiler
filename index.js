try {
    const compiler = require('./compiler');
    for ( let i = 0; i < 10; i++) 
        console.log(JSON.stringify(compiler(`(add ${i} (sub(${i} 4))`), null, 2));
} catch (e) {
    console.log("ERROR : ", e);
}
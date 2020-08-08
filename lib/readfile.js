const fs = require(`fs`);

function read_file(dir, req, res){
    //console.log(req);
    let readPromise = new Promise((resolve, reject) => {
        fs.readFile(`${dir}/tar/${req}`, function (err, data) {
            console.log(`${dir}/tar/${req}`)
            if(data) resolve(data);
            else reject(data);
        });
    });
    readPromise
    .then((resolved) => res.end(resolved))
    .catch((rejected) => {
        console.log(rejected);
        res.end(rejected);
    });
    
}

module.exports = { read_file };
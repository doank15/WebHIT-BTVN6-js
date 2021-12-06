const str = "aabb";
const findIndex = (str) => {
    let count = 0;
    let res = str.split('');
    res.forEach((value,index) => {
        if(str.lastIndexOf(value) === str.indexOf(value)) {
            count++;
        }
        if(count === 1) console.log(index);
    });
    if(count === 0) {
        console.log(-1);
    }
}

findIndex(str);
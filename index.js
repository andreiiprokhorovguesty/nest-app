const o = {
    guest: '',
    cleaning: '2323',
    other: '   '
};

for(const v in o) {
    if(o[v].trim() === '') {
        delete o[v];
    }
}

console.log(o);

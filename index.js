function superbowlWin(record){

const found = record.find((i) => {
    return i.result==='W';
})

if (found === undefined){
    return undefined
}
else return found.year
}
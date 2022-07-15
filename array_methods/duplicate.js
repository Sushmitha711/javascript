let a=[9,9,0,2,6,8,3,7,1,1,0];

function RemoveDuplicates(a){
    return[...new Set(a)];
}
console.log(RemoveDuplicates(a));
//ascending
let b= a.sort((c,d)=>c-d)
console.log(b);
// desending
let c= a.sort((c,d)=>d-c)
console.log(c);
//cancatination

let d=[11,12,13,14,15];
let f=[22,23,24,25];
let e = d.concat(f);
console.log(e);
//smallest number
let g=[5,9,11,2,6];
g.sort((c,d)=>c-d);
console.log(g[0]);
//largest number
let p=[12,323,435,456,4];
p.sort((c,d)=>d-c);
console.log(p[0])



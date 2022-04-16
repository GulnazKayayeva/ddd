let name = prompt('name')
let surname = prompt('surname')
let age = +prompt('age')

let total = [
    `${name}${surname}${age}@mail.com`,
    `${surname}${age}${name}@mail.com`,
    `${age}${name}${surname}@mail.com`
]
console.log(total);

let randomEmail = () =>{
    let position = Math.floor(Math.random() * 3)
    alert(total[position])
}

randomEmail()

function random_id() {
    let a = '';
    let id_text = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
    let max_position = id_text.length - 1;
        for( i = 0; i <= 7; ++i ) {
            let position = Math.floor ( Math.random() * max_position );
            a = a + id_text.slice(position, position + 1);
        }
    console.log(a);
    return a;  
}

random_id()


let a = [45,3,22,95,7,18,23,44,96,34,6,2]

let sort = () => {
    let sort = []
    let d = Infinity
    let f = Infinity
    for(let i=0;i<a.length;i++){
        for(let k=0;k<a.length;k++){
            if(a[k] < d){
                d = a[k]
                f = k
            }
        }
        a[f] = Infinity
        sort.push(d)
        d = Infinity
    }
    console.log(sort);
    return sort
}

sort()

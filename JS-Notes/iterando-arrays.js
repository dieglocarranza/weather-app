// Object iterate
const user = { 
    name: 'Diego',
    lastname: 'Londono',
}

console.log( user.lastname )

const find = 'lastname'

console.log( user[find] )

user.age = 35;

user.course = {
    name: 'javascript',
    classes: 50
}

user.list = ['1', 2, null]

console.log( user.course )

{

    const { name, lastname } = user

    console.log(lastname)

}

user.fullname = function() { return `${user.name} ${user.lastname} ` }

console.log( user.fullname() )

user.fullname = function() { return `${this.name} ${this.lastname} ` }

console.log( user.fullname() )

user 

for ( prop in user ) {
    prop
    console.log(user[prop] )
}

Object.keys(user).forEach( prop =>  {
    console.log(prop);
    console.log(user[prop])
})

const nameList = ['Iara', 'Carolina', 'Sebastian', 'Armando'];

for (value of nameList) {
    console.log(value)
}

for (index in nameList) {
    console.log(index)
    console.log(nameList[index])
}

for (let i = 0; i <= nameList.length - 1; i++) {
    console.log(i);

    if ( i == 3) {

        console.log(nameList[i])
        break;
    }
}

let count = 0;

while (count <= nameList.length - 1) {

    console.log(nameList[count])
    count = count + 1;
}

// let count_ = 0;

// do {
//     nameList[count_];
//     count_ = count_ + 1;
//     console.log(nameList[count]);
    
// } while (count_ <= nameList.length -1)
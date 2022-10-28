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


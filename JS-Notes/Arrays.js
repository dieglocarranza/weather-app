Array()

const nameList = ['Iara', 'Carolina', 'Sebastian', 'Armando'];

nameList[0] 

console.log( nameList[0] )
console.log( nameList.length )

console.log('Last Item ' + nameList[nameList.length -1])

// Properties
nameList['wtf'] = 'what the @@@';

console.log(nameList);

const newNameList = nameList.concat('Londono', 'Carranza');

console.log(newNameList);

const newNameList1 = [...nameList, 'Valeria'];

newNameList1.push('ronaldo');
console.log(newNameList1)

newNameList1.pop();
console.log(newNameList1)


// Miltidimentional 
nameList.push(['gonzalez', 'fernandez', 'torres']);
console.log(nameList)

console.log(nameList[4][1]);

const bidimentional = [ [0, 1, 0], [1, 1, 0], [0, 1, 1]]

console.log(bidimentional[0][2])

const ceros = [];

bidimentional.forEach( (i, indexI) => {
    console.log(i)
    i.forEach((j, indexJ) => {
        console.log(j)
        if ( j === 0 ) {
            ceros.push(`${indexI} ${indexJ}`)
        }
    })
})

console.log( ceros );

const nameLabel = nameList.map( name => `The name is ${name}` );

console.log(nameLabel);

const nameListFilter = nameList.filter( name => {
    if (name === 'Iara') {
        return true
    } else {
        return false
    }
});

console.log(nameListFilter);

const nameListFind = nameList.find( name => {
    if (name === 'Iara') {
        return true
    } else {
        return false
    }
});

console.log(nameListFind);

const nameListFindIndex = nameList.findIndex(name => {
    if (name === 'Armando') {
        return true
    } else {
        return false
    }
})

console.log(nameListFindIndex)
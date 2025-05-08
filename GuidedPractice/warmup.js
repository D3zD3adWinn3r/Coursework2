//write a function that takes an array of 'user' objects and adds a new property called initials.
//you can assume the objects passed will have a firstName and lastName property.
//the initials property should be the first letter of ther first name and first letter of their last name. 


const users = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Jane', lastName: 'Doe' },
    { firstName: 'Mary', lastName: 'Lou' }
];

//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Doe' },
//     { firstName: 'Mary', lastName: 'Lou' }

const addInitials = (usersArr) => { 
    const newArr=[]

    for(let i=0; i <usersArr.lenghth; i++){
        const user = usersArr[i]
        const newObject = {...user}
        newObject.initials = user.firstName[0] + user.lastName[0]
        newArr.push({...user, initials})
    }
    return newArr
}
    console.log(addInitials(users))
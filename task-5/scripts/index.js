function SortArray(arr, direction) {
    if (direction == true) {
        arr.sort((a, b) => a.name > b.name ? 1 : -1);
    } else {
        arr.sort();
    }
}

let contacts = [
    {
        name: 'Tom',
        phoneNumber: '098-76-54-352'
    },
    {
        name: 'Peter',
        phoneNumber: '098-54-54-652'
    },
    {
        name: 'Ann',
        phoneNumber: '050-711-21-21'
    }
]

SortArray(contacts, true)
console.log(contacts)
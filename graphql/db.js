export const people = [
    {   id: 1,
        name: "Judy",
        age: 18,
        gender: "female"
    },
    {   id: 2,
        name: "Nick",
        age: 20,
        gender: "male"
    }
];

export const getById = id => {
    const filteredPerson = people.filter(person => person.id === id)

    return filteredPerson[0];
};
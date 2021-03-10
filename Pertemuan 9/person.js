export const fullName = "Maestro Pythagoras";

export const person = {
    firstName: "Maestro",
    lastName: "Pythagoras",
    age: 25,
};

export const display = ({firstName, lastName}) => {
    console.log(`Hello ${firstName} ${lastName}`);
};

export { fullName, person, display};
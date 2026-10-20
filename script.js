 
const student = {
    name: "Afy",
    age: 18,
    course: "JavaScript"
};


const { name, age, course } = student;


const showStudent = () => {
    document.getElementById("studentInfo").innerText =
        `Name: ${name}, Age: ${age}, Course: ${course}`;
};



const cloneStudent = () => {

    const newStudent = { ...student };

    newStudent.name = "Sara";

    console.log("Original:", student);
    console.log("Clone:", newStudent);

    document.getElementById("studentInfo").innerText =
        `Original: ${student.name} | Clone: ${newStudent.name}`;
};
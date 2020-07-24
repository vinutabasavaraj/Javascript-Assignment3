console.log("Marks program");

let marks = prompt("Enter the marks");
console.log(marks);

if(marks >=60 && marks <=80 )
{
    console.log(`Marks are ${marks} and grade is A`);
}
else if(marks >=40 && marks <=50 )
{
    console.log(`Marks are ${marks} and grade is B`);

}
else
{
    console.log(`Marks are ${marks} and grade is C`);

}



console.log("Using Ternary operator");


let res = (marks >=60 && marks<=80) ?`Marks are ${marks} and grade is A` :(marks >=40 && marks <= 50) ?`Marks are ${marks} and grade is B`:`Marks are ${marks} and grade is C`;
console.log(res);
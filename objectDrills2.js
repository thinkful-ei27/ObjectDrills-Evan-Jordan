function makeStudentsReport(data) {
    const answer = data.map(student => `${student.name}: ${student.grade}`)
    return answer
  }

  const students = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology'
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics'
    }
  ];
  

// function enrollInSummerSchool (students) {
//   const summerSchool = students.map(student => {
//     return {
//       name: student.name,
//       status: 'In Summer School',
//       course: student.course
//     }
    
//   });
//   return summerSchool;
// }


// console.log(enrollInSummerSchool(students));


function findByID (items, idNum) {
    const found = items.find(item => {
        return item.id === idNum
    } );
    return found;
}

const dataID = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

console.log(findByID(dataID, 1))
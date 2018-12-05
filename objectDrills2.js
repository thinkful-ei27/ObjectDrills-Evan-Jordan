function makeStudentsReport(data) {
    const answer = data.map(student => `${student.name}: ${student.grade}`)
    return answer
  }


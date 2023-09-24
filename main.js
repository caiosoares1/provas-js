import { Exams } from './exam.js'

const weights = {
  q1: 2,
  q2: 3
}

const answer = {
  q1: 'a',
  q2: 'b'
}

const exam = new Exams(weights, answer)

const answer1 = {
  student: 'Caio',
  answers: {
    q1: 'a',
    q2: 'b'
  }
}

exam.add(answer1)

const answer2 = {
  student: 'Miguel',
  answers: {
    q1: 'a',
    q2: 'c'
  }
}

exam.add(answer2)

const answer3 = {
  student: 'Maria',
  answers: {
    q1: 'a',
    q2: 'b'
  }
}

exam.add(answer3)

console.log(exam.avg()); // media

console.log(exam.min(1)) // menor valor
console.log(exam.max(2)) // dois maiores valores

console.log(exam.lt(5)) // notas menores que 5
console.log(exam.gt(2)) // notas maiores que 2
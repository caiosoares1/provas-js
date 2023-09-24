class Exams {
    constructor (weight, answer) {
        this.weight = weight
        this.answer = answer
        this.exams = []
    }

    add (exam) {
        let grade = 0
  
        Object.keys(exam.answers).forEach(q => {
            if (exam.answers[q] === this.answer[q]) {
  
            grade += this.weight[q]
            }
        })
  
        exam.grade = grade
  
        this.exams.push(exam)

    }

    avg () {

        let totalSum = 0
        this.exams.forEach(exam => {
            totalSum += exam.grade
        })

        return totalSum / this.exams.length
    }

    min (counter=1) {
        let grades = this.exams.map((answer) => answer.grade)
        grades.sort((a,b) => a-b)
        return grades.slice(0, counter)
    }

    max (counter=1) {
        let grades = this.exams.map((answer) => answer.grade)
        grades.sort((a,b) => a-b)
        return grades.slice(-counter)
    }

    lt (value) {
        let grades = this.exams.map((answer) => answer.grade)
        grades.sort()
        return grades.filter((grade) => grade < value)
    }

    gt (value) {
        let grades = this.exams.map((answer) => answer.grade)
        grades.sort()
        return grades.filter((grade) => grade > value)
    }
}

export { Exams }
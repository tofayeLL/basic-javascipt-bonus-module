
/* ----inside object use array, object, function---- */


const subject = {
    name: 'biology',
    teacher: 'rasheda mam',
    examDate: '30 feb',
    act:function() {
        console.log('you are a very serious student');
    },
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'final exam',
        marks: 100
    }
}
// console.log(subject.act());  // see the function output.
// console.log(subject.chapters); // see the output of array inside object
// console.log(subject.exams.name); // see the object  output inside object
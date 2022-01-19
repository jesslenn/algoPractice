// Attendance Check
// Define a function, attendanceCheck, that accepts a string argument corresponding to a day of the week.

// Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.

let classRoom = [
  {
      "Marnie" : [
              {"Monday" : true},
              {"Tuesday" : true},
              {"Wednesday" : true},
              {"Thursday" : true},
              {"Friday" : true}
          ]
  },
  {
      "Lena" : [
              {"Monday" : false},
              {"Tuesday" : false},
              {"Wednesday" : true},
              {"Thursday" : false},
              {"Friday" : true}
          ]
  },
  {
      "Shoshanna" : [
              {"Monday" : true},
              {"Tuesday" : true},
              {"Wednesday" : false},
              {"Thursday" : true},
              {"Friday" : false}
          ]
  },
  {
      "Jessa" : [
              {"Monday" : false},
              {"Tuesday" : false},
              {"Wednesday" : false},
              {"Thursday" : false},
              {"Friday" : true}
          ]
  }
];

//[{name: [{day: bool}, {day: bool}, {day: bool}]}, {[{}, {}, {}]}, {[{}, {}, {}]}]
//Big, complicated array of objects, right?  So while we're looping through, we reassign EVERYTHING so we know what we're handling at each step.

function attendanceCheck(day){
  let presentStudents = []
  //we are looping through each student--so every i comes back with an object containing an array of objects
  for (let i = 0; i < classRoom.length; i++){
    //individual student object
    let eachStudent = classRoom[i]
  }
}

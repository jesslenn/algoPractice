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

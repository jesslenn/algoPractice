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
    let eachStudent = classRoom[i];
    //we have to get the key of our pair for the student obj
      //why [0]?  GeeksForGeeks:
      //The Object.keys() method is used to return an array whose elements are strings corresponding to the enumerable properties found directly upon an object. 
      //Me : you might RUN Object.keys() on an object, but that's an array you're returning!
    let studentName = Object.keys(eachStudent)[0]
    //now we can get our single value--the array of attendance objects
    let attendanceObj = eachStudent[studentName]
    //NOW we have our array for that particular student and we can loop through the objects for each day!
    for (let j = 0; j <attendanceObj.length; j++){
      //we take the object for each single day
      let singleDay = attendanceObj[j];
      //we have to retrieve our specific week day
      let dayName = Object.keys(singleDay)[0]
      //if our specific day is the input day AND it's value is true
      if (dayName === day && singleDay[dayName]){
        //we push that sudent into our array
        presentStudents.push(studentName)
      }
    }
  }
  //once all of our loops have run, we return our array!
  return presentStudents;
}

/**
 *             1 
 *            1 1 
 *           1 2 1 
 *          1 3 3 1 
 *         1 4 6 4 1 
 *        1 5 10105 1 
 */

//output: the amount of rows in Pascal's Triangle indicated by input
//no storage needed, just needs to print

function pascalsReturn (maxLevel) {
  let levels = [[1], [1, 1]];
  if (maxLevel >= 2) {
    for (let currentLevel = 2; currentLevel <= maxLevel; currentLevel++) {
      var loopArr = [1];
      let prevLevelArr = levels[currentLevel - 1];
      for (let currentArrIdx = 0; currentArrIdx < prevLevelArr.length-1; currentArrIdx++) {
        let nextInt = prevLevelArr[currentArrIdx + 1]
        let newInt = prevLevelArr[currentArrIdx] + nextInt
        loopArr.push(newInt);
      }
      loopArr.push(1);
      levels.push(loopArr);
    }
  }
  return levels
}

pascalsReturn(5)
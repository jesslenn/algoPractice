#instead of having to assign inside code function, we just have this as a constant in globacl scope
HOME_TEAM_WON = 1

def tournamentWinner(competitions, results):
  #we initialize a value that will keep track of the best team we've found so far
  currentBestTeam = ""
  scores = {currentBestTeam: 0}

  for idx, competition in enumerate(competitions):
    result = results[idx]
    #deconstruct single competition array into two single values (teams)
    homeTeam, awayTeam = competition

    winningTeam = homeTeam if result == HOME_TEAM_WON else awayTeam

    updateScores(winningTeam, 3, scores);

    if scores[winningTeam] > scores[currentBestTeam]:
      currentBestTeam = winningTeam

    return currentBestTeam

def updateScores(team, points, scores):
  if team not in scores:
    scores[team] = 0
  scores[team] += points
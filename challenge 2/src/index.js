function calculateXp(numberVictories, numberDefeats) {
  return numberVictories - numberDefeats
}

function getLevel(xp) {
  let level = ''

  if (xp <= 10) {
    level = 'Iron'
  } else if (xp >= 11 && xp <= 20) {
    level = "Bronze"
  } else if (xp >= 21 && xp <= 50) {
    level = "Silver"
  } else if (xp >= 51 && xp <= 80) {
    level = "Gold"
  } else if (xp >= 81 && xp <= 90) {
    level = "Diamond"
  } else if (xp >= 91 && xp <= 100) {
    level = "Legendary"
  } else if (xp >= 101) {
    level = "Imortal"
  }

  return level
}

function heroResult(heroName, numberVictories, numberDefeats) {
  let xp = calculateXp(numberVictories, numberDefeats)
  let level = getLevel(xp)
  
  console.log("The hero " + heroName + " has a total of " + xp + " victories at the " + level + " level")
}

heroResult("Shazam",110,22)





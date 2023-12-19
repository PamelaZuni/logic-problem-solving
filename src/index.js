// // Hero Level Sorter Challenge by Digital Innovation One 

let heroName = "Lord of the sea"
let xpHero = 11000
let xp

if (xpHero <= 1000) {
  xp = "Iron"
} else if (xpHero >= 1001 && xpHero <= 2000) {
  xp = "Bronze"
} else if (xpHero >= 2001 && xpHero <= 5000) {
  xp = "Silver"
} else if (xpHero >= 6001 && xpHero <= 7000) {
  xp = "Gold"
} else if (xpHero >= 7001 && xpHero <= 8000) {
  xp = "Platina"
} else if (xpHero >= 8001 && xpHero <= 9000) {
  xp = "Ascendent"
} else if (xpHero >= 9001 && xpHero <= 10000) {
  xp = "Imortal"
} else if (xpHero >= 10001) {
  xp = "Radiant"
}

console.log("The hero " + heroName + " is on the level " + xp)


 

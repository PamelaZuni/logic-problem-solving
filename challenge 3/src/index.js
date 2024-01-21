//Challenge 3 - Writing the classes Classes of a Game

class Superhero {
  constructor(heroName, heroAge, heroType ){
    this.heroName = heroName
    this.heroAge = heroAge
    this.heroType = heroType
  }

  toString(){
    console.log(`O heroi ${this.heroName} with age ${this.heroAge} and type ${this.heroType}`)
  }

  attack() {
    let attack = ''
  
    if (this.heroType === 'Warrior') {
      attack = 'Sword'
    } else if (this.heroType === 'Wizard') {
      attack = "Magic"
    } else if (this.heroType === 'Monk') {
      attack = "Martial Arts"
    } else if (this.heroType === 'Ninja') {
      attack = "Shuriken"
    }

    console.log(`The ${this.heroType} attacked by using ${attack}`)
    
    return attack
  }


  
}

let heroFeatures = new Superhero("Shzuk", 38, "Ninja")
// heroFeatures.toString()

heroFeatures.attack()


// function heroResult(heroName , type) {

// console.log("The hero " + heroName  + " has been an " + type)
// }

// heroResult("Shzrark", "wizard")




//let heroName = new superHero("Hazuck")
//let heroAge = new superHero("36")
//let heroType = new superHero("warrior", "wizard", "monke", "ninja")




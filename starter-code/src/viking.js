let damage = 50;

// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }  
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
  receiveDamage(damage){
    this.health -= damage;
    return "";
  }
}


// Saxon
class Saxon extends Soldier{
  constructor(health, strength) {
    super(health, strength);
  }

}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking){
  }
  addSaxon(Saxon){
  }
  vikingAttack(){
  }
  saxonAttack(){}
  showStatus(){}
}

/*================================== */

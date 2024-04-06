function inventory(arr) 
{
  let hero = [];
  for(let i = 0; i < arr.length; i++) {
  let tokens = arr[i].toString().split(' / ');
  let heroName = tokens[0];
  hero.push({name: heroName});
  let heroLevel = Number(tokens[1]);
  hero.level = heroLevel;
  let items = "";
  for(let j = 2; j < tokens.length; j++) {
    items += tokens[j];
    hero.items = items;
  }
  console.log(hero.sort());

  // console.log(`Hero: ${heroName}`);
  // console.log(`level => ${heroLevel}`);
  // console.log(`Items => ${items}`);
  }
}
inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
  ])
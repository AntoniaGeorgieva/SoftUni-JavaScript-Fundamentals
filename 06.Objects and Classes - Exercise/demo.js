function inventory(input) {
  let heroes = [];

  for (let line of input) {
    let [heroName, heroLevel, itemsStr] = line.split(" / ");
    let hero = {
      name: heroName,
      level: Number(heroLevel),
      items: itemsStr ? itemsStr.split(", ") : [],
    };

    heroes.push(hero);
  }

  // Sort heroes by level in ascending order
  heroes.sort((a, b) => a.level - b.level);

  // Print the sorted hero data
  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    if (hero.items.length > 0) {
      console.log(`Items => ${hero.items.join(", ")}`);
    }
  }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara'
  ])

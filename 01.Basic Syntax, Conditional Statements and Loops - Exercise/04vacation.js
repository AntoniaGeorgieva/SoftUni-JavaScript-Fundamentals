function vacation(people, type, day) {
  let price = 0;
  switch (type) {
    case "Students":
      if (day == "Friday") {
        price = 8.45 * people;
      } else if (day == "Saturday") {
        price = 9.80 * people;
      } else if (day == "Sunday") {
        price = 10.46 * people;
      }
      if (people >= 30) {
        price = price - price * 0.15;
      }
      break;

    case "Business":
      if (day == "Friday") {
        price = 10.90;
      } else if (day == "Saturday") {
        price = 15.60;
      } else if (day == "Sunday") {
        price = 16;
      }
      if (people >= 100) {
        people -= 10
        price = price * people;
      }
      else {
        price = price * people
      }
      break;

    case "Regular":
      if (day == "Friday") {
        price = 15 * people;
      } else if (day == "Saturday") {
        price = 20 * people;
      } else if (day == "Sunday") {
        price = 22.50 * people;
      }
      if (people >= 10 && people <= 20) {
        price = price - price * 0.05;
      }
      break;
  }

  console.log(`Total price: ${price.toFixed(2)}`)
}
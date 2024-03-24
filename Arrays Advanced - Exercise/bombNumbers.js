function bombNumbers(nums, bombInfo)
{
  // let bombNum = Number(arr2[0]);
  // let power = Number(arr2[1]);

  let [bombNum, power] = bombInfo;

  while(nums.includes(bombNum)) {
    let i = nums.indexOf(bombNum);
    nums.splice(Math.max(0, i - power), power * 2 + 1, 0);
  }

  let sum = 0;
  for(let num of nums) {
    sum += num;
  }

  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 
  2, 9],
  [4, 2]
  )

  console.log("---");

bombNumbers([1, 4, 4, 2, 8, 9, 
1],
[9, 3]
)

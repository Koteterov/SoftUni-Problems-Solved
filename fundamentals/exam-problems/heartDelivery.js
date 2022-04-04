function heartDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);
  input.pop();
  let numberOfJumps = input;

  let currIndex = 0;

  for (const jumps of numberOfJumps) {
    let [command, index] = jumps.split(" ");
    index = Number(index);
    currIndex += index;

    if (currIndex > neighborhood.length - 1) {
      currIndex = 0;
    }

    if (neighborhood[currIndex] == 0) {
      console.log(`Place ${currIndex} already had Valentine's day.`);
    }

    if (neighborhood[currIndex] > 0) {
      neighborhood[currIndex] -= 2;
      if (neighborhood[currIndex] == 0) {
        console.log(`Place ${currIndex} has Valentine's day.`);
      }
    }
  }
  let hasFailed = false;
  let houseCount = 0;
  neighborhood.forEach((house) => {
    if (house > 0) {
      hasFailed = true;
      houseCount++;
    }
  });
  console.log(`Cupid's last position was ${currIndex}.`);

  if (hasFailed) {
    console.log(`Cupid has failed ${houseCount} places.`);
  } else {

      console.log('Mission was successful.');
  }
}

// heartDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);

// heartDelivery([
//   "2@4@2",
//   "Jump 2",
//   "Jump 2",
//   "Jump 8",
//   "Jump 3",
//   "Jump 1",
//   "Love!",
// ]);
//==============================================================
function val(input) {
  let neigb = input.shift().split("@").map(Number);

  let next = 0;
  let position = [];
  while (input[0] != "Love!") {
    let [_, index] = input.shift().split(" ");
    index = Number(index);
    next += index;
    if (next > neigb.length - 1) {
      next = 0;
    }
    neigb[next] -= 2;
    let house = neigb[next];

    if (house == 0) {
      console.log(`Place ${next} has Valentine's day.`);
    }
    if (house < 0) {
      console.log(`Place ${next} already had Valentine's day.`);
    }
    position.push(next);
  }
  console.log(`Cupid's last position was ${position.pop()}.`);
  let filtered = neigb.filter((x) => x > 0);

  if (filtered.length > 0) {
    console.log(`Cupid has failed ${filtered.length} places.`);
  } else {
    console.log(`Mission was successful.`);
  }
}

// val(["0@2@0@2", "Jump 1", "Jump 2", "Love!"]);

val(["2@4@2", "Jump 2", "Jump 2", "Jump 8", "Jump 3", "Jump 1", "Love!"]);


//================================================================
// 100 / 100

function solve(input = []) {
  let houses = input.shift().split("@").map(Number);
  let commands = input.shift();

  let currentIndex = 0;

  while (commands !== "Love!") {
    let tokens = commands.split(" ");
    let jumpLength = +tokens[1];
console.log(tokens);
    currentIndex += jumpLength;

    if (currentIndex >= houses.length) {
      currentIndex = 0;
    }

    if (houses[currentIndex] === 0) {
    //   console.log(`Place ${currentIndex} already had Valentine's day.`);
    } else {
      houses[currentIndex] -= 2;
      if (houses[currentIndex] === 0) {
        // console.log(`Place ${currentIndex} has Valentine's day.`);
      }
    }

    commands = input.shift();
  }

//   console.log(`Cupid's last position was ${currentIndex}.`);

  let isSuccess = true;
  let count = 0;

  for (const house of houses) {
    if (house !== 0) {
      isSuccess = false;
      count++;
    }
  }

  if (isSuccess) {
    // console.log(`Mission was successful.`);
  } else {
    // console.log(`Cupid has failed ${count} places.`);
  }
}

  solve(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);

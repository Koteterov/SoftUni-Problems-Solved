class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (!this.goals[peak]) {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
    return `${peak} has already been added to your goals`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals[peak]) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.goals[peak] && this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    let res = time * 10;
    let diff = this.resources - res;
    if (diff < 0) {
      return "You don't have enough resources to complete the hike";
    }
    this.resources -= res;

    this.listOfHikes.push({
      peak,
      time,
      difficultyLevel,
    });
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    let res = time * 10;
    this.resources += res;
    if (this.resources > 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }
    return `You have rested for ${time} hours and gained ${res}% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length == 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria == "hard") {
      this.listOfHikes = this.listOfHikes.filter(
        (x) => x.difficultyLevel == "hard"
      );
      let sorted = this.listOfHikes.sort((a, b) => a.time - b.time);
      if (sorted.length == 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;
    } else if (criteria == "easy") {
      this.listOfHikes = this.listOfHikes.filter(
        (x) => x.difficultyLevel == "easy"
      );
      let sorted = this.listOfHikes.sort((a, b) => a.time - b.time);
      if (sorted.length == 0) {
        return `${this.username} has not done any ${criteria} hiking yet`;
      }

      return `${this.username}'s best ${criteria} hike is ${sorted[0].peak} peak, for ${sorted[0].time} hours`;
    }
    if (criteria == "all") {
      let result = ["All hiking records:"];
      this.listOfHikes.forEach((x) => {
        result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`);
      });
      return result.join("\n");
    }
  }
}

const user = new SmartHike("Vili");
console.log(user.addGoal("Musala", 2925));
console.log(user.addGoal("Rui", 1706));
console.log(user.hike("Musala", 8, "hard"));
console.log(user.hike("Rui", 3, "easy"));
// console.log(user.hike('Everest', 12, 'hard'));
// const user = new SmartHike('Vili');
// console.log(user.addGoal('Musala', 2925));
// console.log(user.hike('Musala', 8, 'hard'));
// console.log(user.rest(4));
// console.log(user.rest(5));

// const user = new SmartHike('Vili');
// user.addGoal('Musala', 2925);
// user.hike('Musala', 8, 'hard');
// console.log(user.showRecord('easy'));
// user.addGoal('Vihren', 2914);
// user.hike('Vihren', 4, 'hard');
// console.log(user.showRecord('hard'));
// user.addGoal('Rui', 1706);
// user.hike('Rui', 3, 'easy');
// console.log(user.showRecord('all'));

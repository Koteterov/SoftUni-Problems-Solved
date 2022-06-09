class Movie {
  constructor(movieName, ticketPrice) {
    this.movieName = movieName;
    this.ticketPrice = Number(ticketPrice);
    this.screenings = [];
    this.totalProfit = 0;
    this.totalTickets = 0;
  }
  newScreening(date, hall, description) {
    const screen = this.screenings.find((x) => x.date == date && x.hall == hall);

    if (screen) {
      throw new Error(`Sorry, ${hall} hall is not available on ${date}`);
    }

    this.screenings.push({ date, hall, description });
    return `New screening of ${this.movieName} is added.`;
  }
  endScreening(date, hall, soldTickets) {
    const screen = this.screenings.find((x) => x.date == date && x.hall == hall);
    if (screen == undefined) {
      throw new Error(
        `Sorry, there is no such screening for ${this.movieName} movie.`
      );
    }
    const currProfit = this.ticketPrice * soldTickets;
    this.totalProfit += currProfit;
    this.totalTickets += soldTickets;

    this.screenings = this.screenings.filter((x) => x != screen);

    return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currProfit}`;
  }

  toString() {
    const result = [
      `${this.movieName} full information:`,
      `Total profit: ${this.totalProfit.toFixed(0)}$`,
      `Sold Tickets: ${this.totalTickets}`,
    ];

    if (this.screenings.length == 0) {
      result.push("No more screenings!");
    } else {
      result.push("Remaining film screenings:");
      this.screenings
        .sort((a, b) => a.hall.localeCompare(b.hall))
        .forEach((x) =>
          result.push(`${x.hall} - ${x.date} - ${x.description}`)
        );
    }
    return result.join("\n");
    //OR:
    // return [
    //   `${this.movieName} full information:`,
    //   `Total profit: ${this.totalProfit.toFixed(0)}$`,
    //   `Sold Tickets: ${this.totalTickets}`,
    //   this.screenings.length == 0
    //     ? "No more screenings!"
    //     : "Remaining film screenings:\n" +
    //       this.screenings
    //         .sort((a, b) => a.hall.localeCompare(b.hall))
    //         .map((x) => `${x.hall} - ${x.date} - ${x.description}`)
    //         .join("\n"),
    // ].join("\n");
  }
}

let m = new Movie("Wonder Woman 1984", "10.00");

console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
console.log(m.endScreening("October 3, 2020", "Main", 78));
console.log(m.toString());

m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
console.log(m.toString());

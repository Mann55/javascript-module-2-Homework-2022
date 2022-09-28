var athlete = {
  name: "Usain Bolt",
  goldMedals: 25,
  silverMedals: 7,
  winNewMedal: function (medal) {
    if (medal === "gold") {
      this.goldMedals = this.goldMedals + 1;
    } else {
      this.silverMedals = this.silverMedals + 1;
    }
  },
};

athlete.winNewMedal("silver");
console.log(athlete.goldMedals); // prints "25"
console.log(athlete.silverMedals); // prints "8"

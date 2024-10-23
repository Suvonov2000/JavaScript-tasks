class CreatPerson {
  constructor(name, surname, number, currentCity) {
    this.name = name;
    this.surname = surname;
    this.number = number;
    this.currentCity = currentCity;
  }
}

const person1 = new CreatPerson("Umidjon", "Suvonov", "090000000", "Tokyo");

class Student extends CreatPerson {
  constructor(name, surname, number, currentCity, comeCity) {
    super(name, surname, number, currentCity);
    this.comeCity = comeCity;
  }
}

const worker = new Student(
  "Tursun",
  "Amriev",
  "0700000000",
  "Tokyo",
  "Uzbekistan"
);

console.log(worker);

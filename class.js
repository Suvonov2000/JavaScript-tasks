class CreatePerson {
  constructor(name, surname, number, currentCity) {
    this.name = name;
    this.surname = surname;
    this.phoneNumber = number;
    this.currentCity = currentCity;
  }
}

const person1 = new CreatePerson(
  "Umidjon",
  "Suvonov",
  "123456789",
  "Samarkand"
);

class StudentPerson extends CreatePerson {
  constructor(name, surname, number, currentCity, comeCity) {
    super(name, surname, number, currentCity);
    this.comeCity = comeCity;
  }
}

const StudentPerson1 = new StudentPerson(
  "Tursun",
  "Amriev",
  "123456789",
  "Toshkent",
  "Tokio"
);

console.log(StudentPerson1);

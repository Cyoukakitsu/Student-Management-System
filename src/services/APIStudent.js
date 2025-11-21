import { faker } from "@faker-js/faker";

const mockStudentList = [
  {
    id: 1,
    Name: "Alice",
    Class: "1-A",
    Subject: "Mathematics",
    Semester: "2024 Spring",
    Score: 92,
  },
  {
    id: 2,
    Name: "Bob",
    Class: "1-B",
    Subject: "English",
    Semester: "2024 Spring",
    Score: 85,
  },
  {
    id: 3,
    Name: "Charlie",
    Class: "2-A",
    Subject: "Physics",
    Semester: "2024 Spring",
    Score: 88,
  },
  {
    id: 4,
    Name: "Diana",
    Class: "2-B",
    Subject: "Chemistry",
    Semester: "2024 Spring",
    Score: 91,
  },
  {
    id: 5,
    Name: "Edward",
    Class: "3-A",
    Subject: "Biology",
    Semester: "2024 Spring",
    Score: 77,
  },
  {
    id: 6,
    Name: "Fiona",
    Class: "3-B",
    Subject: "History",
    Semester: "2024 Spring",
    Score: 89,
  },
  {
    id: 7,
    Name: "George",
    Class: "1-A",
    Subject: "Geography",
    Semester: "2024 Spring",
    Score: 94,
  },
  {
    id: 8,
    Name: "Helen",
    Class: "2-A",
    Subject: "Mathematics",
    Semester: "2024 Spring",
    Score: 82,
  },
  {
    id: 9,
    Name: "Ian",
    Class: "3-A",
    Subject: "English",
    Semester: "2024 Spring",
    Score: 87,
  },
  {
    id: 10,
    Name: "Jenny",
    Class: "1-B",
    Subject: "Physics",
    Semester: "2024 Spring",
    Score: 90,
  },
];

export function getStudentList() {
  return mockStudentList.map((item) => ({
    ...item,
    avatar: faker.image.avatar(),
  }));
}

import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  {
    email: "ethan.walker@example.com",
    fullName: "Ethan Walker",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    email: "ava.martinez@example.com",
    fullName: "Ava Martinez",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    email: "liam.roberts@example.com",
    fullName: "Liam Roberts",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    email: "sophia.harris@example.com",
    fullName: "Sophia Harris",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    email: "mason.carter@example.com",
    fullName: "Mason Carter",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    email: "isabella.turner@example.com",
    fullName: "Isabella Turner",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    email: "noah.adams@example.com",
    fullName: "Noah Adams",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    email: "mia.evans@example.com",
    fullName: "Mia Evans",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    email: "jackson.white@example.com",
    fullName: "Jackson White",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    email: "charlotte.baker@example.com",
    fullName: "Charlotte Baker",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    email: "logan.thomas@example.com",
    fullName: "Logan Thomas",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    email: "amelia.hill@example.com",
    fullName: "Amelia Hill",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    email: "elijah.king@example.com",
    fullName: "Elijah King",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    email: "harper.scott@example.com",
    fullName: "Harper Scott",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/16.jpg",
  },
  {
    email: "benjamin.lee@example.com",
    fullName: "Benjamin Lee",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/men/17.jpg",
  },
  {
    email: "ella.hall@example.com",
    fullName: "Ella Hall",
    password: "12345678",
    profilePic: "https://randomuser.me/api/portraits/women/17.jpg",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();

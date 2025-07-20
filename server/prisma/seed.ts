// prisma/seed.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing users (optional)
  await prisma.user.deleteMany();

  // Seed new users
  const users = await prisma.user.createMany({
    data: [
      {
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "ADMIN",
        password: "password123",
      },
      {
        name: "Bob Smith",
        email: "bob@example.com",
        role: "COMMANDER",
        password: "password456",
      },
      {
        name: "Charlie Brown",
        email: "charlie@example.com",
        role: "LOGISTICS_OFFICER",
        password: "password789",
      },
    ],
  });

  console.log(`Seeded ${users.count} users.`);
}

main()
  .then(() => {
    console.log("Seeding completed.");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

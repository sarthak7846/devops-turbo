import { config } from 'dotenv';
import { dirname, join } from "node:path";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client";
import { fileURLToPath } from 'node:url';

// const __dirname = dirname(fileURLToPath(import.meta.url));
// config({ path: join(__dirname, '.env') })
console.log('db url', process.env.DATABASE_URL)

const connectionString = `${process.env.DATABASE_URL}`;

console.log('connection string', connectionString)

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export { prisma };
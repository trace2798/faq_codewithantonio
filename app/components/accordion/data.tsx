export const accordianData = [
  {
    title: `The provided database string is invalid.`,
    description: `Add "test" in the end, `,
    description2: `For example, Before "mongodb+srv://project:<password>@cluster0.zwdoshb.mongodb.net/" After:"mongodb+srv://project:<password>@cluster0.zwccdhb.mongodb.net/test"`,
    description3: `If you already have test then check your password.`,
  },
  {
    title: "Build fail",
    description: `Go to your package,json and then add "postinstall": "prisma generate" to your scripts.`,
    description2: `Previously it was not required.`,
  },
  {
    title: `Error [next-auth] message: 'outgoing request timed out after 3500ms`,
    description: `Probably has to do with internet connection issues nothing with your code.`,
    description2: `https://github.com/nextauthjs/next-auth/discussions/3186`,
  },
  {
    title: `When we use Prisma with Next.Js, why do we need the prismadb.ts file located in lib folder?`,
    description: `Next uses hot-reload while developing, meaning that if you just did export const prisma = new PrismaClient() you would have a new prisma client with every hot reload. This would throw a warning saying "too many active prisma instances" and would cause bugs in development. To prevent this, we check if we are in development mode, and if we are, we assign new PrismaClient() to global. This is because global is not affected by hot reload. So that way we have that util to either use direct new PrismaClient() if we are in production, or use global/globalThis/globalForPrisma if we are in development.`,
    description2: `https://discord.com/channels/1079557715497595013/1079557715497595016/1127972310834483300`,
  },
];

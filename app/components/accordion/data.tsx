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
];

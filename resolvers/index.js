export const resolvers = {
  Query: {
    getByBreed: async (_, { name }) => {
      const response = await fetch(process.env.API_URL + name, {
        headers: { "X-Api-Key": process.env.API_KEY },
        contentType: "application/json",
      });
      return response.json();
    },
  },
};

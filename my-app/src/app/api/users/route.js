// const express = require("express");
// const app = express();

// app.get("/api/users", (req, res) => {
//   // Handle GET requests for /api/users
//   const users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "Bob" },
//   ];
//   // Send the users as a response
//   res.json(user);
// });

// app.listen(3000, () => {
//   console.log("Server is listening on port 3000");
// });
// Next. js supports the following HTTP methods:

// 1. GET
// 2. POST
// 3. PUT
// 4. PATCH
// 5. DELETE
// 6. HEAD
// 7. OPTIONS

export async function GET(request) {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];
  return new Response("Hello, Next.js!" && JSON.stringify(users));
}

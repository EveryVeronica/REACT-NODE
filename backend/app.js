
const quotes = require("inspirational-quotes");

const admin = require("../backend/config/fbConfig");

const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);












  socket.on("join_room", (data) => {
    console.log('ทำงาน'+data);
    
    

const idToken = data
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log(
        "ddddddddddddddddddddddddddddddddddddddd" + decodedToken.email
      );
      // ...
    })
    .catch((error) => {
      // Handle error
    });









    //socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});






// const http = require('http');
// const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);




// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin",
//     "X-Requested-With,Content-Type,Accept"
//   );
//   next();
// });


// io.on('connection', (socket) => {
//   console.log('a user connected5555555555555555555555555555555555555555555');
// });

// app.get("/", (req, res) => {




// const idToken = req.query.id
//   admin
//     .auth()
//     .verifyIdToken(idToken)
//     .then((decodedToken) => {
//       const uid = decodedToken.uid;
//       console.log(
//         "ddddddddddddddddddddddddddddddddddddddd" + decodedToken.email
//       );
//       // ...
//     })
//     .catch((error) => {
//       // Handle error
//     });

//   res.send(quotes.getQuote());
// });




// app.listen(5000, () => {
//   console.log("server start running");
// });

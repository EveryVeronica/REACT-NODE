const quotes = require("inspirational-quotes");
var crypto = require('crypto');
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
  const count = io.engine.clientsCount;
  const {token} = socket.handshake.auth; // receive the token from client

  console.log(`socketID: [${socket.id}]`);




  socket.on("config_room", async (data) => {

    let { email, uid } = await verifyIdToken(token);
    console.log(`clientsCount:[${count}]- uid:[${uid}]- email:[${email}]`)
    // Encrypts output

    if (email) {
      let {iv,encryptedData} = encrypt(uid);
      socket.emit("receive_config", encryptedData);
    }


  });

  socket.on("join_room", (data) => { 

    console.log(`สร้างห้อง:[${data}]`);
    socket.join(data);
  })



  socket.on("send_message", ({displayName, message, room }) => {
    
    console.log(`displayName:[${displayName}]- ข้อความ:[${message}]- ห้อง:[${room}]`);
  

   

let obj = {
  Name: displayName,
  message: JSON.stringify(message)
}
    socket.to(room).emit("receive_message", obj);
    socket.emit("receive_message", obj);
    
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});
//ถอดรหัส token
const verifyIdToken = async (idToken) => {
  let user = await admin.auth().verifyIdToken(idToken);
  return user;
};










// Node.js program to demonstrate the	
// crypto.createDecipheriv() method



// Difining algorithm
const algorithm = 'aes-256-cbc';

// Defining key
const key = "f09709e0b1610176969aef3f13ecf154"
// Defining password


// Defining iv
const iv = crypto.randomBytes(16);

// An encrypt function
function encrypt(text) {

// Creating Cipheriv with its parameter
let cipher =
	crypto.createCipheriv(algorithm, key, iv);

// Updating text
let encrypted = cipher.update(text);

// Using concatenation
encrypted = Buffer.concat([encrypted, cipher.final()]);

// Returning iv and encrypted data
return { iv: iv.toString('hex'),
	encryptedData: encrypted.toString('hex') };
}








// A decrypt function
function decrypt(text) {

let iv = Buffer.from(text.iv, 'hex');
let encryptedText =
	Buffer.from(text.encryptedData, 'hex');

// Creating Decipher
let decipher = crypto.createDecipheriv(
  algorithm, Buffer.from(key), iv);

// Updating encrypted text
let decrypted = decipher.update(encryptedText);
decrypted = Buffer.concat([decrypted, decipher.final()]);

// returns data after decryption
return decrypted.toString();
}



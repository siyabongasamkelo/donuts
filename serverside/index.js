const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
dotenv.config();
const fileupload = require("express-fileupload");
const { Server } = require("socket.io");

//     middlewares
app.use(express.json());
app.use(cors());
app.use(fileupload({ useTempFiles: true }));
const server = require("http").createServer(app);

//             scocket io
const io = new Server(server, {
  cors: {
    origin:
      process.env.ENVIRONMENT === "DEVELOPMENT"
        ? "http://localhost:3000"
        : "https://siya-donuts.netlify.app/",
    // origin: ["https://siya-shoeshop.netlify.app"],
  },
});

let chats = [];
let includes = false;
let index = 0;

io.on("connection", (socket) => {
  console.log(`user ${socket.id} joined`);

  socket.on("custom-event", (number, string, obj) => {
    console.log(number, string, obj);
  });

  socket.on("get-senders", async (author) => {
    const recievedMessages = await Messages.find({
      receiver: author,
    });

    let senders = [];

    for (let i = 0; i < recievedMessages.length; i++) {
      senders.push(recievedMessages[i].author);
    }

    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    let testing = removeDuplicates(senders);
    console.log(testing);
    socket.emit("senders", testing);
  });

  socket.on("get-message", async (author, id) => {
    const theMessages = await Messages.where("author")
      .equals(author)
      .where("receiver")
      .equals(id);

    let senders = [];

    for (let i = 0; i < theMessages.length; i++) {
      if (theMessages[i].author !== author) {
        senders.push(theMessages[i].author);
      }
      if (theMessages[i].author === author) {
        senders.push(theMessages[i].receiver);
      }
    }

    function removeDuplicates(arr) {
      return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    let testing = removeDuplicates(senders);

    socket.emit("senders", testing);
    socket.emit("messages", theMessages);
    // console.log(testing);
  });

  socket.on("show", (id, name) => {
    includes = false;
    index = 0;
    for (let i = 0; i < chats.length; i++) {
      if (chats[i].name === name) {
        index = i;
        includes = true;
      }
    }

    if (chats.length <= 0) {
      chats.push({ id, name });
    }

    if (includes === true) {
      chats[index].id = id;
    }

    if (chats[index].name !== name) {
      chats.push({ id, name });
    }

    console.log(chats);

    // sending online users to the clients
    socket.emit("online-users", chats);
    console.log("emiting online users");
  });

  socket.on("send-message", (message) => {
    let receiver;

    if (chats.length !== 0) {
      for (let i = 0; i < chats.length; i++) {
        if (chats[i].name === message.receiver) {
          receiver = chats[i].id;
        }
      }
    }

    const newMessage = new Messages({
      author: message.author,
      receiver: message.receiver,
      message: message.message,
      date: message.date,
      status: message.status,
    });

    if (message.receiver === "") {
      socket.broadcast.emit("receive-message", message);
      Messages.create(newMessage)
        .then(() => {
          console.log("your message was sent");
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      socket.to(receiver).emit("receive-message", message, receiver);
      Messages.create(newMessage)
        .then(() => {
          console.log("your message was sent");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  });

  socket.on("disconnect", () => {
    console.log(`User Disconnencted: ${socket.id}`);
  });
});

//   mongodb connection
// atlas connenction
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGODBCONNECTION);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("mongodb database connection established successfuly");
});

//auth routes
app.use("/add", require("./routes/Register"));
app.use("/login", require("./routes/Login"));

//item routes
app.use("/add", require("./routes/addItem"));
app.use("/get", require("./routes/getItems"));
app.use("/get", require("./routes/getItem"));

//review routes
app.use("/add", require("./routes/addReview"));
app.use("/get", require("./routes/getReview"));

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

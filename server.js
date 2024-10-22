const express = require("express");
const http = require("http");
const { Server: SocketIOServer } = require("socket.io");
const path = require("path");

const app = express();
const port = 5000;

const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on("connection", (socket) => {
  console.log("User connected"); 

  socket.on("send-loaction: ", (data) => {
  io.emit("recieve-location", {id: socket.id, ...data})
})

  // when disconnect user
  socket.on("disconnect", () => {
    io.emit("user-disconnected", { id: socket.id })
    console.log("user disconnected");
  });
});

// ---- integrating ejs setup ------
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); 


app.get("/", (req, res) => {
  res.render("index");
});

server.listen(port, () => {
  console.log("listening on port:", port);
});

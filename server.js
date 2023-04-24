const jsonServer = require("json-server");
const databaseFile = "database.json";
const server = jsonServer.create();
const router = jsonServer.router(databaseFile);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync(databaseFile);
const db = low(adapter);


server.use(middlewares);

server.use(jsonServer.bodyParser);


server.use(router);

/
server.listen(port, () => {
  console.log("Server is running on port " + port);
});

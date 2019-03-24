import { Sequelize } from "sequelize-typescript";
import { Bike } from "../api/models/bike.model";

import path from "path";

console.log("__dirname", path.join(__dirname + "../api/models/*.model.ts"));

const sequelize = new Sequelize({
    database: "stolenbikecase",
    dialect: "postgres",
    username: "postgres",
    password: "password",
    storage: ":memory:",
});

sequelize.addModels([Bike]);



// sequelize.addModels(["/home/yogi/my drive/work/express-app-with-typescript/dist/api/models"]);




export default sequelize;


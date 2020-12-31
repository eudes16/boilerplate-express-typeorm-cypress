import {createConnection} from "typeorm";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";
export const connection = createConnection({
    type: "postgres", 
    host: "localhost",
    port:  5432, // default port of postgres
    username: "postgres", // our created username, you can have your own user name
    password: "postgres", // our created username, you can have your own password
    database: "postgres", // our created database name, you can have your own
    entities: [
        // typeORM will not be able to create database table if we forget to put entity class name here..
        SuperHero, // our SuperHero entity class
        Power      // our Power entity class
    ],
    synchronize: true,
    logging: false
});

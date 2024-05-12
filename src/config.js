import {config} from "dotenv"; 
export const PORT =  process.env.PORT || 4000;
export const postgresConfig = {
    host: "localhost",
    database: "budget",
    port: 5432,
    user: "postgres",
    password: "82850406m"  
}

config();
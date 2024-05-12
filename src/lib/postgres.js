import { postgresConfig } from "#config";
import pg from "pg";
const {Pool} = pg;
export const pool = new Pool(postgresConfig)

export const fetchAll = async (query, ...params) => {
    const client = await pool.connect();
    try{
        const {rows} = await client.query(query, params ? params: null )
        return rows;
    }catch(error){
        console.log(error)
    }finally{
        client.release();
    }
}
export const fetch = async (query, ...params) => {
    const client = await pool.connect();
    try{
        const {rows:[row]} = await client.query(query, params ? params: null )
        return row;
    }catch(error){
        console.log(error)
    }finally{
        client.release();
    }
}
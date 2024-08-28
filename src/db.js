import { createPool } from "mysql2/promise";

export const  pool = createPool({
    host: 'root ',
    user: 'josema',
    password: 'josema',
    database: 'sarlaft',
    port: 3306
})


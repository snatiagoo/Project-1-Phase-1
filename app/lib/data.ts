import postgres from "postgres";
import { auth } from "@clerk/nextjs/server";
import { frictionLogData } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });


export async function getFrictionData(userId: string | null){

    const data = await sql<frictionLogData[]>` 
    SELECT id, userid, title, description, date, todo
    FROM friction_logs
    WHERE userid = ${userId}
    ORDER BY date DESC
    `;

    return data;
} 
// frictionData is List of friction_logs with frictionLogData shape (defined in definitions)







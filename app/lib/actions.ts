'use server';
import { z } from 'zod';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string()
});

const CreateLog = FormSchema.omit({id:true, date:true}); // fields the user doenst complete himself but are compelted automatically

export async function createLog (formData: FormData){
    const { title, description } = CreateLog.parse({
        title: formData.get('title'),
        description: formData.get('description'),
        //we only include non automatic fields (the ones completed by the user manually)
    });
     
    const date = new Date().toISOString().split('T')[0];

   await sql`
    INSERT INTO frictionLogs (title, description, date)
    VALUES (${title}, ${description}, ${date})
  `;
}
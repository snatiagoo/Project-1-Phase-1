'use server';
import { z } from 'zod';
import postgres from 'postgres';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
    id: z.number(),
    userid: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.string(),
    todo: z.string(),
});

const CreateLog = FormSchema.omit({id:true, userid:true, date:true}); // fields the user doenst complete himself but are compelted automatically

export async function createLog (formData: FormData){

    const { title, description, todo } = CreateLog.parse({
        title: formData.get('title'),
        description: formData.get('description'),
        todo: formData.get('todo'),
        //we only include non automatic fields (the ones completed by the user manually)
    });
     
    const date = new Date().toISOString().split('T')[0];
    const { userId: userid } = await auth();

   await sql`
    INSERT INTO friction_logs (userid, title, description, date, todo)
    VALUES (${userid}, ${title}, ${description}, ${date}, ${todo})
  `;
  revalidatePath('/dashboard');
  redirect('/dashboard');
  

}

export async function deleteLog(id: string){
    const { userId: userid } = await auth();
    await sql`
    DELETE FROM friction_logs
    WHERE userid = ${userid} AND id = ${id}
    `;

    revalidatePath('/dashboard');

    
    
}
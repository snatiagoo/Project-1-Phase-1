import { auth } from '@clerk/nextjs/server';



export default async function Dashboard(){

    const { userId: userid } = await auth();

    return(
        <main>
            <h1>Welcome to your dashboard! What happened today?</h1>

            <div> 

                a

            </div>

            <button className="">
                +
            </button>
        </main>


    )    
}
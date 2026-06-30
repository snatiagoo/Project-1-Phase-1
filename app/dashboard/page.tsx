import { getFrictionData } from '@/app/lib/data';
import DashboardComponent from '../ui/dashboard-component';
import { auth } from '@clerk/nextjs/server';
import { frictionLogData } from '../lib/definitions';




export default async function Dashboard(){

    const { userId: userid } = await auth();
    const data: frictionLogData[] = await getFrictionData(userid);
    return(
        <main>
            <DashboardComponent frictionData={data}/>
        </main>
        
    )    
}



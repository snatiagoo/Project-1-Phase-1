'use client';
import FrictionLogCard from './frictionLogCard';
import Link from 'next/link';
import { frictionLogData } from '../lib/definitions';
import { useState } from 'react';
import { deleteLog } from '../lib/serverActions';

export default function DashboardComponent({frictionData: initialData}: {frictionData: frictionLogData[]}){
    //we destructure it as we get an object props with the properties, not the array directly. the array is a single property, and only one here.

    const [updatedFrictionData, setFrictionData] = useState<frictionLogData[]>(initialData);

    async function handleDelete(id: string){
        // YES, an async fucntion inside a non async function / on client file.
        deleteLog(id);

        setFrictionData(updatedFrictionData => updatedFrictionData.filter(fD => fD.id !== id));

    
    }


    return(

        <div className = "p-10">

            <h1 className = "font-bold text-4xl mb-2 pb-5">
                Welcome to your dashboard! What happened today?
            </h1>
            <div className = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {updatedFrictionData.map(entry => (
                <FrictionLogCard key = {entry.id + entry.userid} frictionData={entry} handleDelete={handleDelete}/>
                ))}

            </div>
            
            <Link className = "fixed items-center justify-center w-10 h-10 flex bottom-14 right-14 text-4xl border-2 rounded-2xl z-10 text-purple-600 border-purple-600 bg-black" href = "/dashboard/create"> + </Link>
        </div>
    )    
}








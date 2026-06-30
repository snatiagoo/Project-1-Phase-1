
import { createLog } from '@/app/lib/serverActions';
import Link from 'next/link';


export default function Form(){
    return (
        <main>
            <h1 className = "flex items-center justify-center font-extrabold">Create a Friction Log</h1>
            <form className = "flex flex-col items-center justify-center gap-4 p-8" action={createLog}>
            <div>
                <input className = "border border-gray-400 rounded p-2 px-4 w-120 " placeholder='Log Title' name = "title" />
            </div>
                <textarea  className = "border border-gray-400 rounded p-2 py-3 w-250" placeholder='Friction Description' name = "description" />
                <input className = "border border-gray-400 rounded p-2 px-4 w-120 " placeholder='What should you do?' name = "todo" />
            <div className = "flex items-center justify-center gap-8">
                <Link className = "bg-purple-800 rounded-2xl flex items-center justify-center h-9 w-28" href="/dashboard">
                    Cancel
                </Link>
                <button className = "bg-purple-500 rounded-2xl h-9 w-28 flex justify-center items-center cursor-pointer" type="submit">Submit Log</button>

            </div>
        </form>
        </main>
        
    )
}

//submit className for button executes the form action.
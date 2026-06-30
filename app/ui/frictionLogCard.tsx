import { frictionLogData } from "../lib/definitions";





export default function FrictionLogCard({frictionData: frictionData, handleDelete: handleDelete} : {frictionData: frictionLogData, handleDelete: (id: string) => void}){



    return(

    <article className = "bg-purple-950 rounded-3xl p-5 flex flex-col gap-3">

        <h1 className = "font-bold text-lg text-white">{frictionData.title}</h1>

            <div className = "text-purple-200 text-sm">
                {frictionData.description}   
            </div>

            <div className = "text-purple-100 text-sm">
                {frictionData.todo}
            </div>
           

            <button onClick = {() => handleDelete(frictionData.id)} className = "self-start mt-auto rounded-lg bg-purple-700 px-3 py-1 text-sm text-white hover:bg-purple-600 cursor-pointer"> Delete </button>

    </article>
            
                  
    );

}

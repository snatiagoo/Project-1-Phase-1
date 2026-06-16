import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { SignInButton, SignUpButton } from '@clerk/nextjs'


export default async function Home() {
    const { userId } = await auth();
    if (userId) redirect('/dashboard');

    return(
         <main className="flex flex-col items-center justify-center min-h-screen text-center p-8">
            <h1 className="text-4xl font-bold p-4" >FrictionLog</h1>
            <p>Save your problems with ease</p>
            <div>
                <SignInButton>
                    <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                        Sign In
                    </button>
                </SignInButton>

                <SignUpButton>
                    <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                        Sign Up
                    </button>
                </SignUpButton>

            </div>
            
        </main>
    )

}

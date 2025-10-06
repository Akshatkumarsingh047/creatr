"use client"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Authenticated, Unauthenticated, AuthLoading, useQuery } from "convex/react";
import { useStoreUserEffect } from '@/convex/useStoreUserEffect';
 import { BarLoader } from "react-spinners";
 const Header = () => {
    const {isLoading,isAuthenticated}=useStoreUserEffect ()
   return (
     <header className='fixed top-6 w-full max-w-3xl px-4 left-1/2 transform -translate-x-1/2'>
        <div className='bg-white/10 backdrop-blur-md border border-white/20
        rounded-full px-4 py-3 sm:px-6 md:px-8 flex justify-between items-center '>
        <Unauthenticated>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Unauthenticated>
            <Authenticated>
              <UserButton />
            </Authenticated>
            {isLoading &&(<div className='
            fixed bottom-0 left-0 w-full z-40 flex justify-center'>
              <BarLoader color="#36d7b7" width={"95%"} />
            </div>)}
            </div>
            </header>
   )
 }
 
 export default Header
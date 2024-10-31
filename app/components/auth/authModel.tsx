import React from 'react'
import { Button, Dialog } from '../ui'
import { DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import SubmitButton from './Button'

const AuthModel = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Get Started</Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[360px]'>
                <DialogHeader className='flex justify-center items-center'>
                    <h3 className='font-semibold text-xl'>LogoNAme</h3>
                </DialogHeader>
                <DialogTitle className='hidden'>
                    <h1 className='hidden'>Authentication Modal</h1>
                </DialogTitle>
                <div className="flex flex-col gap-4 mt-1">
                    <form action={async()=>{
                        "use server";
                        
                    }}>
                        <SubmitButton type='submit' text='Sign in with Google' />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthModel
import React from 'react'
import { Button, Dialog } from '../ui'
import { DialogContent, DialogHeader, DialogTrigger } from '../ui/dialog'
import SubmitButton from './Button'
import { signIn } from '@/lib/auth'

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
                <div className="flex flex-col gap-4 mt-1">
                    <form action={async () => {
                        "use server";
                        await signIn("google");
                    }}>
                        <SubmitButton type='submit' text='Sign in with Google' />
                    </form>
                    <form action={async () => {
                        "use server";
                        await signIn("github");
                    }}>
                        <SubmitButton type='submit' text='Sign in with Github' />
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AuthModel
import '@/styles/globals.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
    description: 'Home of The Next App',
}

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            <h1 className='text-center'>Home</h1>
            <div>{children}</div>
        </>
    )
}



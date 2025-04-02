import { getAdmin } from '@/actions/actions'
import Header from '@/components/Header'
import { notFound } from 'next/navigation'
import React from 'react'

const Adminlayout = async () => {
    const admin = await getAdmin()

    if (!admin.authorized) {
        return notFound()
    }
    return (
        <div className='h-full'>
            <Header isAdminPage={true} />
        </div>
    )
}

export default Adminlayout

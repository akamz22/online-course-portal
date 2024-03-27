import React from 'react'
import { Search } from 'lucide-react'

const FilterData = () => {
    return (
        <div className='flex md:hidden justify-center p-2 rounded-md mb-4 bg-white'>
            <div className='flex md:gap-2 p-2 md:border md:rounded-md'>
                <Search className='h-5 w-5' />
                <input className='outline-none flex-grow pl-2 ' type="text" placeholder='Search...' />
            </div>
        </div>
    )
}

export default FilterData

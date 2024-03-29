'use client'
import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
const FilterData = ({ courseList, setCourseList }) => {
    const [search, setSearch] = useState('');
    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className='flex justify-center md:hidden p-2 rounded-md mb-4 bg-white'>
            <div className='flex md:gap-2 p-2 md:border md:rounded-md'>
                <Search className='h-5 w-5' />
                <input
                    className='outline-none flex-grow pl-2'
                    type="text"
                    placeholder='Search...'
                    value={search}
                    onChange={handleSearch} // Attach search functionality to input change
                />
            </div>
        </div>
    );
}

export default FilterData;

import React, { useState, useRef, useEffect } from 'react';
import { BellDot } from 'lucide-react';

const NotificationPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef(null);
    const [news, setNews] = useState([]);
    const [visibleCount, setVisibleCount] = useState(5);
    const showMoreArticles = () => {
        setVisibleCount(prevCount => prevCount + 5);
    };
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.error('Failed to fetch news:', error);
            }
        };

        fetchNews();
    }, []);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);
    // useEffect(() => {
    //     if (isOpen && popupRef.current) {
    //         const popupRect = popupRef.current.getBoundingClientRect();
    //         const isOverflowingRight = popupRect.right > window.innerWidth;
    //         // Dynamically adjust if the popup overflows the window width
    //         if (isOverflowingRight) {
    //             popupRef.current.style.right = '0';
    //             popupRef.current.style.left = 'auto';
    //         } else {
    //             popupRef.current.style.right = 'auto';
    //             popupRef.current.style.left = '0';
    //         }
    //     }
    // }, [isOpen, popupRef]);
    useEffect(() => {
        if (isOpen && popupRef.current) {
            const popupRect = popupRef.current.getBoundingClientRect();
            const isOverflowingRight = popupRect.right > window.innerWidth;
            const isOverflowingLeft = popupRect.left < 0;

            // Dynamically adjust if the popup overflows the window width
            // if (isOverflowingRight) {
                popupRef.current.style.right = '0';
                popupRef.current.style.left = 'auto';
            // } else if (isOverflowingLeft) {
                // popupRef.current.style.left = '0';
                // popupRef.current.style.right = 'auto';
            // } else {
                // Default to left positioning if there's enough space
                // popupRef.current.style.left = '0';
                // popupRef.current.style.right = 'auto';
            // }
        }
    }, [isOpen, popupRef]);

    return (
        <div className="relative inline-block">
            <div className="cursor-pointer" onClick={togglePopup}>
                <BellDot />
            </div>
            {isOpen && (
                <div
                    ref={popupRef}
                    className="absolute top-full left-0 bg-white rounded-lg shadow-md p-4 w-[16rem] md:w-[26rem] z-10"
                >
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-lg font-semibold">Notifications</div>
                        <button className="text-red-500 hover:underline" onClick={togglePopup}>
                            Close
                        </button>
                    </div>
                    <div className='space-y-4 overflow-auto max-h-[50vh] md:max-h-[70vh]'>
                        {news.slice(0, visibleCount).map((article, index) => (
                            <div key={index} className='flex gap-2 items-center '>
                                <div className="w-8 h-8 bg-primary rounded-full justify-center items-center flex-shrink-0 text-white">
                                    {/* Placeholder or icon can go here */}
                                </div>
                                <p className="flex-grow text-[16px] md:text-[18px] line-clamp-2">
                                    {article.title}
                                </p>
                                <img src={article.urlToImage || ''} alt="" className="w-20 h-10 object-cover bg-gray-600" />
                            </div>
                        ))}
                    </div>
                    {visibleCount < news.length && (
                        <div className='text-blue-700 underline cursor-pointer mt-2' onClick={showMoreArticles}>
                            Show More
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationPopup;

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/AppSlice';
import { YT_SEARCH_API } from '../utils/constant';

const Header = () => {
    const [searchQry, setSearchQry] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(YT_SEARCH_API + searchQry);
                if (!response.ok) {
                    throw new Error();
                }
                const data = await response.json();
                setSuggestion(data[1]);
            } catch (error) {
                console.error(error);
            }
        };

        const timer = setTimeout(() => fetchData(), 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQry]);

    const dispatch = useDispatch();

    const handleMenuChange = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='grid grid-flow-col shadow-md mt-3 cursor-pointer'>
            <div className='flex'>
                <img
                    className='h-8 px-2 m-2 cursor-pointer'
                    src="https://w7.pngwing.com/pngs/616/930/png-transparent-hamburger-button-computer-icons-menu-bar-line-thumbnail.png"
                    alt=""
                    onClick={() => handleMenuChange()}
                />

                <img
                    className='h-8 px-2 m-2'
                    src="https://w7.pngwing.com/pngs/24/227/png-transparent-youtube-logo-youtube-text-trademark-logo.png"
                    alt="Yt Logo"
                />
            </div>

            <div className='col-span-10 px-10 mt-1 ml-10 relative'>
                <div className='flex items-center'>
                    <input
                        className='w-1/2 border border-black rounded-l-full px-5 py-1 focus:outline-none'
                        type="text"
                        name='search'
                        value={searchQry}
                        onChange={(e) => setSearchQry(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}
                    />
                    <button className='border border-black bg-slate-200 rounded-r-full px-5 py-1 focus:outline-none'>🔍</button>
                </div>
                {showSuggestion && (
                    <div className='absolute bg-white py-2 px-1 w-[26rem] rounded-md border border-white-100'>
                        <ul>
                            {suggestion.map((sugData, index) => (
                                <li key={index} className='py-2 px-2 shadow-sm rounded hover:bg-gray-100'>🔍{sugData}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className='mt-2'>
                <img className='h-8' src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" />
            </div>
        </div>
    );
};

export default Header;

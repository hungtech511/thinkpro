import React from 'react';
import NavSlider from './NavSlider';

const Navigation = () => {
    return (
        <nav className="the-navigation sticky">
            <div className="container flex items-center">
                <div className="the-menu shrink-0" style={{ width: 130 }}>
                    <button className="flex items-center space-x-2 h-16 px-4 hover:bg-base-100 rounded-lg">
                        <i className="w-4 h-4 i-semi-descend"></i>
                        <span className="font-semibold text-md whitespace-nowrap">Danh mục</span>
                    </button>
                </div>
                <div style={{margin:"0 12px"}} className="w-[1px] h-10 bg-base-200"></div>
                <div className="the-menu" style={{width: 'calc(100% - 130px - 12px * 2)'}}>
                    <NavSlider></NavSlider>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
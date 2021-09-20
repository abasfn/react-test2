import React, { useState } from 'react';

type arey = {
    title: string;
    icone: string;
}
export type menu = {
    title?: string;
    icone1?: string;
    icone2?: string;
    line?: string;
    submenuTitle?: arey[];
}
type MenuType = {
    model?: menu[];
}

const Menu = (props: MenuType) => {
    const [show, setshow] = useState<number>(-1)
    const onClick = (index: number) => {
        if (show === index) {
            setshow(-1);
            return
        }
        setshow(index)
    }
    return (
        <ul className='shadow-2xl rounded-md pt-3 pb-3'>
            {props.model?.map((item, index) => {
                return (
                    <div className=''>
                        <li onClick={() => onClick(index)} className='flex pt-1 pb-1 pl-4 pr-4 justify-between list relative'>
                            <div className='flex items-center gap-2'>
                                <img className='w-6' src={item.icone1} alt="" />
                                <p className='text-sm text-gray-800'>{item.title}</p>
                            </div>
                            <div>
                                <img src={item.icone2} alt="" />
                            </div>
                            {index === show && <div className='absolute shadow-2xl rounded-md pt-3 pb-3 -right-72 top-0 w-full'>
                                {item.submenuTitle?.map(item => {
                                    return (
                                        <div className='pt-1 flex gap-2 items-center pb-1 pl-4 pr-4 list'>
                                            <img className='w-6' src={item.icone} alt="" />
                                            <p className='text-sm text-gray-800'>{item.title}</p>
                                        </div>
                                    )
                                })}
                            </div>}
                        </li>
                        {item.line && <div className='h-px mt-3 mb-3 bg-gray-400'> </div>}
                    </div>
                )
            })}
        </ul>
    );
};

export default Menu;
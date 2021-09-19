import React, { useState } from 'react';
import { isTemplateExpression } from 'typescript';
type model = {
    icone?: string;
    firstTitle: string;
    secondTitle?: string;
    color?: string;
    icone2?: string;
    onClick?: () => void;
}
type TitleType = {
    medel: model[];
}
const Title = (props: TitleType) => {
    return (
        <div className='space-y-1'>
            {props.medel.map(itme => {
                const firstTitle = ('text-sm') + (' ') + (itme.color);
                return (
                    <div onClick={itme.onClick} className='flex pt-1 pb-1 pr-4 pl-4 justify-between list'>
                        <div className='flex justify-center items-center gap-2'>
                            <div className='w-4'>
                                <img src={itme.icone} alt="" />
                            </div>
                            <p className={firstTitle}>{itme.firstTitle}</p>
                        </div>
                        {itme.secondTitle &&
                            <div className='margin'>
                                <p className={firstTitle}>{itme.secondTitle}</p>
                            </div>}
                        {itme.icone2 &&
                            <img src={itme.icone2} alt="" />
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default Title;
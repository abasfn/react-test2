import React from 'react';
import Title from '../component/title/title.component';
import icone1 from '../../src/images/Emoticon/icons8-cut-24.png';
import icone2 from '../../src/images/Emoticon/icons8-copy-24.png';
import icone3 from '../../src/images/Emoticon/icons8-paste-24.png';
import icone5 from '../../src/images/Emoticon/icons8-hint-24.png';
import icone6 from '../../src/images/Emoticon/icons8-link-24.png';
import icone7 from '../../src/images/Emoticon/icons8-clear-filters-24.png';
import Line from '../component/line/line.component';

const Page1 = () => {
    const data = [
        { icone: icone1, firstTitle: 'Cut', secondTitle: 'ctrl+X', color: 'text-gray-400' },
        { icone: icone2, firstTitle: 'Copy', secondTitle: 'ctrl+C', color: 'text-gray-400' },
        { icone: icone3, firstTitle: 'Paste', secondTitle: 'ctrl+V', color: 'text-gray-800' },
        { icone: icone3, firstTitle: 'Paste without formatting', secondTitle: 'ctrl+shift+V' },
        { firstTitle: 'Delete', color: 'text-gray-400', id: 4 },
    ]
    const data2 = [
        { icone: icone5, firstTitle: 'Suggest edits', color: 'text-gray-400' },
    ]
    const data3 = [
        { icone: icone6, firstTitle: 'Link', secondTitle: 'ctrl+K', color: 'text-gray-800' },
    ]
    const data4 = [
        { firstTitle: 'Select all matching text', secondTitle: 'ctrl+x', color: 'text-gray-800' },
        { icone: icone7, firstTitle: 'Clear formatting', secondTitle: 'ctrl+x', color: 'text-gray-800' },
    ]
    return (
        <div className='max-with'>
            <div className='w-1/4 rounded m-auto shadow-2xl mt-10 pt-2 pb-2 max-width'>
                <Title medel={data} />
                <Line />
                <Title medel={data2} />
                <Line />
                <Title medel={data3} />
                <Line />
                <Title medel={data4} />
            </div>
        </div>
    );
};

export default Page1;
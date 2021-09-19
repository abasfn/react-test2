import React, { useState } from 'react';
import Title from '../component/title/title.component';
import icone1 from '../../src/images/Emoticon/icons8-move-24.png';
import icone2 from '../../src/images/Emoticon/icons8-add-folder-24.png';
import icone3 from '../../src/images/Emoticon/icons8-user-24.png';
import icone4 from '../../src/images/Emoticon/icons8-link-24.png';
import icone5 from '../../src/images/Emoticon/icons8-hint-24.png';
import icone6 from '../../src/images/Emoticon/icons8-open-parcel-24.png';
import icone7 from '../../src/images/Emoticon/icons8-star-24.png';
import icone8 from '../../src/images/Emoticon/icons8-edit-file-24.png';
import icone9 from '../../src/images/Emoticon/icons8-color-palette-24.png';
import icone10 from '../../src/images/Emoticon/icons8-search-24.png';
import icone11 from '../../src/images/Emoticon/icons8-download-24.png';
import icone12 from '../../src/images/Emoticon/icons8-delete-trash-24.png';
import icone13 from '../../src/images/Emoticon/icons8-forward-24.png';
import icone14 from '../../src/images/Emoticon/icons8-plus-math-24.png';
import icone15 from '../../src/images/Emoticon/icons8-ask-question-24.png';
import Line from '../component/line/line.component';
import LineFull from '../component/linefull/linefull.componet';

const Page2 = () => {
    const [show, setshow] = useState<Boolean>(false);
    const onClick = () => {
        setshow(!show)
    }
    const data = [
        { icone: icone1, firstTitle: 'Open with', color: 'text-gray-800', icone2: icone13, onClick: onClick },
        { icone: icone2, firstTitle: 'New folder', color: 'text-gray-800' },
    ]
    const data2 = [
        { icone: icone3, firstTitle: 'Share', color: 'text-gray-800' },
        { icone: icone4, firstTitle: 'Get link', color: 'text-gray-800' },
        { icone: icone5, firstTitle: 'Add shortcut to Drive', color: 'text-gray-800' },
        { icone: icone6, firstTitle: 'Move to', color: 'text-gray-800' },
        { icone: icone7, firstTitle: 'Add to Starred', icone2: icone15, color: 'text-gray-800' },
        { icone: icone8, firstTitle: 'Rename', color: 'text-gray-800' },
        { icone: icone9, firstTitle: 'Change color', color: 'text-gray-800' },
        { icone: icone10, firstTitle: 'Search withhin 003', color: 'text-gray-800' },
    ]
    const data3 = [
        { icone: icone11, firstTitle: 'Download', secondTitle: 'ctrl+K', color: 'text-gray-800' },
    ]
    const data4 = [
        { icone: icone12, firstTitle: 'Remove', secondTitle: 'ctrl+x', color: 'text-gray-800' },
    ]
    const data5 = [
        { icone: icone14, firstTitle: 'Connect more apps',  color: 'text-gray-800' },
    ]
    return (
        <div className='max-with flex justify-center  mb-10'>
            <div className='w-1/4 rounded shadow-2xl mt-10 pt-4 pb-4 max-width'>
                <Title medel={data} />
                <LineFull />
                <Title medel={data2} />
                <LineFull />
                <Title medel={data3} />
                <LineFull />
                <Title medel={data4} />
            </div>
            <div className='relative w-1/4 '>
            {show === true &&
                <div className='drpdown shadow-2xl absolute left-0 top-0 w-full rounded mt-14 flex items-center'>
                <Title medel={data5} />
                </div>
            }
            </div>
        </div>
    );
};

export default Page2;
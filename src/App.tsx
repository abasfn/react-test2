import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu, { menu } from './page/menu1';
import icone1 from '../src/images/Emoticon/icons8-move-24.png';
import icone2 from '../src/images/Emoticon/icons8-forward-24.png';
import icone3 from '../src/images/Emoticon/icons8-add-folder-24.png';
import icone4 from '../src/images/Emoticon/icons8-user-24.png';
import icone5 from '../src/images/Emoticon/icons8-link-24.png';
import icone6 from '../src/images/Emoticon/icons8-move-24.png';
import icone7 from '../src/images/Emoticon/icons8-open-parcel-24.png';
import icone8 from '../src/images/Emoticon/icons8-star-24.png';
import icone9 from '../src/images/Emoticon/icons8-edit-file-24.png';
import icone10 from '../src/images/Emoticon/icons8-color-palette-24.png';
import icone11 from '../src/images/Emoticon/icons8-search-24.png';
import icone12 from '../src/images/Emoticon/icons8-download-24.png';
import icone13 from '../src/images/Emoticon/icons8-delete-trash-24.png';
import icone14 from '../src/images/Emoticon/icons8-ask-question-24.png';
import icone15 from '../src/images/Emoticon/icons8-cut-24.png';
import icone16 from '../src/images/Emoticon/icons8-copy-24.png';
import icone18 from '../src/images/Emoticon/icons8-ask-question-24.png';
import icone20 from '../src/images/Emoticon/icons8-hint-24.png';
import icone21 from '../src/images/Emoticon/icons8-link-24.png';
import icone23 from '../src/images/Emoticon/icons8-clear-filters-24.png';
import icone24 from '../src/images/Emoticon/icons8-plus-math-24.png';
function App() {
  const [show, setshow] = useState<Boolean>(false);
  const [show1, setshow1] = useState<Boolean>(false);
  const onClick = () => {
    setshow(!show)
  }
  const onClick2 = () => {
    setshow1(!show1)
  }
  const data: menu[] = [
    { title: 'Open with', icone1: icone1, icone2: icone2, submenuTitle: [{ title: 'Current more apps',icone:icone24 }] },
    { title: 'New folder', icone1: icone3, line: 'true' },
    { title: 'Share', icone1: icone4 },
    { title: 'Get link', icone1: icone5 },
    { title: 'Add shortcut Drive', icone1: icone6, icone2: icone14 },
    { title: 'Move to', icone1: icone7 },
    { title: 'Add to Starred', icone1: icone8 },
    { title: 'Rename', icone1: icone9 },
    { title: 'Change Color', icone1: icone10 },
    { title: 'Search Within 003', icone1: icone11, line: 'true' },
    { title: 'Download', icone1: icone12, line: 'true' },
    { title: 'Remove', icone1: icone13 },
  ]
  const data2: menu[] = [
    { title: 'Cut', icone1: icone15 },
    { title: 'Copy', icone1: icone16 },
    { title: 'paste', icone1: icone16 },
    { title: 'paste without formatting', icone1: icone18 },
    { title: 'Delete', line: 'true' },
    { title: 'suggest edits', icone1: icone20, line: 'true' },
    { title: 'Link', icone1: icone21, line: 'true' },
    { title: 'Select all matching text' },
    { title: 'Create formatting', icone1: icone23 },
  ]
  return (
    <div className="App max-with">
      <div className='mt-8 flex justify-center gap-2'>
        <button onClick={onClick} className='bg-red-800 p-4 text-white text-xl rounded-md'>add 1</button>
        <button onClick={onClick2} className='bg-red-800 p-4 text-white text-xl rounded-md'>add 2</button>
      </div>
      {show === true && <div className='m-auto w-1/4 mt-12'>
        <Menu model={data} />
      </div>}
      {show1 === true && <div className='m-auto w-1/4 mt-12'>
        <Menu model={data2} />
      </div>}
    </div>
  );
}

export default App;

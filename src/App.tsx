import {useState} from 'react';
import {DungeonLevel} from './dungeon/dungeon';
import {DungeonSprite, SpriteProps} from './dungeon/dungeonSprite';


function App() 
{
  document.body.style.background = 'green';
 // return <div><DungeonSprite type='Book'/></div>;
  return <DungeonLevel/>;
 
}

export default App

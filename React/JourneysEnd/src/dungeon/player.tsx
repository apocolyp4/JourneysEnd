
import {useState, useEffect} from 'react';
import {DungeonSprite, SpriteProps} from './dungeonSprite';
import {DungeonBlockType, DungeonBlock} from './dungeonBlock';
import {Random, Position} from './shared';
import {dungeonWidth, dungeonHeight} from './dungeon';

export type Character = 
{
	name: string;
	gold: number;
	strength: number;
	x: number;
	y: number;
	key: boolean;
	action: string;
}


export function createPlayer(newName: string, dungeonMap: DungeonBlockType[][])
{
    /* Add the player*/
    var xPos: number;
    var yPos: number;

    do 
    {
        xPos = Random(0, dungeonWidth - 3) + 1;
        yPos = Random(0, dungeonHeight - 2) + 1;
        // do something
    } 
    while(dungeonMap[xPos][yPos].value != 32);

    var player: Character = {name:newName, x:xPos, y:yPos, gold:0, strength:32, key:false, action:"Up"}

    return player;
}

export function setCharacterGold(player: Character, gold: number)
{
    player.gold = gold;
    return player;
}

export function updateCharacter(player: Character, action: string, dungeonMap: DungeonBlockType[][])
{
    if(action == "Up" && player.y > 0)
    {
        if(dungeonMap[player.x][player.y - 1].traversable)
        {
            player.y -= 1;
        }
    }
    else if(action == "Down" && player.y < dungeonHeight - 1)
    {
        if(player.y > 0 && dungeonMap[player.x][player.y + 1].traversable)
        {
            player.y += 1;
        }
    }
    else if(action == "Left" && player.x > 0)
    {
        if(dungeonMap[player.x - 1][player.y].traversable)
        {
            player.x -= 1;
        }
    }
    else if(action == "Right" && player.x < dungeonWidth - 1)
    {
        if(dungeonMap[player.x + 1][player.y].traversable)
        {
            player.x += 1;
        }
    }

    return player;
}

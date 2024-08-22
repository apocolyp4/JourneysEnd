import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useState, useEffect} from 'react';
import {DungeonSprite, SpriteProps} from './dungeonSprite';


export type BlockProps =
{
    type: string;
    height: number;
    width: number;
    playerLocation: boolean;
    visible: boolean;
}

export type DungeonBlockType = 
{
	value: number;
	blockType: string;
	visible: boolean;
	traversable: boolean;
}


export function DungeonBlock(prop: BlockProps)
{
    if(prop.playerLocation)
    {
        return ( <Grid style={{width:prop.width, height:prop.height}}><DungeonSprite type={"Player"}/></Grid>);
    }

    if(prop.type == "Wall" || !prop.visible)
    {
        return (<Grid style={{backgroundColor:'black', width:prop.width, height:prop.height}}></Grid>);
    }
    else if(prop.type == "Floor" || prop.type == "Trap")
    {
        return (<Grid style={{backgroundColor:'white', width:prop.width, height:prop.height}}></Grid>);
    }


    return (<Grid style={{width:prop.width, height:prop.height}}><DungeonSprite type={prop.type}/></Grid>);
}
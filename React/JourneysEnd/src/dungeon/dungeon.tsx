import React from 'react'
import {useCallback, useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import {DungeonBlockType, DungeonBlock} from './dungeonBlock';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useStopwatch, StopwatchResult} from 'react-timer-hook';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import useKeyboardControl from "react-keyboard-control";
import { KeyboardHook, TypedKey } from "react-keyboard-control";
import {createDungeon, Dungeon, updateDungeonMap} from './dungeonMap';
import {Character, createPlayer, updateCharacter, setCharacterGold} from './player';
import {ItemValue} from './shared';
import {getGold} from './gold';
import {getGems} from './gems';
//import {getBook} from './book';

export const dungeonWidth: number = 32;
export const dungeonHeight: number = 32;


export interface Pressed
{
    action: string;
    code: string;
    key: string;
    name: string;
    shift: string;
    alt: string;
    ctrl: string;
    meta: string;
}

export function DungeonLevel()
{
    const [dungeon, setDungeon] = useState((createDungeon()));
    const [action, setAction] = useState("Idle");
    const [player, setPlayer] = useState((createPlayer("David", dungeon.map)));
    const [message, setMessage] = useState("");

    useEffect(() => 
    { 
        for (let i = player.x - 1; i <= player.x + 1; i++)
        {
            dungeon.map[i][player.y].visible = true;
            dungeon.map[i][player.y - 1].visible = true;
        }
    },[]);

    useEffect(() => 
    { 
        for (let i = player.x - 1; i <= player.x + 1; i++)
        {
            dungeon.map[i][player.y].visible = true;
            dungeon.map[i][player.y - 1].visible = true;
        }
    },[player]);

    useEffect(() => 
    {
        setPlayer(updateCharacter(player, action, dungeon.map));

        if(action != "Idle")
        {
            setMessage("");
            if (dungeon.map[player.x][player.y].blockType == "Gold")
            {
                var itemValue = getGold();
                setPlayer(setCharacterGold(player, player.gold + itemValue.value));
                setMessage(itemValue.message);
            }

            if (dungeon.map[player.x][player.y].blockType == "Gem")
            {
                var itemValue = getGems();
                setPlayer(setCharacterGold(player, player.gold + itemValue.value));
                setMessage(itemValue.message);
            }

            if (dungeon.map[player.x][player.y].blockType == "Book")
            {
                var itemValue = getBook();
                //setPlayer(setCharacterGold(player, player.gold + itemValue.value));
                setMessage(itemValue.message);
            }

            if(action == "Up")
            {
                for (let i = player.x - 1; i <= player.x + 1; i++)
                {
                    dungeon.map[i][player.y].visible = true;
                    dungeon.map[i][player.y - 1].visible = true;
                }
            }

            if(action == "Down")
            {
                for (let i = player.x - 1; i <= player.x + 1; i++)
                {
                    dungeon.map[i][player.y].visible = true;
                    dungeon.map[i][player.y + 1].visible = true;
                }              
            }
    
            if(action == "Left")
            {
                for (let i = player.y - 1; i <= player.y + 1; i++)
                {
                    dungeon.map[player.x - 1][i].visible = true;
                    dungeon.map[player.x][i].visible = true;
                }            
            }

            if(action == "Right")
            {
                for (let i = player.y - 1; i <= player.y + 1; i++)
                {
                    dungeon.map[player.x + 1][i].visible = true;
                    dungeon.map[player.x][i].visible = true;
                }              
            }

            
            setAction("Idle");
        }

        setDungeon(updateDungeonMap(player, action, dungeon));
    },);


    const keyboardHooks: KeyboardHook[] = [
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "w" },
            callback: () => setAction("Up"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "7" },
            callback: () => setAction("Up"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "s" },
            callback: () => setAction("Down"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "6" },
            callback: () => setAction("Down"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "a" },
            callback: () => setAction("Left"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "5" },
            callback: () => setAction("Left"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "d" },
            callback: () => setAction("Right"),
        },
        {
            allowOnTextInput: true,
            keyboardEvent: { key: "8" },
            callback: () => setAction("Right"),
        },
      ];
     
    const currentSequence: TypedKey[] = useKeyboardControl(keyboardHooks, 'keyup');


    //virtual keyboard presses
    const onKeyPress = (button: string) => 
    {
        if(button == 'w' || button == '7')
        {
            setAction("Up");
        }

        if(button == 's' || button == '6')
        {
            setAction("Down");
        }

        if(button == 'a' || button == '5')
        {
            setAction("Left");
        }

        if(button == 'd' || button == '8')
        {
            setAction("Right");
        }
    }


   // alignSelf: 'baseline',
    return (
        
        <div style={{alignSelf: 'center', width:640}}>

            <Container style={{justifyContent: 'center'}}>

                <Container style={{fontSize:30, alignSelf: 'center', width:640, height: 40, backgroundColor:'black'}}>
                <Container style={{position: 'absolute', left: 120, width:200, height:40, color:'yellow'}}>Gold : {player.gold}</Container>
                <Container style={{position: 'absolute', left: 350, width:200, height:40, color:'cyan'}}>Strength : {player.strength}</Container>
                <Container style={{backgroundColor:'black', position: 'relative', left: 0, top: 460, width:560, height:80, color:'white'}}>{message}</Container>
                </Container>

                <Grid container spacing={0} columns={dungeonHeight} width={640} height={380}>
                {
                    dungeon.map.map((blocks, y) => 
                        blocks.map((block, x) => 
                        (
                            <DungeonBlock type={dungeon.map[x][y].blockType} width={20} height={20} visible={dungeon.map[x][y].visible} playerLocation={x == player.x && y == player.y}/>
                        )
                ))}
                </Grid>
            </Container>

            <Container style={{position: 'absolute', left:0, top:550, width:665}}>
                <Keyboard syncInstanceInputs={true} physicalKeyboardHighlight={false} onKeyPress={onKeyPress}/>
            </Container>

        </div>
    );
}

<style type="text">
{`
    .btn-flat {
    background-color: purple;
    color: white;
    }

    .btn-xxl {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    }
`}
</style>


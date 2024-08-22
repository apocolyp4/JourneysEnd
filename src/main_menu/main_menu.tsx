import React from 'react'
import {useState} from 'react';
import ReactPlayer from 'react-player/lazy'

export function MainMenu()
{
    return (
        <div className='player-wrapper'>
            <ReactPlayer
                url= './mainmenu.mp4'
                width='100%'
                height='100%'
                controls = {true}
            />
        </div>
    );
}


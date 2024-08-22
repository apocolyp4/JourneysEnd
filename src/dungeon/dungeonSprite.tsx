
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {drawGold} from './gold';
import {drawGem} from './gems';

type DungeonSprite = 
{
    pixels: number[][];
}

export type SpriteProps =
{
    type: string;
}

function clearPixels()
{
    var pixels: number[][] = Array.from(Array(10), () => new Array(10));

    for(let x = 0; x < 10; x++)
    {
        for(let y = 0; y < 10; y++)
        {
            pixels[x][y] = 0;
        }
    }

    return pixels;
}


function drawWall()
{
    var pixels: number[][] = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                              [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

    return pixels;
}


function drawFloor()
{
    var pixels: number[][]=[[7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]];
    return pixels;
}


function drawBottle()
{
    var pixels: number[][]=[[7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 7, 3, 3, 7, 7, 7, 7],
                            [7, 7, 7, 7, 3, 3, 7, 7, 7, 7],
                            [7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 3, 3, 3, 3, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]];
    return pixels;
}


function drawBook()
{
    var pixels: number[][]=[[7, 7, 7, 0, 0, 7, 7, 7, 7, 7],
                            [7, 7, 0, 7, 7, 0, 7, 7, 7, 7],
                            [7, 0, 7, 7, 7, 7, 0, 7, 7, 7],
                            [0, 0, 0, 7, 7, 7, 7, 0, 7, 7],
                            [7, 0, 0, 0, 7, 7, 7, 7, 0, 7],
                            [7, 7, 0, 0, 0, 7, 7, 0, 7, 7],
                            [7, 7, 7, 0, 0, 0, 0, 7, 0, 7],
                            [7, 7, 7, 7, 0, 0, 0, 0, 7, 7],
                            [7, 7, 7, 7, 7, 0, 0, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]];
    return pixels;
}


function drawKey()
{
    var pixels: number[][]=[[7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 0, 0, 7, 7, 7, 7, 7, 7],
                            [7, 0, 7, 7, 0, 0, 0, 0, 0, 7],
                            [7, 7, 0, 0, 7, 7, 0, 0, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]];
    return pixels;
}



function drawExit()
{
    var pixels: number[][]=[[6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
                            [6, 6, 6, 0, 6, 6, 0, 6, 6, 6],
                            [6, 6, 6, 0, 6, 6, 0, 6, 6, 6],
                            [6, 0, 0, 0, 0, 0, 0, 0, 0, 6],
                            [6, 6, 6, 0, 6, 6, 0, 6, 6, 6],
                            [6, 6, 6, 0, 6, 6, 0, 6, 6, 6],
                            [6, 0, 0, 0, 0, 0, 0, 0, 0, 6],
                            [6, 6, 6, 0, 6, 6, 0, 6, 6, 6],
                            [6, 6, 6, 0, 6, 6, 0, 6, 6, 6],
                            [6, 6, 6, 6, 6, 6, 6, 6, 6, 6]];
    return pixels;
}

function drawPlayer()
{
    var pixels: number[][]=[[7, 7, 7, 1, 1, 1, 1, 7, 7, 7],
                            [7, 7, 7, 1, 1, 1, 1, 7, 7, 7],
                            [7, 7, 7, 1, 1, 1, 1, 7, 7, 7],
                            [7, 7, 7, 7, 1, 1, 7, 7, 7, 7],
                            [7, 1, 1, 1, 1, 1, 1, 1, 1, 7],
                            [7, 1, 7, 7, 1, 1, 7, 7, 1, 7],
                            [7, 7, 7, 7, 1, 1, 7, 7, 7, 7],
                            [7, 7, 7, 1, 7, 7, 1, 7, 7, 7],
                            [7, 7, 1, 1, 7, 7, 1, 1, 7, 7],
                            [7, 7, 1, 1, 7, 7, 1, 1, 7, 7]];
    return pixels;
}


function drawTrap()
{
    return drawFloor();
}


function drawSprite(type: string)
{
    if(type == "Floor")
    {
        return drawFloor();
    }
    else if(type == "Player")
    {
        return drawPlayer();
    }
    else if(type == "Potion")
    {
        return drawBottle();
    }
    else if(type == "Book")
    {
        return drawBook();
    }
    else if(type == "Key")
    {
        return drawKey();
    }
    else if(type == "Exit")
    {
        return drawExit();
    }
    else if(type == "Gem")
    {
        return drawGem();
    }
    else if(type == "Gold")
    {
        return drawGold();
    }
    else
    {
        return drawWall();
    }
}

function getSpriteColorRGB(pixels: number[][])
{
    var pixelsRGB: string[][] = Array.from(Array(10), () => new Array(10));

    for(let y = 0; y < 10; y++)
    {
        for(let x = 0; x < 10; x++)
        {
            pixelsRGB[x][y] = getSpriteColor(pixels[x][y]); 
        }
    }

    return pixelsRGB;
}

function getSpriteColor(id: number)
{
    //console.log("id " + id);
    //Black
    if(id == 0)
    {
        return 'rgb(0, 0, 0)';
    }
    //Blue
    else if (id == 1)
    {
        return 'rgb(0, 0, 255)';
    }
    //Red
    else if (id == 2)
    {
        return 'rgb(255, 0, 0)';
    }
    //Magenta
    else if (id == 3)
    {
        return 'rgb(255, 0, 255)';
    }
    //Green
    else if (id == 4)
    {
        return 'rgb(0, 255, 0)';
    }
    //Cyan
    else if (id == 5)
    {
        return 'rgb(0, 255, 255)';
    }
    //Yellow
    else if (id == 6)
    {
        return 'rgb(255, 255, 0)';
    }
    //White
    else if (id == 7)
    {
        return 'rgb(255, 255, 255)';
    }
    else
    {
        return 'rgb(0, 0, 0)';
    }
}

export function DungeonSprite(prop: SpriteProps)
{
    var pixels: number[][] = drawSprite(prop.type);
    var pixelsRGB: string[][] = getSpriteColorRGB(pixels);

    return (
        <Grid container spacing={0} columns={11} width={20} height={20}>
        {
            pixelsRGB.map((pixelsRGBRow, y) => 
            pixelsRGBRow.map((pixelRGB, x) => 
            (
                <Grid key={x.toString() + y.toString()} style={{backgroundColor:pixelRGB, width:2, height:2}}></Grid>
            )
        ))}
        </Grid>
    );

}
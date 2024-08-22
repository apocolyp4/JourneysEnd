import {Random, ItemValue} from './shared';

export function drawBook()
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


export function getBook()
{
   
	var roll = Random(1, 4);


    let message: string = "";

    if(roll == 1)
    {
        message = "You find a book. It shows where the exit to this level lies.";
    }
    else if(roll == 2)
    {
        message = "You find a book. It shows where the gold on this level lies.";
    }
    else if(roll == 3)
    {
        message = "You find a book. It shows where the gems on this level lie.";
    }
    else if(roll == 4)
    {
        message = "You find a book. It shows where the potions on this level lie.";
    }

    var itemValue: ItemValue = {value:roll, message:message};

    return itemValue;
}

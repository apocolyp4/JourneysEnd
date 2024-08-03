import {Random, ItemValue} from './shared';

export function drawGem()
{
    var pixels: number[][]=[[7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 1, 1, 1, 1, 1, 7, 7, 7],
                            [7, 1, 1, 7, 7, 7, 1, 1, 7, 7],
                            [7, 1, 7, 1, 1, 1, 7, 1, 7, 7],
                            [7, 7, 1, 7, 7, 7, 1, 7, 7, 7],
                            [7, 7, 7, 1, 7, 1, 7, 7, 7, 7],
                            [7, 7, 7, 7, 1, 7, 7, 7, 7, 7]];
    return pixels;
}


export function getGems()
{

	var gem: number = (8-((1/10)))/5 * (Random(1, 29) + 29);
    gem = Math.floor(gem);
    var message: string = "You find a gem worth " + gem + " gold pieces.";
    var itemValue:ItemValue = {value:gem, message:message};

    return itemValue;
}

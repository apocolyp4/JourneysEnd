import {Random, ItemValue} from './shared';

export function drawGold()
{
    var pixels: number[][]=[[7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
                            [7, 7, 2, 2, 2, 2, 2, 2, 7, 7],
                            [7, 7, 7, 2, 2, 2, 2, 2, 7, 7],
                            [7, 7, 7, 7, 2, 2, 7, 7, 7, 7],
                            [7, 2, 2, 2, 2, 2, 2, 2, 7, 7],
                            [2, 2, 2, 2, 2, 2, 2, 2, 2, 7],
                            [2, 2, 2, 2, 2, 2, 2, 2, 2, 7],
                            [7, 2, 2, 2, 2, 2, 2, 2, 7, 7],
                            [7, 7, 2, 2, 2, 2, 2, 2, 7, 7],
                            [7, 7, 7, 7, 7, 7, 7, 7, 7, 7]];
    return pixels;
}


export function getGold()
{
   
	var gold: number = (8-((1/10)))/5 * (Random(1, 20) + 20);
    gold = Math.floor(gold);
    var message: string = "You find " + gold + " gold pieces.";

    var itemValue: ItemValue = {value:gold, message:message};

    return itemValue;
}

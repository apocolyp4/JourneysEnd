import {DungeonBlockType, DungeonBlock} from './dungeonBlock';
import {Random, Position} from './shared';
import {dungeonWidth, dungeonHeight} from './dungeon';
import {Character} from './player';


export type Dungeon = 
{
    map: DungeonBlockType[][];
    gold: Position[];
    goldCount: number;
    gems: Position[];
    gemCount: number;
    potions: Position[];
    potionCount: number;
    key: Position;
    exit: Position;
}

export function resetDungeonMap()
{
    var dungeonMap: DungeonBlockType[][] = Array.from(Array(dungeonWidth), () => new Array(dungeonHeight));

    for(let x = 0; x < dungeonWidth; x++)
    {
        for(let y = 0; y < dungeonHeight; y++)
        {
            dungeonMap[x][y] = {value:0, blockType:"Wall", visible:false, traversable:false};
        }
    }

    return dungeonMap;
}


export function createDungeon()
{
    const maxItems: number = 10;
    const rooms: number = 6;
    var items = Array.from(Array(maxItems));
    var dungeon: Dungeon = {
        map: resetDungeonMap(), 
        gold:items,
        goldCount:0, 
        gems:items, 
        gemCount:0, 
        potions:items, 
        potionCount:0, 
        key:{x:0, y:0}, 
        exit:{x:0, y:0}
    };


    for (let roomId = 0 ; roomId < rooms; roomId++)
    {
		var roomWidth: number = Random(0, 5) + 4;
		var roomHeight: number = Random(0, 4) + 2;
        var roomX: number = 0;
        var roomY: number = 0;
	
		if (roomId < 3)
        {
            roomX = (Random(0, 2) + 3) + (roomId * 8);
            roomY = Random(0, 3) + 2;
        }
		
		else
        {
            roomX = (Random(0, 2) + 3) + ((roomId - 3) * 8);
            roomY = Random(0, 4) + 9;
        }

        for (let yPos = roomY; yPos <= roomY + roomHeight; yPos++)
        {
            for (let xPos = roomX; xPos <= roomX + roomWidth; xPos++)
            {
                //Add Room floor			
                if (dungeon.map[xPos][yPos].blockType == "Wall")
                {
					dungeon.map[xPos][yPos].blockType = "Floor";
					dungeon.map[xPos][yPos].value = 32;
					dungeon.map[xPos][yPos].traversable = true;
					
					var item = Random(0, 149);

                    //Add book
					if (item == 69)
                    {
                        dungeon.map[xPos][yPos].value = 154;
                        dungeon.map[xPos][yPos].blockType = "Book";
                    }
                    //Add trap
					else if (item == 78 || item == 123 || item == 139)
                    {
                        dungeon.map[xPos][yPos].value = 5;
                        dungeon.map[xPos][yPos].blockType = "Trap";
                    }
                    //Add Bottle
					else if (item == 7 || item == 55)
                    {
                        if(dungeon.potionCount < maxItems)
                        {
                            dungeon.map[xPos][yPos].value = 151;
                            dungeon.map[xPos][yPos].blockType = "Potion";
                            dungeon.potions[dungeon.potionCount] = {x:xPos, y:yPos};
                            dungeon.potionCount += 1;
                        }
                    }
                    //Add Gold
					else if (item == 30 || item == 34 || item == 45 || item == 90)
                    {
                        if(dungeon.goldCount < maxItems)
                        {
                            dungeon.map[xPos][yPos].value = 152;
                            dungeon.map[xPos][yPos].blockType = "Gold";
                            dungeon.gold[dungeon.goldCount] = {x:xPos, y:yPos};
                            dungeon.goldCount += 1;
                        }
                    }
                    //Add Gem
					else if (item == 15 || item == 85)
                    {
                        if(dungeon.gemCount < maxItems)
                        {
                            dungeon.map[xPos][yPos].value = 153;
                            dungeon.map[xPos][yPos].blockType = "Gem";
                            dungeon.gems[dungeon.gemCount] = {x:xPos, y:yPos};
                            dungeon.gemCount += 1;
                        }
                    }
                }            
            }
        }

        //Add Vertical Paths 
        if (roomId <= 2)
        {
            for (let i = (roomHeight + roomY + 1); i <= (roomHeight + roomY + 8); i++)
            {
                dungeon.map[roomWidth + roomX - 1][i].value = 32;
                dungeon.map[roomWidth + roomX - 1][i].traversable = true;
                dungeon.map[roomWidth + roomX - 1][i].blockType = "Floor";
            }
        }

        //Add Horizontal Paths
        if (roomId != 2 && roomId != 5)
        {
            for (let i = (roomWidth + roomX + 1); i <= (roomWidth + roomX + 8); i++)
            {
                dungeon.map[i][roomHeight + roomY - 2].value = 32;
                dungeon.map[i][roomHeight + roomY - 2].traversable = true;
                dungeon.map[i][roomHeight + roomY - 2].blockType = "Floor";
            }
        }
   
    }
    
    var xPos: number;
    var yPos: number;

    /* Add the dungeon exit */
    do 
    {
        xPos = Random(0, dungeonWidth - 3) + 1;
        yPos = Random(0, dungeonHeight - 2) + 1;
        // do something
    } while(dungeon.map[xPos][yPos].value != 32);

    dungeon.map[xPos][yPos].blockType = "Exit";
	dungeon.map[xPos][yPos].value = 10;
    dungeon.exit = {x:xPos, y:yPos};

    /* Add the dungeon exit key*/
    do 
    {
        xPos = Random(0, dungeonWidth - 3) + 1;
        yPos = Random(0, dungeonHeight - 2) + 1;
        // do something
    } while(dungeon.map[xPos][yPos].value != 32);

    dungeon.map[xPos][yPos].blockType = "Key";
    dungeon.map[xPos][yPos].value = 2;
    dungeon.key = {x:xPos, y:yPos};
    
    return dungeon;
}

export function updateDungeonMap(player: Character, action: string, dungeon: Dungeon)
{
    if(dungeon.map[player.x][player.y].blockType != "Exit")
    {
        dungeon.map[player.x][player.y].blockType = "Floor";
        dungeon.map[player.x][player.y].value = 32;
        dungeon.map[player.x][player.y].traversable = true;
    }

    return dungeon;
}
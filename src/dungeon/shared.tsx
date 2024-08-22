export type Position =
{
    x: number;
    y: number;
}

export type ItemValue =
{
	value: number;
	message: string;
}

export function Random(min: number, max: number)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

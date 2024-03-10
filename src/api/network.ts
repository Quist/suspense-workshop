export const randomDelay = async () => {
	await sleep(getRandomInt(800, 2500))
}

const sleep = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const getRandomInt = (min: number, max: number): number => {
	const range = max - min + 1;
	return Math.floor(Math.random() * range) + min;
};
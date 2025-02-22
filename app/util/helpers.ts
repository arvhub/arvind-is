// Fisher-Yates shuffle algorithm without mutating the input array
export function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array]; // Create a copy of the array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements at index i and j
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray; // Return the shuffled copy
}
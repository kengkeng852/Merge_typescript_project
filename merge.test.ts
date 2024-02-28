import merge from './merge';
 
describe('merge function', () => {
    it('should merge three arrays together', () => {
        const collection_1 = [11,22,33]; // sorted from min(0) to max
        const collection_2 = [55,66,77]; // sorted from min(0) to max
        const collection_3 = [111,99,44]; //sorted from max to min(0)

        const mergedArray = merge(collection_1, collection_2, collection_3);
        expect(mergedArray).toEqual([11,22,33,44,55,66,77,99,111]);
    })
})

describe('merge function', () => {
    it('should merge three arrays together', () => {
        const collection_1 = [55,66,77]; // sorted from min(0) to max
        const collection_2 = [100,200,300]; // sorted from min(0) to max
        const collection_3 = [999,300,11]; //sorted from max to min(0)

        const mergedArray = merge(collection_1, collection_2, collection_3);
        expect(mergedArray).toEqual([11,55,66,77,100,200,300,300,999]);
    })
})
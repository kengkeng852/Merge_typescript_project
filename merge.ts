export default function merge(collection_1: number[], collection_2: number[], collection_3: number[]):number[]{
    let i =0; //index of collection1
    let j = 0; //index of collection2
    let k =0; //index of collection3

    let mergedArray: number[] = []; //set to empty array first
    
    //merge 1 and 2 collection
    while (i < collection_1.length || j < collection_2.length) {
        if (collection_1[i] <= collection_2[j]) { 
            mergedArray.push(collection_1[i]);
            i++; }
        else if(collection_2[j] <= collection_1[i]) {
            mergedArray.push(collection_2[j]);
            j++;
        }
        else if (i >= collection_1.length) {
            mergedArray.push(collection_2[j]);
            j++ } 
        else if (j >= collection_2.length) { 
            mergedArray.push(collection_1[i]);
            i++;
        }
    }

    let m =0 //index of merged array

    //merge mergedarray and 3 collection 
    while (k < collection_3.length) { 
        while (m <= mergedArray.length && mergedArray[m] < collection_3[k]) { //loop through every mergedarray element until find number in merged array that more than element in collection 3
            m++; 
        } 
        mergedArray.splice(m, 0, collection_3[k]);
        k++;
        m = 0; //reset index to loop through merged again
    }
    return mergedArray; 
}
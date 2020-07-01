// INSERTION SORT

// grab a card, insert it in the correct position

// assume first num is in the correct position
// time complexity
// insertion = O(n), O(n)
// shift = O(n), O(n2)


function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){ // start on 2nd val
        let current = arr[i] // set
        let j = i - 1 // j is the left val
        while (j >= 0 && arr[j] > current){ //if prev val is greater than zero and greater than the current val
            arr[j + 1] = arr[j] //shift right
            j-- // decrement j
        }
        arr[j + 1] = current // 
    }
    return arr
}

let array = [8, 2, 4, 1, 3, 8, 1]
console.log(insertionSort(array))
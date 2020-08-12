function findMinAndRemove(array){
    let min = array[0]
    let minInd = 0
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
            minInd = i
        }
    }
    return array.splice(minInd, 1)[0]
}

function selectionSort(array){
    const sorted = []
    while (array.length > 0) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted
}

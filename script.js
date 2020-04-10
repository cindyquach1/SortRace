var userArray = [];
var unsortedArray = ['4', '5', 'A', '6', '2', '7', 'B', '2', 'B', '6', '1', '4']
// var unsortedArray = [ '4', '5', 'A', '1', '7', 'B', '2', '1' ];
var sortedArr = [];
var result1 = [];
var left;
var right;

var left1 = [];
var right1 = [];
var mid1 = [];
var counter;

function mergeSort (unsortedArray) {
    if (unsortedArray.length <= 1) {
        // console.log("x", unsortedArray);
        return unsortedArray;
    }
    // Get the middle
    const middle = Math.floor(unsortedArray.length / 2);
    mid1.push(middle);
    // console.log("mid", middle);

    // Dividing the array into left and right
    
    const left = unsortedArray.slice(0, middle);
    left1.push(left);
    // console.log("left", left);
    // console.log("left1", left1);

    const right = unsortedArray.slice(middle);
    right1.push(right);
    // console.log("right1", right1);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge(leftArr,rightArr) 
{
    var i = 0;
    var j = 0;
    counter = 0;
    var result = [];

    while (i < leftArr.length || j < rightArr.length) {
        if (i === leftArr.length) {
            // j is the only index leftArr
            // console.log("x", rightArr[j]);
            result.push(rightArr[j]);
            result1.push(rightArr[j]);
            j++;
            counter++;
        } 
      else if (j === rightArr.length || leftArr[i] <= rightArr[j]) {
            // console.log("y", leftArr[i]);
            result.push(leftArr[i]);
            result1.push(leftArr[i]);
            i++;
            counter++;
        } else {
            // console.log("z", rightArr[j]);
            result.push(rightArr[j]);
            result1.push(rightArr[j]);
            j++;
            counter++;
        }
    }

    // console.log("result", result);
    result1.push(result);
    return result
        .concat(leftArr.slice(i))
        .concat(rightArr.slice(j));
    
}

$( document ).ready(function() {
    $("#runBtn").click(function() {

        var flag = 1;

        for (var i = 0; i < unsortedArray.length; i++)
        {
            var parseArray = unsortedArray[i] + " | ";
            $("#showUnsortedArray").append(parseArray);
        }

        sortedArr = mergeSort(unsortedArray);

        console.log('counter',counter-1);
        console.log('result1',result1);
        while (flag) {
            var i = 0;
            for(i; i < counter-1; i++) 
            {
                // console.log("hi");
                // console.log("result["+ i +"]", result1[i]);
                // console.log(left1[i]);
                // console.log('mid',mid1[i]);
                // console.log(right1[i]);
    
                $("#" + i).append(left1[i] + ',' + right1[i]);
            }
            for(i; i < result1.length; i++)
            {
                $("#" + i).append(result1[i]);
            }
            flag = 0;
        }
        // console.log('result1',result1);

        $("#showSortedArray").append(sortedArr);
    })

});


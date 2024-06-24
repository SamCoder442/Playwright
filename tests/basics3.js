var marks = Array(6)
var marks = new Array(20,40,35,12,37,50)
// different syntax for creating an array
var marks = [20,40,35,12,37,50]
console.log(marks[2])
marks[3] = 21 // to increase the value of the index
console.log(marks) // output will be [20,40,35,21,37,50]
marks.push(65) //push keyword is used to add a element in the array
console.log(marks)
marks.pop() //pop keyword is used to remove the last element in the array
console.log(marks)
marks.unshift(33) //marks.unshift method is used to add a element in the starting of the array
console.log("*****************")
console.log(marks.indexOf(21)) //how to know the index value of the element present in the array
console.log(marks.includes(21)) //marks.includes method will help to check if the element is present in the array
console.log("*****************")
let subMarks = marks.slice(2,5)
console.log(subMarks)
console.log("*****************")
var sum = 0 // we created this variable for sum up all the elements present in the array
for(let i=0;i<marks.length;i++) // this for loop is for printing the array one by one
{
    console.log(marks [i])
    sum = sum+marks[i] // this command will sum up all the elements present in the array
}
console.log(sum)

let total = marks.reduce((sum,mark)=>sum+mark,0) // it is to sum up all the elements present in the array
console.log(total)

var scores = [12,13,14,15,16] // create a new array with even numbers in scores array
var evenScores = []
for(let i=0;i<scores.length;i++) // this for loop is to filter out the array
{
    if(scores[i] %2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores) // to filter out the even scores in the array
console.log("****************************")
let newFilterEvenScores =scores.filter(score=>score%2==0) // filter method is used to filter out the elements from the array
console.log(newFilterEvenScores)

//map
let mappedArray = newFilterEvenScores.map(score=>score*3)
console.log(mappedArray)
let totalVal = mappedArray.reduce((sum,value)=>sum+value,0)
console.log(totalVal)

var scores1 = [12,13,14,15,16]
let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,value)=>sum+value,0)
console.log(sumValue)

let cars = ["Apollo","Mazda","Koenigsegg","Lotus"]
cars.sort()
cars.reverse()
console.log(cars) // sort function for sorting the array which have strings

var scores1 = [12,3,19,18,15,14]
console.log(scores1.sort())
scores1.sort(function(a,b){
    return a-b
})

console.log(scores1.sort((a,b)=>a-b))





let sum = 0
let n = 12
n = Number.parseInt(n)
 for (let i=0; i<n; i++){
    sum+=(i+1)
}
console.log("Sum of first" + n + "natural number is"+ sum)


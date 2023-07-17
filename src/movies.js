// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

let getDirector=moviesArray.map((element)=>{
    return element.director
})
return getDirector
}
getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
let pDramas= moviesArray.filter((eachElement)=>{
if(eachElement.director==="Steven Spielberg" && eachElement.genre.includes("Drama")){
return true   } 
  else{
    return false
}


})
return pDramas.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length===0){
        return 0
    }
let total=moviesArray.reduce((acc,elem)=>{
    if(typeof(elem.score)==="number"){
        return acc+elem.score
    } else{
        return acc
    }
},0)

let avg =total/moviesArray.length
let twoNum=avg.toFixed(2)
let twoNume= Number(twoNum)
return twoNume
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
let dramasPelis=moviesArray.filter((cadaElement)=>{
if (cadaElement.genre.includes("Drama")){
    return true}
    else{
        return false
    }

}
)
return scoresAverage(dramasPelis) 
   

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
let clon=JSON.parse(JSON.stringify(moviesArray))
clon.sort((elem1,elem2)=>{
if(elem1.year>elem2.year){
return 1 }
else if(elem1.year<elem2.year){
return -1 }
else { if(elem1.title>elem2.title){
return 1 } 
else if (elem1.title<elem2.title){
    return -1 }
else{  return 0 }}
}

)
return clon
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    nexArray=[]
    let clon=JSON.parse(JSON.stringify(moviesArray))
 let clon2=clon.sort((elem1,elem2)=>{
        if(elem1.title>elem2.title){
        return 1 }
        else if(elem1.title<elem2.title){
        return -1 }
        else { return 0}
  nexArray= clon2.filter((clon)=>{
    if(clon<=20){
        return true
    } else{ return false } return nexArray
   }
   )
    }
    
        ) 
    }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

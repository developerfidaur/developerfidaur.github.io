function setBlog(){
  document.querySelector('.post-article').querySelector('h1').innerHTML=localStorage.getItem('titles');
  console.log('hi');
  document.querySelector('.post-article').querySelector('p').innerHTML=localStorage.getItem('content');
  document.querySelector('.post-article').querySelector('img').src=localStorage.getItem('image');
}
setBlog();


//

let resultsArray=localStorage.getItem('suggestedArticle1');
console.log('result-percentage',resultsArray[1])
for(let i=1;i<= resultsArray.length;i++){
let title =  resultsArray[1][i];
console.log('blog',title)
}


console.log('suggested',localStorage.getItem('suggsstedArticle1'))
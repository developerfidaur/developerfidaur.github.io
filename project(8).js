let button=document.querySelector('button');
let input=document.querySelector('input');
button.addEventListener('click',()=>{
  let searchWord=input.value;
  displayResult(searchWord);

})
async function fetchWord(searchWord){
  try{
    let result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`)
let data = await result.json();
console.log(data);
console.log(data[0].meanings[0].partOfSpeech);
console.log(data[0].meanings[0].definitions[0].definition);
return data;
  } catch(error){
    document.querySelector('.output').innerHTML = `<div class='displayBox'>
<h2>Word : ${searchWord}</h2>
<p id='type'></p>
<h4 id='meaning'>Oops,<p>The Word is not available in the dictionary,Sorry for this issue.</p></h4>
<h4 id='eg'><p>Search For other words please.... </p></h4>
</div>`
  }

}


async function displayResult(searchWord){
let data=  await fetchWord(searchWord);
let partOfSpeech = data[0]?.meanings[0]?.partOfSpeech || 'N/A';
  let definition = data[0]?.meanings[0]?.definitions[0]?.definition || 'No definition available';
  let example = data[0]?.meanings[0]?.definitions[0]?.example || 'No example available';
  let synonyms = data[0]?.meanings[0]?.definitions[0]?.synonyms ;
  let synonymsText = synonyms && synonyms.length > 0 ? synonyms.join(', ') : 'No Synonyms Available';

document.querySelector('.output').innerHTML=`<div class='displayBox'>
<h2>Word : ${searchWord}</h2>
<p id='type'>${partOfSpeech}</p>
<h4 id='meaning'>Meaning: <p>${definition}</p></h4>
<h4 id='eg'>Example: <p>${example}</p></h4>
<h4 id='synonyms'>Synonyms: <p>${synonymsText}</p></h4>
</div>`
}

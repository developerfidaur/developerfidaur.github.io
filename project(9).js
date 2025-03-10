let blogs = [
  {
    title: 'How to Become a Pokémon Trainer?',
    content: 'A *Pokemon Trainer* is someone who embarks on a journey to capture, train, and battle Pokemon, aiming to become a Pokemon master. Equipped with Pokeballs, a Pokedex, and a passion for adventure, trainers travel through various regions, encountering diverse Pokemon species and other trainers. Their role goes beyond battles, as they must build strong bonds with their Pokemon, understanding each creature’s strengths, weaknesses, and unique abilities. Trainers compete in gyms, participate in tournaments, and strive to earn badges, constantly improving their skills and expanding their team. Driven by a love for Pokemon and a desire to test their limits, Pokemon trainers are always ready for new challenges in the vibrant world of Pokemon.',
    img:"/image_search_1731681527063.jpg"
  },
  {
    title: 'Different Regions and their Journeys',
    content: 'The Pokemon world is divided into several unique regions, each with its own geography, Pokemon species, culture, and adventures. From the lush fields of Kanto to the icy peaks of Sinnoh, each region offers a fresh journey for aspiring trainers. In Unova, trainers explore bustling cities, while in Alola, they enjoy a tropical island adventure. Each region introduces distinct gym leaders, elite trainers, and challenges that test a trainer’s skills. As trainers journey through these regions, they not only capture new Pokemon but also uncover rich histories, legends, and friendships that shape their growth as Pokemon masters.',
    img:"/image_search_1731759833893.png"
  },
  {
    title: 'Legendary and Mythical Pokémon',
    content: 'Legendary and Mythical Pokemon are among the most mysterious and powerful creatures in the Pokemon universe. In the anime, these Pokemon often play crucial roles in preserving balance and protecting the world. From Mewtwo’s philosophical conflict in *The First Movie* to Lugia’s role as the guardian of the seas in *The Power of One*, these Pokemon are central to the series’ most dramatic moments. Mythical Pokemon like Jirachi and Celebi often appear with magical abilities, bridging the gap between the past and future. Their appearances are rare, making their encounters unforgettable for fans and trainers alike.',
    img:"/image_search_1731759546677.jpg"
  },
  {
    title: "Which is Ash's Best Companion?",
    content: 'Throughout his journey, Ash Ketchum has traveled with many companions, each contributing to his growth as a trainer. From Brock’s culinary skills and wisdom to Misty’s fiery determination, these characters have been integral to Ash’s adventures. However, Pikachu stands out as Ash’s closest and most loyal companion. Together, they have faced countless challenges, forming an unbreakable bond that defines the series. While every companion brings unique qualities, Pikachu’s unwavering support and synergy with Ash make it the ultimate partner in his journey to becoming a Pokemon master.',
    img:"/image_search_1731759453642.jpg"
  },
  {
    title: 'What is a Pokemon',
    content: '*Pokemon* are extraordinary creatures with unique abilities, living in harmony with humans in the Pokemon world. These creatures come in various shapes, sizes, and elemental types, such as Fire, Water, Electric, and Grass. Each Pokemon has its strengths and weaknesses, making them valuable partners in battles and adventures. Trainers capture Pokemon using Pokeballs, nurture them, and train them to grow stronger. Beyond battles, Pokemon are companions, friends, and sometimes even life-savers, showcasing their loyalty and bond with their trainers. The world of Pokemon thrives on the interaction between humans and these fascinating creatures.',
    img:"/image_search_1731759304938.png"
  },
  {
    title: 'A Beginner’s Guide to Competitive Pokémon Battling',
    content: 'Competitive Pokemon battling is a strategic and thrilling aspect of the Pokemon world, where trainers test their skills in structured battles. Beginners should start by understanding the basics of Pokemon types, strengths, and weaknesses. Building a balanced team with diverse abilities is crucial. Learn about moves, abilities, and items that enhance battle strategies. Familiarize yourself with battle formats, such as Singles and Doubles, and practice predicting opponents’ moves. Finally, patience and practice are key—study battles, experiment with strategies, and refine your skills. Competitive battling is as much about strategy as it is about understanding your Pokemon’s potential.',
    img:"/image_search_1731681710166.jpg"
  },
  {
    title: 'Ranking the Pokémon Starters: Which Region Has the Best Choices?',
    content: 'Pokemon starters are the first companions of any trainer, and each region offers three iconic choices. Kanto’s Bulbasaur, Charmander, and Squirtle are fan favorites for their versatility. Johto’s Chikorita, Cyndaquil, and Totodile exude charm and balance. Hoenn’s Treecko, Torchic, and Mudkip offer excellent battle potential, while Sinnoh’s Turtwig, Chimchar, and Piplup are beloved for their designs. Alola’s starters bring unique secondary typings, and Galar’s starters reflect modern creativity. While opinions vary, Hoenn’s starters are often ranked highly due to their competitive viability and wide appeal. Ultimately, the “best” starter depends on a trainer’s preferences and strategies.',
    img:"/image_search_1731681647862.png"
  },
  {
  title: "Pokemon's Evolution",
  content: "Pokemon evolution is a fascinating process where Pokemon transform into stronger forms, gaining new abilities, improved stats, and sometimes even changing their type. Evolution can occur through various methods, such as gaining experience in battles, using specific evolutionary stones, or trading with other trainers. For example, Charmander evolves into Charmeleon and then Charizard, growing significantly stronger with each stage. Evolution not only makes Pokemon more powerful but also unlocks new moves and strategies. However, some trainers choose to delay evolution to learn moves earlier or keep their Pokemon in a form they prefer. This unique feature adds depth and strategy to the world of Pokemon.",
  img:"/image_search_1731759723777.jpg"
}

];

let articleContents=document.querySelectorAll('.article-content');
let h3S=[];
articleContents.forEach(content=>{
  let a=content.querySelectorAll('a');
  a.forEach(link=>{
   let h3= link.querySelector("h3");
   console.log('h3 : ',h3)
   h3S.push(h3);
  })
}) 
console.log(h3S);
h3S.forEach(h3=>{
  h3.addEventListener("click",()=>{setTitle(h3)})
})
function setTitle(h3){
  localStorage.setItem('titles',h3.innerHTML);
  
  for(let i=0;i<blogs.length;i++){
    
  if(blogs[i].title.toLowerCase().trim()==h3.innerHTML.toLowerCase().trim()){
    console.log('done')
      localStorage.setItem('content',blogs[i].content);
      localStorage.setItem('image',blogs[i].img);
      localStorage.setItem('condition','matched');
      
      break;
    }
    else{
      localStorage.setItem('condition','umatched');
      console.log('oops')
    }
  }
  
}

/* debugging checks*/
if(blogs[0].title.toLowerCase().trim()==document.querySelector('.article-content a h3').innerHTML.toLowerCase().trim()){
  console.log('match');
}
else{
  console.log('not matched')
}

console.log(`blogs[0].title: "${blogs[0].title.toLowerCase().trim()}"`);
console.log(`h3 innerHTML: "${document.querySelector('.article-content a h3').innerHTML.toLowerCase().trim()}"`);

document.querySelector('#search').querySelector('button').addEventListener('click',search);

function search(){
  let input=document.querySelector('#search').querySelector('input').value;
    
  
  console.log('input :', input)
  localStorage.setItem('input',input);
}
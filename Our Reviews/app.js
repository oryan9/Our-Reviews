
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Öryan Karakaş",
    job: "Jr. Front-End Web Developer ",
    img:
      "https://res.cloudinary.com/dbi1gswz3/image/upload/v1650143763/recipes/IMG_20220403_010242_359_1_alx1cc.jpg",
    text:
      "    Hello, I'm Oryan Karakaş. I am studying at Hacettepe University,I am 22 years old. I like to read books and watch movies and TV series..",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];


const img = document.getElementById('person-img')
const author = document.getElementById('author')
const jop = document.getElementById('jop')
const info = document.getElementById('info')

const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')
const randomBtn = document.querySelector('.random-btn') 




let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
  
  showPerson()
})
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

nextBtn.addEventListener("click",function(){
  currentItem++
  if(currentItem > reviews.length-1){

    currentItem = 0

  }
  showPerson(currentItem)
})

prevBtn.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
    currentItem = reviews.length - 1;

  }

showPerson(currentItem)
})






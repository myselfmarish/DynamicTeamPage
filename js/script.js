
//Array of arrays containing member information
//[name,imageSource,bio]
let teamDB = [
    [
        "Mariia Shevchenko",
        "MariiaShevchenko.png",
        "A 2 year + social media specialist. Mostly working with beauty brands. Wrote, edited, and published content" +
        " to share on all brand’s company social media profiles and partner channels. Maintained brand innovation" +
        " and kept abreast of the latest social media trends. Monitor brand-related mentions on all social platforms" +
        " and engaged with readers’ responses to articles."
    ],
    [
        "Alex",
        "TeamMember.png",
        "Experienced graphic designer with 5 years of experience. Enthusiastic, creative graphic designer" +
        " with solid problem solving skills. Seeking to lower the workload of John M. at Marketing Fusion, Inc. " +
        "through proven strengths in creativity, collaboration, and taking criticism. Also excels at several tech tools," +
        " including Illustrator, Photoshop, and CorelDraw."
    ],
    [
        "Alissa",
        "TeamMember2.png",
        "I am a copywriter with years of experience and training, specialising in creative and innovative copy. " +
        "Constantly evolving and growing. From the beginning of my career, I started working as a freelancer with a" +
        " range of different clients who allowed me to learn in many different fields, thus broadening my skills."
    ],
    [
        "Rachel",
        "TeamMember3.png",
        "A talented and customer-oriented designer with an eye for commercial fashion and detail in product styling." +
        " 7+ years of experience in a luxury brand environment. Eager to join Givenchy to set a creative tone" +
        " and inspire new ideas and concepts. In previous roles created a highly acclaimed men’s summer collection" +
        " that boosted sales by 35% relative to the previous year."
    ]
];

//accessing html tags
let name = document.getElementById("name"),
    image = document.getElementById("image"),
    text = document.getElementById("text"),
    next = document.getElementById("next"),
    previous = document.getElementById("previous"),
    id = 0,
    length = teamDB.length;

function onNext(){
    if ((id+1)<length){
        id++;
    }else{
        id = 0;
    }
    displayData(id);
}
function onPrevious(){
   if (id>0){
       id--;
   }else {
       id = length-1;
   }
   displayData(id);
}

function displayData(id){
    name.innerHTML = teamDB[id][0];
    image.src = "images/"+teamDB[id][1];
    text.innerHTML = teamDB[id][2];
}

next.addEventListener("click",onNext);
previous.addEventListener("click",onPrevious);

//on page load display first bio from array
window.onload = ()=>{displayData(0)};


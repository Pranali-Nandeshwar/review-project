// local reviews data
const reviews=[
    {
        id:1,
        name:"Susan Smith",
        job:"web developer",
        img:"https://i.pinimg.com/236x/79/df/d1/79dfd1481440d95b053de146caef6935.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:2,
        name:"Rina",
        job:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSft2F4webDuTyk_YL9Cv_2j2iNvCiqNLpA79PTKvjEbP2TYHFI4og_oNW6BcFiF3RjoM&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:3,
        name:"Pooja",
        job:"web developer",
        img:"https://i.pinimg.com/236x/16/cf/43/16cf43ed08453f58b17e7c126e714a99.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:4,
        name:"Rani",
        job:"web developer",
        img:"https://cdn4.sharechat.com/compressed_gm_40_img_875585_26264441_1693590872899_sc.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:5,
        name:"Ankita",
        job:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0uCwkIBq4eTAKQ7BtvQdtGoCD6mm6Vgx_4B0Hx-7EcRe7zA5GPKshrVeO3uevEet6EU&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:6,
        name:"Hrudai",
        job:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWov3Tdpc9rLsFOHQ_XeH2EoH__2RXKx1iXtevHdfGNlbQ3t5tYhuPGk8XFF4O9VIcx0o&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:7,
        name:"Anamika",
        job:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCkRs6Nf_1KWN_WRFQTAWFrJqZ15w-RIoFcNXYLcfXHNrhL-rnOxtE8B4hmnMZKSxMQQI&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:8,
        name:"Gargi",
        job:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6CXLmEXdkuu_omai3_EmrfMQ--MMP_hcZUTrHUt6-9Wwunt6qpGfB43ZwRZ8AaLynVbk&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:9,
        name:"Shila",
        job:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIScRKahAzNuZcEzoSqyr1p4b-iEYGMV6UoRY3l5aJkYH3Tg0KulWqiCqdRx5szitl838&usqp=CAU",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    },
    {
        id:10,
        name:"Babita",
        job:"web developer",
        img:"https://i.pinimg.com/originals/d2/58/c0/d258c0995c250eab0ec89c899befab94.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus enim sapiente perspiciatis quos cumque hic ratione explicabo unde ex architecto, nam ipsam, sit quod debitis deserunt quibusdam odio non molestias tenetur totam dolorem rerum maiores praesentium! Non, quidem eum."
    }
    
]

// select item
const img=document.getElementById("person-img");
const author=document.getElementById("author");
const job=document.getElementById("job");
const info=document.getElementById("info");

const prevbtn=document.querySelector(".prev-btn");
const nextbtn=document.querySelector(".next-btn");
const randombtn=document.querySelector(".random-btn");

// set starting item

let currentItem=0;

// load initial item

window.addEventListener("DOMContentLoaded",function(){
    // console.log("shake and bake");
    showPerson();
});


// show person based on item

function showPerson(){

    const item=reviews[currentItem];
    img.src=item.img
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;
}

// show next person

nextbtn.addEventListener("click",function(){
    currentItem++;
    if (currentItem>reviews.length-1){
        currentItem=0;
    }
    showPerson();
});
prevbtn.addEventListener("click",function(){
    currentItem--;
    if (currentItem<0){
        currentItem=reviews.length-1;
    }
    showPerson();
});

// show random person

randombtn.addEventListener("click",function(){
    currentItem=Math.floor(Math.random()*reviews.length)
    console.log(currentItem)
    showPerson();

})
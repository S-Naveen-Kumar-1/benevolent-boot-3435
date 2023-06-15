let arr=[
    {
        place:"New Delhi",
        price:10,
        details:"Humayun's tomb is the tomb of Humayun in Delhi, India. The tomb was commissioned by Humayun's first wife and chief consort, Empress Bega Begum under her patronage in 1558, and designed by Mirak Mirza Ghiyas and his son, Sayyid Muhammad, Persian architects chosen by her.",
        img:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2-monuments-landscape-shashank-mehendale.jpg"
    },
    {
        place:"Agra",
        price:0,
        details:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r. 1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself.",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/250px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg"
    },
    {
        place:"Mysore",
        price:0,
        details:"Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house). It is located in Mysore, Karnataka, India. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward.",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Mysore_Palace_%288113480008%29.jpg/1024px-Mysore_Palace_%288113480008%29.jpg"
    },
    {
        place:"Jaipur",
        price:0,
        details:"The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, the founder of the city of Jhunjhunu.",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Inside_hawa_mahal_looking_east_towards_the_famous_facade.jpg/800px-Inside_hawa_mahal_looking_east_towards_the_famous_facade.jpg"
    },
    {
        place:"Hyderabad",
        price:0,
        details:"The Charminar is a monument located in Hyderabad, Telangana, India. Constructed in 1591, the landmark is a symbol of Hyderabad and officially incorporated in the emblem of Telangana. The Charminar's long history includes the existence of a mosque on its top floor for more than 425 years. ",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/800px-Charminar_Hyderabad_1.jpg"
    },
    {
        place:"Thanjavur",
        price:0,
        details:"Brihadishvara Temple, called Rajarajesvaram by its builder, and known locally as Thanjai Periya Kovil ('Thanjavur Big Temple') and Peruvudaiyar Kovil, is a Shaivite Hindu temple built in a Chola architectural style located on the south bank of the Cauvery river in Thanjavur, Tamil Nadu, India",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Brihadesvara_Temple%2C_Tanjavur%2C_India_02.jpg/800px-Brihadesvara_Temple%2C_Tanjavur%2C_India_02.jpg"
    },
    {
        place:"Konark",
        price:0,
        details:"Konark Sun Temple is a 13th-century CE (year 1250) Sun temple at Konark about 35 kilometres (22 mi) northeast from Puri city on the coastline in Puri district, Odisha, India. The temple is attributed to king Narasimhadeva I of the Eastern Ganga dynasty about 1250 CE.",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Konarka_Temple.jpg/1024px-Konarka_Temple.jpg"
    },
    {
        place:"Indore",
        price:0,
        details:"Rajwada, also known as the Holkar Palace or Old Palace, is an important historical palace in Indore that was constructed by the Holkars of the Maratha empire, around 2 centuries ago. An example of the fine architectural skill and magnificence of those times, the palace is an impressive 7 storey structure",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Rajwada_Indore_Diwali.jpg/1280px-Rajwada_Indore_Diwali.jpg"
    },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
    // {
    //     place:"",
    //     price:0,
    //     details:"",
    //     img:""
    // },
]


// let destinations=document.getElementById("destinations");
let show=document.getElementById("show")
let search=document.getElementById("search");
search.addEventListener("input",function(){
    console.log(search.value)
    let searched=arr.filter(function(e){
        // console.log(e.place)
        if(e.place.toUpperCase().includes(search.value.toUpperCase())===true){
            return e
        }
        
    })
    // console.log(searched)
    display(searched)
})

let sort=document.getElementById("sort");
sort.addEventListener("change",function(){
    let low=arr.sort(function(a,b){
        return a.price-b.price
    })
    if(sort.value==="low"){
        // console.log(low)
        display(low)
    }
})
sort.addEventListener("change",function(){
    let high=arr.sort(function(a,b){
        return b.price-a.price
    })
    if(sort.value==="high"){
        // console.log(high)
        display(high)
    }
})
sort.addEventListener("change",function(){
   
    if(sort.value===""){
        // console.log(high)
        display(arr)
    }
})

display(arr)
function display(data){
    show.innerHTML=null;
data.map(function(e){
    let place=document.createElement("h3")
    let img=document.createElement("img");
    let price=document.createElement("p");
    let detail=document.createElement("p");
    let link=document.createElement("a")
    let buy=document.createElement('button');


    let card=document.createElement("div")
    

    place.innerText=e.place;
    img.setAttribute("src",e.img);
    price.innerText=e.price
    detail.innerText=e.details;
    buy.innerText="Buy Package"
    link.innerText=buy

    card.append(place,img,detail,price,buy)
    show.append(card)
    buy.addEventListener("click",function(){
        window.open("payment.html")
    })

})
}

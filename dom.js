// // console.log(window);
// // console.log(document);

// // let element = document.getElementById("demo");
// // element.innerText = "G+"
// // console.log(element);

// // let ele = document.getElementsByClassName("test");
// // ele.innerText= "<h1>Header</h1>"
// // ele.innerHTML = "<h1>Header</h1>"
// // console.log(ele);
// // console.log(Array.isArray(ele));
// // ele[0].innerText="Hello"
// // // ele[0].style.backgroundColor="tomato";


// // let x=[...ele];
// // x.map(element=>{s
// //     element.style.backgroundColor="orange"
// // })
// // let ele = document.querySelectorAll(".test");
// // console.log(ele);

// // let ele =document.createElement("h1");
// // ele.innerText="Dynamic element of html element";
// // ele.id="demo";
// // console.log(ele);

// // let image=document.createElement("img");
// // image.src="C:\Users\Admin\OneDrive\Pictures\res1.jpg";
// // console.log(image);

// // document.body.appendChild(ele);
// // document.body.appendChild(image)

// // let form = document.querySelector("form");
// // let username = document.getElementById("uName");
// // let mail = document.getElementById("uMail");
// // let psw = document.getElementById("uPass");

// // form.addEventListener("submit", (event) => {
// //     event.preventDefault();
// //     // console.log(event);
// //     // console.log("form submitted");
// //     let uname = username.value;
// //     let uemail = mail.value;
// //     let upass = psw.value;
// //     let userDetails = {
// //         uname, uemail, upass
// //     }
// //     console.log(userDetails);
// //     localStorage.setItem("userData", JSON.stringify(userDetails));
// // });

// let mainEle = document.createElement("div");
// mainEle.setAttribute("id", "mainBlock");
// mainEle.style.border = "2px solid red";
// mainEle.style.width = "550px";
// mainEle.style.height = "550px";

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");
// // console.log(topEle);

// let image = document.createElement("img");
// image.src = "https://cdn.pixabay.com/photo/2023/02/09/16/43/cat-7779237_640.jpg";
// image.style.width = "550px";

// let bottomEle = document.createElement("div");
// bottomEle.setAttribute("class", "bottomBlock");
// // console.log(bottomEle);

// let h1 = document.createElement("h1");
// h1.innerText = "CAT";
// h1.style.textAlign = "center";

// let btn = document.createElement("button");
// btn.innerText = "View More";
// btn.style.border = "none";
// btn.style.padding = "20px";
// btn.style.backgroundColor = "dodgerblue";
// btn.style.color = "white";

// bottomEle.appendChild(h1);
// bottomEle.appendChild(btn);

// topEle.appendChild(image);
// mainEle.appendChild(topEle);
// mainEle.appendChild(bottomEle);
// document.body.appendChild(mainEle);

let form = document.querySelector("form");

let username = document.getElementById("uName");
let password = document.getElementById("uPass");
let check =document.getElementById("check");
let show =document.getElementById("show");

let gender = document.getElementsByName("gender")

check.addEventListener("click",event=>{
    if(event.target.checked==true){
        password.setAttribute("type", "text");
        show.innerText="hide password";
    }else{
        password.setAttribute("type","passowrd");
        showinnerText="show passoword";
    }
})
form.addEventListener("submit" , event=>{
    event.preventDefault();
    let un = username.value;
    let up = password.value;
    let gen = "";

    for(let i=0;i<=gender.length-1;i++){
        if(gender[i].checked == true){
            gen = gender[i].value;
        }
    }

    let userDetails={
        username:un,
        password:up,
        gender:gen
    }
    console.log(userDetails);
    sessionStorage.setItem("userData",
        SON.stringify(userDetails)
    )

})



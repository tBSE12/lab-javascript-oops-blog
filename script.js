class Blog{
    constructor(title, detail){
        this.title = title
        this.detail = detail
    }
    
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id", "blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    
    addDescription(){
        var detail_card = document.createElement('h1');
        detail_card.setAttribute("id", "blog-detail");
        document.getElementById('card-text').appendChild(detail_card);
        detail_card.innerHTML += this.detail;
    }
    addPhoto(){
        var img = document.createElement("img");
        img.src="./assets/javascript.png"
        document.getElementById("body-div2").appendChild(img);
    }
}

addNewPost = () => {
    document.getElementById("title").value= ""
    document.getElementById("detail").value= ""
    document.getElementById("popupContact").style.display = "inherit"
    document.getElementById("body-div2").style.display = "none"
}

removePopup = () => {
    document.getElementById("popupContact").style.display = "none"
    document.getElementById("body-div2").style.display = "inherit"
}

postBlog = () => {
    let images = {
        1 : "./assets/csslogo.svg",
        2 : "./assets/cardimage1.svg",
        3 : "./assets/cardimage2.svg",
        4 : "./assets/javascript.png",
        5 : "./assets/javacardimage.svg",
    }
    let src = ""
    let num = parseInt((Math.random()*5)+1)
    switch(num){
        case 1: src = images[1]
                break
        case 2: src = images[2]
                break
        case 3: src = images[3]
                break
        case 4: src = images[4]
                break
        case 5: src = images[5]
                break
    }

    document.getElementById("body-div2").style.display = "inherit"
    document.getElementById("popupContact").style.display = "none"

    let mydiv = document.createElement("div")
    mydiv.setAttribute("class", "article-card")
    mydiv.innerHTML = `
                        <img src=` + src + ` id="jsphoto">
                        <div class="card-text" id="card-text">
                            <p id="blog-title"><b>` + document.getElementById("title").value + `</b></p>
                            <p id="blog-description">` + document.getElementById("detail").value + `</p>
                         </div>
                         `

    document.getElementById("body-div2").append(mydiv)

    console.log(document.getElementById("body-div2").innerHTML)

    // let B = new Blog(document.getElementById("title").value, document.getElementById("detail").value)
    // B.addTitle()
    // B.addDescription()
    // B.addPhoto()
}
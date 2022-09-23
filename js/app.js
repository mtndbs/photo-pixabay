


const init = async (img)=>{
url = `https://pixabay.com/api/?key=23011542-78612858e99933583cc04d2e0&q=${img}&image_type=photo`
let res = await axios.get(url)
let data = res.data;
let finalData = data.hits
console.log(finalData);
let myRoot =  document.getElementById('root')
myRoot.innerHTML = ''

finalData.forEach((item)=> {
    
    myRoot.innerHTML += `<div class="img-item"> 
    <h4>${item.type} of ${item.user}</h4>
    <img src="${item.largeImageURL}" alt="" width="280px" height="210px">
    <button class="like-btn">I like it!</button>
    <p></p>
    </div>
    `
   
        
    });

    const allBtn = document.querySelectorAll('.like-btn')
    allBtn.forEach((btn)=>{ 
    btn.addEventListener('click',()=>{
        console.log('i like it')
    })
    
    })

}

    




let myBtn = document.getElementById('my-btn')
let myInput = document.getElementById('my-input')
myBtn.addEventListener('click',()=>{
    init(myInput.value)
})
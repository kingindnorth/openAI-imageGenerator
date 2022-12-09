
const onSubmit = function(e){
    e.preventDefault()
    document.querySelector('.msg').textContent = '';
    document.querySelector('#image').src = '';
    const prompt = document.getElementById("prompt").value
    const size =  document.getElementById("size").value
    if(prompt === ""){
        alert("please add some text")
        return;
    }
    generateImageRequest(prompt,size)
} 

async function generateImageRequest(prompt,size){
    try{
        showSpinner()
        const response = await fetch("/api",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                prompt,
                size
            })
        })
        if(!response.ok){
            hideSpinner()
            throw new Error("image can not be generated")
        }
        const data = await response.json()
        const image = data.data
        document.getElementById("image").src = image
        hideSpinner()
    }catch(err){

    }
}

const showSpinner = function(){
    document.querySelector(".spinner").classList.add("show")
}

const hideSpinner = function(){
    document.querySelector(".spinner").classList.remove("show")
}

document.getElementById("image-form").addEventListener("submit",onSubmit)
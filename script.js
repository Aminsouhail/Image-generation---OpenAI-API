 const api = // your key API  FROM OPEN AI 
 const inp = document.getElementById ('inp')
 const images = document.querySelector('.images')

 const getImage = async () => {
    // req to open ai 
    const methods = {
        method:"POST",
        Headers:{
            "content-Type":"application/json",
            "Authorization": ` Bearer  ${api} `
        }, 
        body:JSON.stringify (
            {
                "prompt" :inp.value,
                "n":3,
                "size":"256x256"
            }
        )
    }


    const res = await fetch ("https://api.openai.com/v1/images/generations",methods)
    //  parse the res as json 
    const data = await res.json (
        console.log
    )
    const listImages =  data.data;
    images.innerHTML = ''
    listImages.map(photo =>{
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    })
 }
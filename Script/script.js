const puma = document.getElementById("puma");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=10").then((data)=>{
    // console.log(data);
    return data.json();
}).then((fetched_data)=>{
    // console.log(fetched_data[0].url);
    fetched_data.map(value=>{
        key = value.id;
        let img = document.createElement("img");
        img.src = value.url;
        puma.appendChild(img)
        // console.log(value.url)
    })
})

    // }).then((fetch_data)=>{
//     fetch_data.map(value =>{
//         key = value.id;
//         let img = doument.createElement('img');
//         img.src = value.url
//         puma.appendChild(img)
//     })
// });
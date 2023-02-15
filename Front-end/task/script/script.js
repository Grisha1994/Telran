const main = document.querySelector('main')

// console.log(main.innerText)
// console.log(main.innerHTML)

// main.innerHTML = main.innerHTML + '<h2> Mazda </h2>'
// main.innerHTML += '<h2> Grisha </h2>'

// const names = ['Grisha','Arsen','Anna','Ruslan','Zora','Vova',]

// for (let i = 0; i < names.length; i++) {
//     main.innerHTML += `<p class="item-${i + 1 }"> ${names[i]} </p>`
// }

// names.forEach(function(name, index){
//     main.innerHTML += `<p class="item-${index + 1}"> ${name} </p>`
// })

/*
     <article class="item item-1">
            <h5 class="title">Title</h5>
            <img src="https://placekitten.com/640/360" alt="">
            <p class="descr">Description</p>
        </article>
*/

const posts = [
    {
        id: 1,
        img: "https://placekitten.com/640/360",
        title: "Мой первый пост",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem assumenda rem debitis animi facere."
    },
    {
        id: 2,
        img: "https://placekitten.com/540/360",
        title: "Мой второй пост",
        descr: "Второй пост о столицах стран всего мира"
    },
    {
        id: 3,
        img: "https://placekitten.com/640/380",
        title: "Мой третий пост",
        descr: "Достопримечательности крупных европеских городов"
    },
]

posts.forEach(function(post){
    main.innerHTML += 
    `<article class="item item-${post.id}">
            <h5 class="title">${post.title}</h5>
            <img src="${post.img}" alt="">
            <p class="descr">${post.descr}</p>
    </article>`
})
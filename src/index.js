function myFunction(like) {
    like.classList.toggle("fa-thumbs-down");
}
const initialize = () => {
    search = document.querySelector('#searchID')
    form = document.querySelector('#searchFormID')
    body = document.querySelector('body')
    p = document.querySelector('p')
    refresh = document.querySelector('#refresh')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
        .then(response => response.json())
        .then((data) => {
            refresh.innerHTML = ''
            data.forEach(datum => {
                title = document.createElement('h3')
                titleDiv = document.createElement('div')
                refresh.append(titleDiv)
                titleDiv.append(title)
                const array = datum["title"].rendered.split(' ')
                array.filter(item => {
                    if (item.toUpperCase() === search.value.toUpperCase()){
                        return  title.innerHTML = array.join(' ')
                    }})        
            });
        })
        .catch(e => console.log(e.message))

    })
}





document.addEventListener('DOMContentLoaded', () => {
    console.log("Document Loaded")
    initialize()
})

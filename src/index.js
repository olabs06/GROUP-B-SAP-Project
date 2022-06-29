function myFunction(like) {
    like.classList.toggle("fa-thumbs-down");
}
const initialize = () => {
    fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
    .then(response => response.json())
    .then((data) => {
        data.forEach((datum) => {
            feedTitle = document.createElement('h2')
            preview = document.createElement('h4')
            feed = document.createElement('div')
            feedText = document.createElement('div')
            img = document.createElement('img')
            a = document.createElement('a')

            container.append(feed)
            a.append(feedTitle)
            feedText.append(a,preview)
            feed.append(img,feedText)

            img.className = 'feedImg'
            feed.className = 'feed'
            feedText.className = 'feedText'
            img.src = datum["jetpack_featured_media_url"]
            feedTitle.innerHTML = datum["title"].rendered
            a.href = datum["link"]
            preview.innerHTML = datum["excerpt"].rendered

        })
    })
    .catch(e => console.log(e.message))


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
        .then(response => response.json())
        .then((data) => {
            container.innerHTML = ''
            data.forEach(datum => {
                title = document.createElement('h3')
                titleDiv = document.createElement('div')
                container.append(titleDiv)
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
    container = document.querySelector('#container')
    search = document.querySelector('#searchID')
    form = document.querySelector('#searchFormID')
    p = document.querySelector('p')
    console.log("Document Loaded")
    initialize()
})

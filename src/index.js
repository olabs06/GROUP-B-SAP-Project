
window.addEventListener('load', () =>{
    //commentList ul to content the comments in form of list
    let commentList = document.getElementById("comment-list");
    //A form where the comment can be added
    let form = document.getElementById("comment-form");
    //Input in the form to hold the comment
    let text = document.getElementById("replyID");
    
    form.addEventListener('submit', function(e) {   
        e.preventDefault();
        let comment =text.value;
        if(!comment){
            alert('Please Enter Your Comment');
            return;
        }
        //CommentElement is to hold individual comment 
        let commentElement = document.createElement('li');
        
        commentElement.innerText = comment;
        commentList.appendChild(commentElement);
        //This is to remove a comment when that comment is clicked on
        commentElement.addEventListener('click', ()=>{
            commentList.removeChild(commentElement);
        })
    });
})    


              


   
    
    




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
            api_blog_post.innerHTML = ''
            data.forEach(datum => {
                title = document.createElement('h3')
                titleDiv = document.createElement('div')
                api_blog_post.append(titleDiv)
                titleDiv.append(title)
                const array = datum["title"].rendered.split(' ')
                array.filter(item => {
                    if (item.toUpperCase() === search.value.toUpperCase()){
                        return  title.innerHTML = `<a href="${datum["link"]}">${array.join(' ')}</a>`
                    }})        
            });
        })
        .catch(e => console.log(e.message))
    })

}


document.addEventListener('DOMContentLoaded', () => {
    container = document.querySelector('#api_blog_post')
    search = document.querySelector('#searchID')
    form = document.querySelector('#searchFormID')
    p = document.querySelector('p')
    console.log("Document Loaded")
    initialize()
})

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


              


   
    
    




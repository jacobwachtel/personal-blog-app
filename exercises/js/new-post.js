/**
 * TODO: Finish submitNewPost function to submit form data to the API 
 */

const API_URL = "http://localhost:3000/api/posts";

const submitNewPost = () => {
    // HINT: Use FormData to store data to send over
    // HINT: Redirect the user to home page after successful submission
    
    const input = document.getElementById('post-image-file');
    const title = document.getElementById('form-post-title').value;
    const content = document.getElementById('form-post-content').value;

    let formElem = new FormData();
    formElem.append("post-image", input.files[0]);
    formElem.append("title", title);
    formElem.append("content", content);

    fetch(API_URL, {
        method: "POST",
        body: formElem
    }).then(()=>{
        window.location.href = "index.html";
        
        // setTimeout(()=>{
        //     window.location.href = "index.html";
        // }, 1000);
       
    })
}
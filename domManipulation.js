// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');
let toggle = true



// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.
contentButton.addEventListener('click', function(){
if(toggle == true)
{
myName.innerHTML = "My Name is Kim Jong Un";
myHobby.innerHTML = "I like listening to Katy Perry";
myLocation.innerHTML = "I live in True Korea";
image.src = "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_19/1534611/160512-kim-jong-un-mn-1120.JPG";
toggle = false;
}
else
{
myName.innerHTML = "My Name is Dave Skylark";
myHobby.innerHTML = "I like listening to Katy Perry as well!";
myLocation.innerHTML = "I live in New York";
image.src = "https://www.heatherfarah.com/wp-content/uploads/2015/05/skylark-thumb-01.jpg";
toggle = true;
}


})
contentButton.addEventListener("keypress", function() {

})



// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click', function() {






});

// 3. Add an event listener to the `image1Button`
// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.


// BONUS
// 7. Try using different event types for your buttons.

function remove_from_cart(event)
{
    //On click, delete the parent element of the button, which is the whole product card. This will remove the whole HTML of that item.
    event[`target`][`parentElement`].remove();
    
    for(let i = 0; i < user_cart_array.length; i++)
    {    
        //For each element in the cart array, find a match between the array elements name key and the product attribute of the clicked button.
        if(user_cart_array[i][`name`] === event[`currentTarget`].getAttribute(`product`))
        {   
            //I found the splice method online. It takes 2 parameters here. The first is the index and the second the number of elements to delete. Here, we use the current iterations index which is i since it is the match, and we remove only one element.
            user_cart_array.splice(i, 1);
            //We reset the cookie contents
            Cookies.set(`user_cart`, JSON.stringify(user_cart_array));
            break;
        }
    }
}

let header = document.querySelector(`header`);
let cart = document.querySelector(`section`);
let user_cart_array = [];

//This logic is looking at whether the user_cart cookie exists or if it is empty, if so, insert a message that the cart is empty and remove the empty cookie.
if(!Cookies.get(`user_cart`) || Cookies.get(`user_cart`) === `[]`)
{
    Cookies.remove(`user_cart`);
    header.insertAdjacentHTML(`afterend`, `<h3>Your cart is empty</h3>`)
}

//If that cookie does exist, convert its contents to JS objects and store the in an array.
if(Cookies.get(`user_cart`) !== undefined)
{
    let user_cart_string = Cookies.get(`user_cart`);
    user_cart_array = JSON.parse(user_cart_string);
}

// For each of those array elements, inject HTML onto the page to display the cart contents
for(let i = 0; i < user_cart_array.length; i++)
{
    cart.insertAdjacentHTML(`afterbegin`, `<article class="product_card">
    <img class="product_image" src="${user_cart_array[i][`image_url`]}" alt="">
    <h3 class="product_title">${user_cart_array[i][`name`]}</h3>
    <p class="product_price">$${user_cart_array[i][`price`]}</p>
    <button product="${user_cart_array[i][`name`]}" class="remove_cart">REMOVE</button>
    </article>`);
}
// The HTML above also add delete buttons and this selector grabs those buttons as an array
let remove_cart_buttons = document.querySelectorAll(`.remove_cart`); 

//If those buttons are on the page, loop over them and add event listeners.
if(remove_cart_buttons !== undefined)
{
    for(let i = 0; i < remove_cart_buttons.length; i++)
    {
        remove_cart_buttons[i].addEventListener(`click`, remove_from_cart);
    }
}
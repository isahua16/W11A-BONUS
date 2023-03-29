function remove_from_cart(event)
{
    for(let i = 0; i < user_cart_array.length; i++)
    {
        event[`target`][`parentElement`].remove();
        
        if(user_cart_array[i][`name`] === event[`currentTarget`].getAttribute(`product`))
        {   
            user_cart_array.splice(i, 1);
            Cookies.set(`user_cart`, JSON.stringify(user_cart_array));
            break;
        }
    }
}

let header = document.querySelector(`header`);
let cart = document.querySelector(`section`);
let user_cart_array = [];


if(!Cookies.get(`user_cart`) || Cookies.get(`user_cart`) === `[]`)
{
    Cookies.remove(`user_cart`);
    header.insertAdjacentHTML(`afterend`, `<h3>Your cart is empty</h3>`)
}

if(Cookies.get(`user_cart`) !== undefined)
{
    let user_cart_string = Cookies.get(`user_cart`);
    user_cart_array = JSON.parse(user_cart_string);
}


for(let i = 0; i < user_cart_array.length; i++)
{
    cart.insertAdjacentHTML(`afterbegin`, `<article class="product_card">
    <img class="product_image" src="${user_cart_array[i][`image_url`]}" alt="">
    <h3 class="product_title">${user_cart_array[i][`name`]}</h3>
    <p class="product_price">$${user_cart_array[i][`price`]}</p>
    <button product="${user_cart_array[i][`name`]}" class="remove_cart">REMOVE</button>
    </article>`);
}

let remove_cart_buttons = document.querySelectorAll(`.remove_cart`); 

if(remove_cart_buttons !== undefined)
{
    for(let i = 0; i < remove_cart_buttons.length; i++)
    {
        remove_cart_buttons[i].addEventListener(`click`, remove_from_cart);
    }
}
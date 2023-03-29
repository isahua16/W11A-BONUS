function add_to_cart(event)
{
    for(let i = 0; i < products.length; i++)
    {
        if(products[i][`name`] === event[`currentTarget`].getAttribute(`product`))
        {
            user_cart.push(products[i]);
            let user_cart_cookie = JSON.stringify(user_cart);
            Cookies.set(`user_cart`, user_cart_cookie);
            break;
        }
    }
}

let user_cart = [];
if (Cookies.get(`user_cart`) !== undefined)
{
    user_cart = JSON.parse(Cookies.get(`user_cart`));
}


let add_to_cart_buttons = document.querySelectorAll(`.add_cart`);
for(let i = 0; i < add_to_cart_buttons.length; i++)
{
    add_to_cart_buttons[i].addEventListener(`click`, add_to_cart);
}


let products = [
    {
        name: `Nike Air Zoom Pegasus 38`,
        price: 120,
        description: `Experience a smooth and comfortable run with the Nike Air Zoom Pegasus 38. This shoe features Nike's famous Zoom Air technology in the forefoot and a React foam midsole for a responsive and cushioned ride. The upper is made with lightweight, breathable mesh to keep your feet cool during long runs, and Flywire cables provide a secure, customizable fit. Plus, the durable rubber outsole delivers reliable traction on a variety of surfaces.`,
        image_url: `/images/red.jpg`
    },
    {
        name: `Nike Joyride Run Flyknit`,
        price: 120,
        description: `Get ready for a truly unique running experience with the Nike Joyride Run Flyknit. This shoe features innovative Joyride beads in the sole that conform to your foot and provide targeted cushioning with every step. The Flyknit upper is breathable and stretchy for a snug, comfortable fit, and the rubber outsole offers traction on both wet and dry surfaces. Whether you're a beginner or a seasoned runner, the Joyride Run Flyknit is sure to make your runs more enjoyable.`,
        image_url: `/images/yellow.jpg`
    },
    {
        name: `Nike Free RN 5.0`,
        price: 120,
        description: `If you're looking for a minimalist shoe that still provides plenty of support and cushioning, the Nike Free RN 5.0 is for you. This shoe has a low-profile design and a flexible sole that mimics the natural motion of your foot, giving you a barefoot-like feel while still protecting your feet from impact. The lightweight mesh upper is breathable and provides a snug, sock-like fit, while the rubber outsole delivers traction and durability. Whether you're logging miles on the road or hitting the trails, the Nike Free RN 5.0 is a reliable choice for any runner.`,
        image_url: `/images/green.jpg`
    }
];

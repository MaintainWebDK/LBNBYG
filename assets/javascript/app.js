document.addEventListener('DOMContentLoaded', () => {
    let navigation = document.querySelector('nav');
    navigation.addEventListener('click', (e) => {
        console.log(e);
        if(e.target.tagName == "A"){
            //let anchor = e.target;
            let href = e.target.attributes.href.nodeValue;
            console.log(href);
            // document.querySelector(href).scrollIntoView({ 
            //     behavior: 'smooth'
            // });
        }
    })
});
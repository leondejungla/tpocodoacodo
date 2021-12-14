const toggle = (element) => {
    let items = document.getElementsByClassName('item');
    let a = element.querySelectorAll('a');
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('active')){
            items[i].classList.remove('active');
            a[0].innerHTML = `<i class='fas fa-bars'></i>`;
        }else{
            items[i].classList.add('active');
            a[0].innerHTML = `<i class='fas fa-times'></i>`;
        }         
    }
}
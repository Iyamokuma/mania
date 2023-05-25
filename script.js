 const bar = document.getElementById('bar')
 const nav = document.getElementById('navbar')

 if (bar) {
    bar.addEventListener('onclick', () => { 
        nav.classList.add('active');
    })
 } 
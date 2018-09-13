const $ = (query) => {
    return document.querySelector(query)
}

const header = $('.header-nav')

while(1) {
    console.log(header.scrollTop)
}
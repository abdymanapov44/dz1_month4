const tabBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')

let currentIndex = 0

const selectTab = (index) => {
    tabBlocks.forEach((item, i) => item.classList.toggle('active', index === i))
    tabs.forEach((item, i) => item.classList.toggle('active', index ===i ))
}

setInterval(() => {
    currentIndex++
    if (currentIndex >= tabs.length) {
        currentIndex = 0
    }
    selectTab(currentIndex)
}, 5000)

tabsParent.onclick = (event) => {
    const selectedTab = event.target.closest('.tab_content_item')
    if(!selectTab) return;
    
    const indexTab = [...tabs].indexOf(selectedTab)
    selectTab(indexTab)
}

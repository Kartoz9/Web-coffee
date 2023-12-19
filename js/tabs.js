const tabsBtn = document.querySelectorAll(".tabs-btn");
const tabsItem = document.querySelectorAll(".tabs-item")
tabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-f");
        let currentTab = document.querySelector(tabId);
        if (!currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItem.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }       
    });
});

document.querySelector('.tabs-btn').click();


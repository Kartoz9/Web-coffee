const btn = document.querySelectorAll('.btn-size');
const btnAdd = document.querySelectorAll('.btn-additives');

btnAdd.forEach(function(item) {
    item.addEventListener('click', function () {
        btnAdd.forEach(function(add) {
            add.classList.remove('active');
        });

        item.classList.add('active');
    });
});

btn.forEach(function(item) {
    item.addEventListener('click', function () {
        btn.forEach(function(btnItem) {
            btnItem.classList.remove('active');
        });

        item.classList.add('active');
    });
});

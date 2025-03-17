document.addEventListener("DOMContentLoaded", function () {
    // Recupera os IDs salvos no localStorage
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        if (checkedItems.includes(checkbox.id)) {
            checkbox.checked = true;
            let label = checkbox.nextElementSibling;
            label.classList.add("line-through", "text-gray-400");
            label.classList.remove("text-white");
        }

        checkbox.addEventListener("change", function () {
            toggleChecked(checkbox);
        });
    });
});

function toggleChecked(checkbox) {
    let label = checkbox.nextElementSibling;
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    if (checkbox.checked) {
        label.classList.add("line-through", "text-gray-400");
        label.classList.remove("text-white");

        if (!checkedItems.includes(checkbox.id)) {
            checkedItems.push(checkbox.id);
        }
    } else {
        label.classList.remove("line-through", "text-gray-400");
        label.classList.add("text-white");

        checkedItems = checkedItems.filter(id => id !== checkbox.id);
    }

    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
}
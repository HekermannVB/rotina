let editando = false;

document.addEventListener("DOMContentLoaded", function () {
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        if (checkedItems.includes(checkbox.id)) {
            checkbox.checked = true;
            atualizarEstilo(checkbox);
        }

        checkbox.addEventListener("change", function () {
            if (!editando) {
                toggleChecked(checkbox);
            } else {
                checkbox.checked = !checkbox.checked; // Impede a mudança no modo de edição
            }
        });
    });
});

function toggleChecked(checkbox) {
    let label = checkbox.nextElementSibling;
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    if (checkbox.checked) {
        label.classList.add("line-through", "text-gray-400");
        label.classList.remove("text-gray-900", "text-black", "text-white"); // 🔥 Remove cores indesejadas
        if (!checkedItems.includes(checkbox.id)) {
            checkedItems.push(checkbox.id);
        }
    } else {
        label.classList.remove("line-through", "text-gray-400");
        label.classList.add("text-white"); // 🔥 Garante que a cor padrão volte ao desmarcar
        checkedItems = checkedItems.filter(id => id !== checkbox.id);
    }

    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
}

function atualizarEstilo(checkbox) {
    let label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.add("line-through", "text-gray-400");
        label.classList.remove("text-white");
    } else {
        label.classList.remove("line-through", "text-gray-400");
        label.classList.add("text-white");
    }
}

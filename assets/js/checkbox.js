let editando = false;

document.addEventListener("DOMContentLoaded", function () {
    let checkedItems = JSON.parse(localStorage.getItem("checkedItems")) || [];

    document.querySelectorAll("input[type='checkbox']").forEach(checkbox => {
        if (checkedItems.includes(checkbox.id)) {
            checkbox.checked = true;
            let label = checkbox.nextElementSibling;
            label.classList.add("line-through", "text-gray-400");
            label.classList.remove("text-white");
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

function editarRotina() {
    editando = !editando;

    const labels = document.querySelectorAll('label');
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const removeButtons = document.querySelectorAll('.remove');
    const addTaskButtons = document.querySelectorAll('.addTaskBtn');

    labels.forEach(label => {
        if (editando) {
            label.setAttribute("contenteditable", "true");
            label.classList.add("border", "border-gray-300", "p-1", "bg-white", "text-black");
        } else {
            label.removeAttribute("contenteditable");
            label.classList.remove("border", "border-gray-300", "p-1", "bg-white", "text-black");
        }
    });

    checkboxes.forEach(checkbox => {
        checkbox.disabled = editando; // Desativa os checkboxes no modo edição
    });

    removeButtons.forEach(button => {
        button.classList.toggle("hidden", !editando);
    });

    addTaskButtons.forEach(button => {
        button.classList.toggle("hidden", !editando);
    });
}

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

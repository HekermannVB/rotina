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
            label.classList.remove("text-gray-400", "line-through", "text-white");
        } else {
            label.removeAttribute("contenteditable");
            label.classList.remove("border", "border-gray-300", "p-1", "bg-white", "text-black");

            // Restaurar cor do texto corretamente
            const checkbox = document.getElementById(label.getAttribute("for"));
            atualizarEstilo(checkbox);
        }
    });

    checkboxes.forEach(checkbox => {
        checkbox.disabled = editando;
    });

    removeButtons.forEach(button => {
        button.classList.toggle("hidden", !editando);
    });

    addTaskButtons.forEach(button => {
        button.classList.toggle("hidden", !editando);
    });
}
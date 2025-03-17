function editarRotina() {
    editando = !editando;

    const labels = document.querySelectorAll('label');
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const removeButtons = document.querySelectorAll('.remove');
    const addTaskButtons = document.querySelectorAll('.addTaskBtn');
    const editButton = document.getElementById("editButton");
    const editIcon = document.getElementById("editIcon");

    labels.forEach(label => {
        if (editando) {
            label.setAttribute("contenteditable", "true");
            label.style.backgroundColor = "#f0f0f0";
            label.style.color = "#000";
            label.style.padding = "5px";
            label.style.border = "1px solid #ccc";
            label.style.borderRadius = "4px";
            label.style.display = "inline-block";

            // 🔥 🔴 Limitações de tamanho 🔴 🔥
            label.style.width = "200px";  // Largura fixa
            label.style.maxWidth = "200px";
            label.style.height = "45px";  // Altura para acomodar 2 linhas
            label.style.maxHeight = "45px";
            label.style.overflow = "hidden";  // Evita expansão inesperada
            label.style.whiteSpace = "normal"; // Permite quebra de linha
            label.style.wordWrap = "break-word"; // Quebra automaticamente o texto longo

            // 🔥 🔴 Permite apenas 2 linhas 🔴 🔥
            label.style.display = "-webkit-box";
            label.style.webkitBoxOrient = "vertical";
            label.style.webkitLineClamp = "2";
        } else {
            label.removeAttribute("contenteditable");
            label.style.backgroundColor = "transparent";
            label.style.color = "white";
            label.style.border = "none";
            label.style.padding = "0";
            label.style.width = "";
            label.style.height = "";
            label.style.whiteSpace = "normal";
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

    // 🔥 🔴 Atualiza o botão 🔴 🔥
    if (editando) {
        editButton.classList.remove("bg-blue-700", "hover:bg-blue-800", "dark:bg-blue-600", "dark:hover:bg-blue-700");
        editButton.classList.add("bg-red-600", "hover:bg-red-700", "dark:bg-red-500", "dark:hover:bg-red-600");
        editIcon.innerHTML = `
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 4.5l9 9m0-9l-9 9" />
        `;
    } else {
        editButton.classList.remove("bg-red-600", "hover:bg-red-700", "dark:bg-red-500", "dark:hover:bg-red-600");
        editButton.classList.add("bg-blue-700", "hover:bg-blue-800", "dark:bg-blue-600", "dark:hover:bg-blue-700");
        editIcon.innerHTML = `
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 1v16M1 9h16" />
        `;
    }
}

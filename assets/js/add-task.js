function addTask(periodo) {
    const container = document.getElementById(`tasks-${periodo}`);
    const taskId = `checkbox-${periodo}-${document.querySelectorAll(`#tasks-${periodo} input[type="checkbox"]`).length + 1}`;

    const div = document.createElement("div");
    div.className = "flex items-center w-64";
    div.innerHTML = `
        <input id="${taskId}" type="checkbox" class="w-5 h-5">
        <label for="${taskId}" class="ml-3 text-lg font-medium text-white transition-all border border-gray-300 p-1 bg-white text-black" contenteditable="true">Nova Tarefa</label>
        <button class="remove ml-2 text-red-500" onclick="removeTask(this)">Remover</button>
    `;

    container.insertBefore(div, container.lastElementChild); // Adiciona a nova tarefa antes do botão "Adicionar"
}
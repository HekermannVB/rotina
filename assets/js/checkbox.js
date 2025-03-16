function toggleChecked(checkbox) {
    let label = checkbox.nextElementSibling;
    if (checkbox.checked) {
        label.classList.remove("text-white");
        label.classList.add("line-through", "text-gray-400");
    } else {
        label.classList.remove("line-through", "text-gray-400");
        label.classList.add("text-white");
    }
}
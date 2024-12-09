document.getElementById("orderButton").addEventListener("click", () => {
    const list = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    const order = parseInt(prompt("Enter 1 for ascending or -1 for descending:"));

    if (order === 1) {
        alert("List in Ascending Order: " + list.sort().join(", "));
        document.getElementById("listDisplay").textContent = list.join(", ");
    } else if (order === -1) {
        alert("List in Descending Order: " + list.sort().reverse().join(", "));
        document.getElementById("listDisplay").textContent = list.reverse().join(", ");
    } else {
        alert("Invalid input! Please enter 1 or -1.");
    }
});

document.getElementById("splitButton").addEventListener("click", () => {
    const input = document.getElementById("textInput").value;
    const words = input.split(",").map(word => word.trim()).reverse();

    alert("Reversed Words: " + words.join(", "));

    const textFieldsDiv = document.getElementById("textFields");
    textFieldsDiv.innerHTML = "";
    words.forEach(word => {
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.value = word;
        textFieldsDiv.appendChild(inputField);
    });

    alert("Final String: " + words.join(", "));
});

document.getElementById("multiplesButton").addEventListener("click", () => {
    const multiples = Array.from({ length: 10 }, (_, i) => 9 * (i + 1));
    document.getElementById("multiplesDisplay").textContent = multiples.join(", ");
});

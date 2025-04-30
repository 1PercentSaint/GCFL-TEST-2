
document.addEventListener("DOMContentLoaded", function() {
    const rankingsUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTs-0wyAqwdYhnwdDjto0FLzSorCFNFpA64RoNlwrx730Hid37zbs_NpLVHyyjg588bdwrenQOeTQj/pub?output=csv";
    const rankingsContainer = document.getElementById("rankings");

    fetch(rankingsUrl)
        .then(response => response.text())
        .then(csv => {
            let rows = csv.split("\n");
            let table = "<table>";
            rows.forEach((row, index) => {
                if (row.trim()) {
                    let columns = row.split(",");
                    table += `<tr>`;
                    columns.forEach(col => {
                        table += `<td>${col}</td>`;
                    });
                    table += `</tr>`;
                }
            });
            table += "</table>";
            rankingsContainer.innerHTML = table;
        })
        .catch(error => {
            rankingsContainer.innerHTML = "Failed to load rankings.";
            console.error(error);
        });
});

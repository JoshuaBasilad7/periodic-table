document.addEventListener('DOMContentLoaded', function() {
  fetch('periodic-table.json')
    .then(response => response.json())
    .then(data => {
      const elements = data.elements;
      const periodicTable = document.querySelector('.periodic-table');

      elements.forEach(element => {
        const atomicMassFormatted = element.atomic_mass.toFixed(3);

        const elementDiv = document.createElement('div');
        elementDiv.classList.add('element');
        elementDiv.classList.add(element.symbol.toLowerCase()); // Add class based on symbol

        elementDiv.innerHTML = `
          <div class="atomic-number">${element.number}</div>
          <div class="symbol">${element.symbol}</div>
          <div class="name">${element.name}</div>
          <div class="atomic-mass">${atomicMassFormatted}</div>
        `;

        // Calculate grid position based on period and group
        const row = element.period;
        const col = element.group;

        // Set CSS Grid Layout properties
        elementDiv.style.gridRow = row;
        elementDiv.style.gridColumn = col;

        periodicTable.appendChild(elementDiv);
      });
    })
    .catch(error => console.error('Error fetching periodic table data:', error));
});

// Store the data points
let dataPoints = [];

// Get the form and list elements
const dataForm = document.getElementById('dataForm');
const dataList = document.getElementById('dataList');

// Function to handle form submission
function addDataPoint(event) {
  event.preventDefault(); // Prevent form submission

  // Get the values from the input fields
  const xValue = parseFloat(document.getElementById('xInput').value);
  const yValue = parseFloat(document.getElementById('yInput').value);

  // Create a data point object
  const dataPoint = { x: xValue, y: yValue };

  // Add the data point to the array
  dataPoints.push(dataPoint);

  // Clear the input fields
  document.getElementById('xInput').value = '';
  document.getElementById('yInput').value = '';

  // Update the data list
  updateDataList();

  // Add event listeners for remove and edit buttons
  const removeButton = dataList.lastChild.querySelector('.remove-button');
  const editButton = dataList.lastChild.querySelector('.edit-button');
  removeButton.addEventListener('click', () => removeDataPoint(dataPoint));
  editButton.addEventListener('click', () => editDataPoint(dataPoint));
}

// Function to remove a data point
function removeDataPoint(dataPoint) {
  // Find the index of the data point
  const index = dataPoints.indexOf(dataPoint);

  // Remove the data point from the array
  dataPoints.splice(index, 1);

  // Update the data list
  updateDataList();
}

// Function to edit a data point
function editDataPoint(dataPoint) {
  // Find the index of the data point
  const index = dataPoints.indexOf(dataPoint);

  // Get the values from the input fields
  const xValue = parseFloat(document.getElementById('xInput').value);
  const yValue = parseFloat(document.getElementById('yInput').value);

  // Update the data point values
  dataPoints[index].x = xValue;
  dataPoints[index].y = yValue;

  // Clear the input fields
  document.getElementById('xInput').value = '';
  document.getElementById('yInput').value = '';

  // Update the data list
  updateDataList();
}

// Function to update the data list
function updateDataList() {
  // Clear the data list
  dataList.innerHTML = '';

  // Populate the data list with the current data points
  dataPoints.forEach((dataPoint) => {
    const li = document.createElement('li');
    li.textContent = `X: ${dataPoint.x}, Y: ${dataPoint.y}`;

    // Create remove and edit buttons
    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.textContent = 'Remove';

    // Add event listeners for remove and edit buttons
    removeButton.addEventListener('click', () => removeDataPoint(dataPoint));

    // Append buttons to the list item
    li.appendChild(removeButton);

    dataList.appendChild(li);
  });
}

// Add event listener for form submission
dataForm.addEventListener('submit', addDataPoint);

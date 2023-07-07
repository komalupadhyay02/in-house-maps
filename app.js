var startInput = document.getElementById('start-input');
var startDropdown = document.getElementById('start-dropdown');
var endInput = document.getElementById('end-input');
var endDropdown = document.getElementById('end-dropdown');

var options = ["AB1", "Central Library", "AB2", "Complex","registrar office","AB3","Bank","ATM","yamuna hostel","ganga hostel","kalpana chawla hostel","AB4","AB5","AB6","AB7","AB8","AB9","AB10","Wings","Godavari Hostel","BasketBall court","Auditorium","Atheletic ground"];

startInput.addEventListener('input', function() {
  showDropdown(startInput.value, startDropdown);
});

endInput.addEventListener('input', function() {
  showDropdown(endInput.value, endDropdown);
});

function showDropdown(query, dropdown) {
  dropdown.innerHTML = '';

  if (query.length === 0) {
    dropdown.style.display = 'none';
    return;
  }

  var matchingOptions = options.filter(function(option) {
    return option.toLowerCase().startsWith(query.toLowerCase());
  });

  if (matchingOptions.length === 0) {
    dropdown.style.display = 'none';
    return;
  }

  matchingOptions.forEach(function(option) {
    var optionItem = document.createElement('li');
    optionItem.textContent = option;

    optionItem.addEventListener('click', function() {
      setOption(option, dropdown.previousElementSibling);
    });

    dropdown.appendChild(optionItem);
  });

  dropdown.style.display = 'block';
}

function setOption(option, input) {
  input.value = option;
  input.nextElementSibling.style.display = 'none';
}

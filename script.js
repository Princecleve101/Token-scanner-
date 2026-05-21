function generate() {
  const input = document.getElementById('inputText').value.trim();
  const resultDiv = document.getElementById('result');
  
  if (!input) {
    resultDiv.innerHTML = 'Please enter some text';
    return;
  }
  
  // Example: convert text to uppercase
  const output = input.toUpperCase();
  resultDiv.innerHTML = output;
}
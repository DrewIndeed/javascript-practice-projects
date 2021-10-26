// Write a JavaScript function to escape a HTML string
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

console.log(
  escapeHtml('<a href="javascript-string-exercise-17.php" target="_blank">')
);

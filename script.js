const bugForm = document.getElementById('bugForm');
const bugList = document.getElementById('bugList');
let bugs = [];

bugForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const severity = document.getElementById('severity').value;

  const bug = {
    id: Date.now(),
    title,
    description,
    severity,
    status: 'Open'
  };

  bugs.push(bug);
  displayBugs();
  bugForm.reset();
});

function displayBugs() {
  bugList.innerHTML = '';
  bugs.forEach(bug => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${bug.title}</strong> (${bug.severity})<br>
      ${bug.description}<br>
      Status: ${bug.status}
    `;
    bugList.appendChild(li);
  });
}

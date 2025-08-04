const bugForm = document.getElementById('bugForm');
const bugList = document.getElementById('bugList');
let bugs = [];

bugForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const severity = document.getElementById('severity').value;
  const priority = document.getElementById('priority').value;
  const environment = document.getElementById('environment').value;
  const description = document.getElementById('description').value;
  const label = document.getElementById('label').value;
  const attachment = document.getElementById('attachment').files[0];

  const bug = {
    id: Date.now(),
    title,
    severity,
    priority,
    environment,
    description,
    label,
    attachmentName: attachment ? attachment.name : 'None',
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
      <strong>${bug.title}</strong><br>
      Severity: ${bug.severity} | Priority: ${bug.priority} | Environment: ${bug.environment}<br>
      Label: ${bug.label}<br>
      Description: ${bug.description}<br>
      Attachment: ${bug.attachmentName}<br>
      Status: ${bug.status}
    `;
    bugList.appendChild(li);
  });
}

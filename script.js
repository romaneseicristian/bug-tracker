const bugForm = document.getElementById('bugForm');
const bugList = document.getElementById('bugList');

// Load existing bugs from localStorage
let bugs = JSON.parse(localStorage.getItem('bugs')) || [];
displayBugs();

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
  localStorage.setItem('bugs', JSON.stringify(bugs));
  displayBugs();
  bugForm.reset();
});

function displayBugs() {
  bugList.innerHTML = '';
  bugs.forEach(bug => {
    const li = document.createElement('li');
    li.classList.add('bug-entry'); // optional for styling the whole entry

    li.innerHTML = `
      <strong class="truncate-text">${bug.title}</strong><br>
      <span class="${getSeverityClass(bug.severity)}">Severity: ${bug.severity}</span> | <span class="${getPriorityClass(bug.priority)}">Priority: ${bug.priority}</span> | Environment: ${bug.environment}<br>
      <span class="truncate-text">Label: ${bug.label}</span><br>
      <span class="truncate-text">Description: ${bug.description}</span><br>
      Attachment: ${bug.attachmentName}<br>
      Status: ${bug.status}
    `;
    bugList.appendChild(li);
  });
}

function getSeverityClass(severity) {
  switch (severity.toLowerCase()) {
    case 'low': return 'severity-low';
    case 'medium': return 'severity-medium';
    case 'high':
    case 'critical': return 'severity-high';
    default: return '';
  }
}

function getPriorityClass(priority) {
  switch (priority.toLowerCase()) {
    case 'low': return 'priority-low';
    case 'medium': return 'priority-medium';
    case 'high':
    case 'urgent': return 'priority-high';
    default: return '';
  }
}

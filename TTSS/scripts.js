// Dashboard Data
const cohortData = [
    'AI Academy',
    'Cloud Computing',
    'IT Support',
    'Demand',
    'Clickatell4',
    'Ardagh',
    'Software Development'
  ];
  
  const groupData = [
    'Tech Devs',
    'Developers',
    'Young stars',
    'Beautiful minds',
    'Tech Squad',
    'Bright Minds',
    'Web Dev Team',
    'Mobile Squad'
  ];
  
  const candidateData = [
    'Sipho',
    'Anele',
    'Lwazi',
    'Aluve',
    'Thandile',
    'Live',
    'John',
    'Mary'
  ];
  
  // DOM Elements
  document.addEventListener('DOMContentLoaded', function() {
    // Card buttons
    const cohortButton = document.getElementById('cohort-button');
    const groupButton = document.getElementById('group-button');
    const candidateButton = document.getElementById('candidate-button');
    
    // Lists
    const cohortList = document.getElementById('cohort-list');
    const groupList = document.getElementById('group-list');
    const candidateList = document.getElementById('candidate-list');
    
    // Select elements
    const cohortSelect = document.getElementById('cohort-select');
    const groupSelect = document.getElementById('group-select');
    const goButton = document.getElementById('go-button');
    
    // Toggle cohort list view
    let cohortExpanded = false;
    cohortButton.addEventListener('click', function() {
      cohortExpanded = !cohortExpanded;
      updateCohortList();
      cohortButton.textContent = cohortExpanded ? 'Show Less' : 'All Shown';
    });
    
    // Toggle group list view
    let groupExpanded = false;
    groupButton.addEventListener('click', function() {
      groupExpanded = !groupExpanded;
      updateGroupList();
      groupButton.textContent = groupExpanded ? 'Show Less' : 'All Shown';
    });
    
    // Toggle candidate list view
    let candidateExpanded = false;
    candidateButton.addEventListener('click', function() {
      candidateExpanded = !candidateExpanded;
      updateCandidateList();
      candidateButton.textContent = candidateExpanded ? 'Show Less' : 'All Shown';
    });
    
    // Update cohort list based on expanded state
    function updateCohortList() {
      // Clear the list
      cohortList.innerHTML = '';
      
      // Get the data to display (all or limited)
      const displayData = cohortExpanded ? cohortData : cohortData.slice(0, 4);
      
      // Populate the list
      displayData.forEach(item => {
        const li = document.createElement('li');
        const dot = document.createElement('span');
        dot.className = 'dot';
        li.appendChild(dot);
        li.appendChild(document.createTextNode(item));
        cohortList.appendChild(li);
      });
    }
    
    // Update group list based on expanded state
    function updateGroupList() {
      // Clear the list
      groupList.innerHTML = '';
      
      // Get the data to display (all or limited)
      const displayData = groupExpanded ? groupData : groupData.slice(0, 4);
      
      // Populate the list
      displayData.forEach(item => {
        const li = document.createElement('li');
        const dot = document.createElement('span');
        dot.className = 'dot';
        li.appendChild(dot);
        li.appendChild(document.createTextNode(item));
        groupList.appendChild(li);
      });
    }
    
    // Update candidate list based on expanded state
    function updateCandidateList() {
      // Clear the list
      candidateList.innerHTML = '';
      
      // Get the data to display (all or limited)
      const displayData = candidateExpanded ? candidateData : candidateData.slice(0, 4);
      
      // Populate the list
      displayData.forEach(item => {
        const li = document.createElement('li');
        const dot = document.createElement('span');
        dot.className = 'dot';
        li.appendChild(dot);
        li.appendChild(document.createTextNode(item));
        candidateList.appendChild(li);
      });
    }
    
    // Enable/disable Go button based on cohort selection
    cohortSelect.addEventListener('change', function() {
      goButton.disabled = !cohortSelect.value;
    });
    
    // Navigate to groups when Go button is clicked
    goButton.addEventListener('click', function() {
      alert('Navigating to groups for the selected cohort: ' + 
            cohortSelect.options[cohortSelect.selectedIndex].text);
      
      // Highlight the Groups item in the sidebar
      document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Find the Groups link and make it active
      document.querySelectorAll('.sidebar-item').forEach(item => {
        if (item.textContent.trim() === 'Groups') {
          item.classList.add('active');
        }
      });
    });
  });
  // Placeholder for Add New Mentor functionality
function addMentor() {
  alert('Add mentor functionality to be implemented');
}

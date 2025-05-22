// Placeholder for future features
console.log("Tech Talent Scorecard System ready.");

// Login form handling
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Logging in (stub)'); // Replace with real logic
    });
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Account created (stub)'); // Replace with real logic
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle'); // Add this if using a button

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('expanded');
    });
  }
   if (addGroupBtn) {
    addGroupBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }

  if (addGroupForm) {
    addGroupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const groupName = document.getElementById('groupName').value;
      const cohort = document.getElementById('cohort').value;
      const members = document.getElementById('members').value;
      const mentor = document.getElementById('mentor').value;
      const status = document.getElementById('status').value;

      // Create new table row
      const tbody = document.querySelector('.groups-table tbody');
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${groupName}</td>
        <td>${cohort}</td>
        <td>${members}</td>
        <td>${mentor}</td>
        <td><span class="status-active">${status}</span></td>
        <td><a href="#" class="action-link">Manage</a></td>
      `;
      tbody.appendChild(newRow);

      // Close modal and reset form
      modal.style.display = 'none';
      addGroupForm.reset();
    });
  }
});

function closeModal() {
  const modal = document.getElementById('addGroupModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('addGroupModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// JavaScript for handling score selection and comments display
    document.addEventListener('DOMContentLoaded', function () {
      const scoreSelects = document.querySelectorAll('.score-select');
      const scoreComments = document.querySelectorAll('.score-comment');

      // Function to update cell background based on score
      function updateCellBackground(select) {
        const cell = select.closest('.score-cell');
        // Remove existing score classes
        cell.classList.remove('score-1-cell', 'score-2-cell', 'score-3-cell', 'score-4-cell', 'score-5-cell');
        // Add appropriate score class
        cell.classList.add(`score-${select.value}-cell`);
      }

      // Update cell backgrounds on page load
      scoreSelects.forEach(updateCellBackground);

      // Add event listeners to all score selects
      scoreSelects.forEach(select => {
        select.addEventListener('change', function () {
          // Update the cell background
          updateCellBackground(this);

          // Show relevant score comments
          const criteria = this.getAttribute('data-criteria');
          scoreComments.forEach(comment => {
            comment.classList.remove('active');
          });

          const activeComment = document.getElementById(`${criteria}-comments`);
          if (activeComment) {
            activeComment.classList.add('active');
          }

          // Recalculate overall score for the student (simplified calculation)
          const studentId = this.getAttribute('data-student');
          const studentScores = document.querySelectorAll(`.score-select[data-student="${studentId}"]`);
          let total = 0;

          studentScores.forEach(scoreSelect => {
            total += parseInt(scoreSelect.value);
          });

          const average = Math.round((total / studentScores.length) * 20); // Convert to percentage
          const scoreCell = this.closest('tr').querySelector('.overall-score');
          scoreCell.textContent = `${average}%`;
        });
      });

      // Show different score comments when clicking on column headers
      const headers = document.querySelectorAll('.evaluation-table th');

      headers.forEach((header, index) => {
        if (index > 0 && index < 7) { // Skip first (name) and last two columns (overall score and group)
          header.addEventListener('click', function () {
            const headerText = this.textContent.toLowerCase().replace(/\s+/g, '-');
            // Simplification for demo, in real app would use proper mapping
            let criteria = headerText.includes('attendance') ? 'attendance' :
              headerText.includes('communication') ? 'communication' :
                headerText.includes('accountability') ? 'accountability' :
                  headerText.includes('creativity') ? 'creativity' :
                    headerText.includes('project') ? 'project-delivery' : 'tech-skills';

            scoreComments.forEach(comment => {
              comment.classList.remove('active');
            });

            const activeComment = document.getElementById(`${criteria}-comments`);
            if (activeComment) {
              activeComment.classList.add('active');
            }
          });
        }
      });
    });


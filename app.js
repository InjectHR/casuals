const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const riskBoxes = Array.from(document.querySelectorAll('input[name="risk"]'));
const riskResult = document.querySelector('#risk-result');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}

function updateRiskResult() {
  const score = riskBoxes.filter((box) => box.checked).length;

  if (!riskResult) return;

  if (score >= 5) {
    riskResult.textContent = 'High process risk: treat this as regular and systematic. Use a warning process for performance or conduct issues, and a redundancy-style process if the work or role is ending.';
    return;
  }

  if (score >= 2) {
    riskResult.textContent = 'Moderate process risk: pause before acting. Review rosters, timesheets, manager messages, conversion history, and whether the employee reasonably expected ongoing work.';
    return;
  }

  if (score === 1) {
    riskResult.textContent = 'Low to moderate risk: document why the work is ad hoc and check whether any other evidence points to an ongoing pattern.';
    return;
  }

  riskResult.textContent = 'Select any indicators that apply.';
}

riskBoxes.forEach((box) => {
  box.addEventListener('change', updateRiskResult);
});

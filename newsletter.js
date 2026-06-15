document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('dl-email');
  const submitBtn = document.getElementById('dl-submit');
  const msgEl = document.getElementById('dl-msg');

  const WORKER_URL = 'https://newsletter.nonhumanidentitysoftware.com';
  const GROUP_ID = '189858273326793780'; // Defender Free

  if (!submitBtn || !emailInput || !msgEl) return;

  submitBtn.addEventListener('click', async function () {
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      showMessage('Please enter a valid email address.', true);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, group_id: GROUP_ID }),
      });

      const data = await response.json();

      if (data.message === 'Subscribed') {
        showMessage('Thanks — check your inbox for the spreadsheet.', false);
        emailInput.value = '';
      } else {
        showMessage(data.detail || 'Something went wrong. Please try again.', true);
      }
    } catch (err) {
      showMessage('Something went wrong. Please try again.', true);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Get the spreadsheet';
    }
  });

  function showMessage(text, isError) {
    msgEl.textContent = text;
    msgEl.classList.toggle('error', isError);
    msgEl.style.display = 'block';
  }
});
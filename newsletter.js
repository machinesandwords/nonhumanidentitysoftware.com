document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.newsletter-block form');
  const emailInput = document.getElementById('nl-email');
  const submitBtn = document.getElementById('nl-submit');
  const msgEl = document.getElementById('nl-msg');

  const WORKER_URL = 'https://newsletter.nonhumanidentitysoftware.com';
  const GROUP_ID = '189858273326793780'; // Defender Free

  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) {
      showMessage('Please enter your email address.', 'error');
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, group_id: GROUP_ID }),
      });

      const data = await response.json();

      if (data.message === 'Subscribed') {
        showMessage('Thanks — check your inbox to confirm.', 'success');
        emailInput.value = '';
      } else {
        showMessage(data.detail || 'Something went wrong. Please try again.', 'error');
      }
    } catch (err) {
      showMessage('Something went wrong. Please try again.', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Subscribe';
    }
  });

  function showMessage(text, type) {
    msgEl.textContent = text;
    msgEl.className = type === 'success' ? 'nl-msg-success' : 'nl-msg-error';
    msgEl.style.display = 'block';
  }
});
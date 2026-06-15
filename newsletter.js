document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('dl-email');
  const submitBtn = document.getElementById('dl-submit');
  const msgEl = document.getElementById('dl-msg');

  const WORKER_URL = 'https://newsletter.nonhumanidentitysoftware.com';
  const GROUP_ID = '189858273326793780'; // Defender Free

  const DOWNLOAD_URL = '/guides/nhi-rfp-framework/nhi-rfp-evaluation-matrix.xlsx';
  const DOWNLOAD_FILENAME = 'nhi-rfp-evaluation-matrix.xlsx';

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
        triggerDownload(DOWNLOAD_URL, DOWNLOAD_FILENAME);
        showMessage('Thanks — your download should start automatically. If it doesn\'t, ', false, true);
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

  function triggerDownload(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function showMessage(text, isError, includeLink) {
    msgEl.textContent = text;
    msgEl.classList.toggle('error', isError);

    if (includeLink) {
      const link = document.createElement('a');
      link.href = DOWNLOAD_URL;
      link.download = DOWNLOAD_FILENAME;
      link.textContent = 'click here';
      msgEl.appendChild(link);
      msgEl.appendChild(document.createTextNode('.'));
    }

    msgEl.style.display = 'block';
  }
});
/**
 * nav.js — Shared sidebar navigation
 * nonhumanidentitysoftware.com
 * Injected into every page. Edit once, updates everywhere.
 */

(function() {
  const nav = `
    <div class="nav-section">
      <div class="nav-section-label">Why</div>
      <a href="/why/" class="nav-item depth-0">The ghosts are the machine</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Landscape</div>
      <a href="/landscape/" class="nav-item depth-0">Market overview</a>
      <a href="/landscape/vendor-index/" class="nav-item depth-1">&#9500; Vendor index</a>
      <a href="/landscape/market-direction/" class="nav-item depth-1">&#9492; Market direction</a>
      <a href="/landscape/compliance/" class="nav-item depth-1">&#9492; Compliance & governance</a>
    </div>

    <div class="nav-divider"></div>

        <div class="nav-section">
      <div class="nav-section-label">Tools</div>
      <a href="/tools/" class="nav-item depth-0">TBD overview</a>
      <a href="/tools/vendor-comparison/" class="nav-item depth-1">&#9500; Vendor index</a>
      <a href="/tools/market-direction/" class="nav-item depth-1">&#9492; TBD direction</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Comparisons</div>
      <a href="/comparisons/" class="nav-item depth-0">All comparisons</a>
      <a href="/comparisons/astrix-vs-oasis/" class="nav-item depth-1">&#9500; Astrix vs. Oasis</a>
      <a href="/comparisons/entro-vs-clutch/" class="nav-item depth-1">&#9500; Entro vs. Clutch</a>
      <a href="/comparisons/cyberark-vs-hashicorp-vault/" class="nav-item depth-1">&#9500; CyberArk vs. HashiCorp</a>
      <a href="/comparisons/gitguardian-vs-astrix/" class="nav-item depth-1">&#9492; GitGuardian vs. Astrix</a>
      <a href="/comparisons/" class="nav-item depth-0">more</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <div class="nav-section-label">Guides</div>
      <a href="/guides/" class="nav-item depth-0">All guides</a>
      <a href="/guides/nhi-discovery/" class="nav-item depth-1">&#9500; NHI discovery</a>
      <a href="/guides/secrets-vs-workload-identity/" class="nav-item depth-1">&#9492; Secrets vs. workload identity</a>
    </div>

    <div class="nav-divider"></div>

    <div class="nav-section">
      <a href="/subscribe/" class="nav-item depth-0 nav-subscribe">Subscribe &rarr;</a>
    </div>
  `;

  const container = document.getElementById('sidebar-nav');
  if (container) {
    container.innerHTML = nav;

    const path = window.location.pathname;
    const links = container.querySelectorAll('a.nav-item');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (href !== '/' && path.startsWith(href))) {
        link.classList.add('active');
      }
    });
  }

})();

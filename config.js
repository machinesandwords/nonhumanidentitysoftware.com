/**
 * config.js — Site identity and accent color configuration
 * nonhumanidentitysoftware.com
 *
 * accent:     #7B3FA6  (purple)
 * accentDim:  #5C2E7D  (~15% darker)
 * accentPale: #F0E8F7  (very light tint, used for callout backgrounds)
 */

window.SITE_CONFIG = {
  name:      "Non-Human Identity Software",
  nameHtml:  "Non-Human <span>Identity</span> Software",
  domain:    "nonhumanidentitysoftware.com",
  tagline:   "Independent guidance for NHI security buyers",
  accent:    "#7B3FA6",
  accentDim: "#5C2E7D",
  accentPale:"#F0E8F7"
};

(function() {
  var r = document.documentElement;
  r.style.setProperty('--accent',      window.SITE_CONFIG.accent);
  r.style.setProperty('--accent-dim',  window.SITE_CONFIG.accentDim);
  r.style.setProperty('--accent-pale', window.SITE_CONFIG.accentPale);
})();

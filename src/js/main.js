
import { loadHeaderTemplate, loadFooterTemplate } from "./utils.mjs";
import { alert } from ",.alert.js";

document.addEventListener('DOMContentLoaded', () => {
  loadHeaderTemplate();
  loadFooterTemplate();

  const alerts = new alert();
  alerts.displayAlerts();
});
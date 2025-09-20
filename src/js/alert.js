export default class alert {
  constructor() {
    this.alert = [];
  }

  async loadAlerts() {
    try {
      const response = await fetch('../json/alert.json');
      if (response.ok) {
        this.alert = await response.json();
        this.displayAlerts();
      } else {
        console.error('Failed to load alert:', response.status);
      }
    } catch (error) {
      console.error('Error fetching alert:', error);
    }
  }

  displayAlerts() {
    if (this.alert.length > 0) {
      const alertSection = document.createElement('section');
      alertSection.className = 'alert-list';

      this.alert.forEach(alert => {
        const p = document.createElement('p');
        p.textContent = alert.message;
        p.style.backgroundColor = alert.background;
        p.style.color = alert.color;
        alertSection.appendChild(p);
      });

      const mainEl = document.querySelector('main');
      if (mainEl) {
        mainEl.insertAdjacentElement('afterbegin', alertSection);
      } else {
        document.body.insertAdjacentElement('afterbegin', alertSection);
      }
    }
  }
}
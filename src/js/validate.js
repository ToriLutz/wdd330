 function validateForm() {
      const form = document.getElementById('checkout');
      if (!form.checkValidity()) {
        alert('Please fill out all required fields correctly.');
        return false;
      }
      alert('Order submitted successfully!');
      return true;
    }
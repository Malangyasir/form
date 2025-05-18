 function switchForm(formId, tabElement) {
      const forms = document.querySelectorAll('form');
      forms.forEach(form => form.classList.remove('active'));
      document.getElementById(formId).classList.add('active');

      const tabs = document.querySelectorAll('.tab');
      tabs.forEach(tab => tab.classList.remove('active'));

      if (tabElement) tabElement.classList.add('active');
      else {
        tabs.forEach(tab => {
          if (tab.textContent.toLowerCase() === formId) tab.classList.add('active');
        });
      }
    }
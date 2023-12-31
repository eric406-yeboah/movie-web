document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const signupPopup = document.getElementById('signupPopup');
  
    openPopupBtn.addEventListener('click', function () {
      signupPopup.style.display = 'block';
    });
  
    closePopupBtn.addEventListener('click', function () {
      signupPopup.style.display = 'none';
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('open');
    const closePopupBtn = document.getElementById('closePopupBtn1');
    const signupPopup = document.getElementById('signupPopup1');
  
    openPopupBtn.addEventListener('click', function () {
      signupPopup.style.display = 'block';
    });
  
    closePopupBtn.addEventListener('click', function () {
      signupPopup.style.display = 'none';
    });
  });
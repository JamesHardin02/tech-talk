var idleTimeout = function () {
  var time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;
  document.onmousedown = resetTimer;
  document.onclick = resetTimer; 
  document.addEventListener('scroll', resetTimer, true);

  // logout called after set time (5 minutes)
  async function logout() {
    // destroys session
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    // routes to homepage
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
    alert("You are now logged out for being idle.")
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 300000)
  }
};

// whenever main.handlebars loads idleTimeout is called
window.onload = function() {
  idleTimeout();
}
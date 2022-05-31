var loginTimeout = function () {
  var time;
  window.onload = resetTimer;
  // DOM Events
  document.onmousemove = resetTimer;
  document.onkeydown = resetTimer;
  document.onmousedown = resetTimer;
  document.onclick = resetTimer; 
  document.addEventListener('scroll', resetTimer, true);

  async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
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

window.onload = function() {
  loginTimeout();
}
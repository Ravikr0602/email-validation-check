
function validation() {
  let form = document.getElementById('form')
  let check_email_id = document.getElementById('check_email').value
  let result = document.getElementById('result')
  let follow_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (check_email_id.match(follow_pattern)) {
    form.classList.add('valid')
    form.classList.remove('invalid')
    result.innerHTML = "Your Email Address in valid"
    result.style.color = '#00ff00'
  } else {
    form.classList.remove('valid')
    form.classList.add('invalid')
    result.innerHTML = "Please Enter Correct Email id.."
    result.style.color = '#ff0000'
  }

  if (check_email_id == '') {
    form.classList.remove('valid')
    form.classList.remove('invalid')
    result.innerHTML = ""
    result.style.color = '#00ff00'
  }
}




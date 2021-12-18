function telephoneCheck(str) {
    let numberCheck = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
  return numberCheck.test(str);
}

telephoneCheck("555-555-5555");
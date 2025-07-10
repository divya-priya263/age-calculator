document.getElementById("ageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value) - 1; // JS months are 0-based
  const year = parseInt(document.getElementById("year").value);

  const birthDate = new Date(year, month, day);
  const today = new Date();

  // Input validation
  if (isNaN(birthDate.getTime()) || birthDate > today) {
    document.getElementById("result").innerText = "Please enter a valid date of birth.";
    return;
  }

  // Calculate age
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += prevMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  document.getElementById("result").innerText =
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});

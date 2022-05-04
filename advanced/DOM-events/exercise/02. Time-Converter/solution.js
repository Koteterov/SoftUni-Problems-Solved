function attachEventsListeners() {
  let inputDays = document.getElementById("days");
  let inpuHours = document.getElementById("hours");
  let inputMinutes = document.getElementById("minutes");
  let inputSeconds = document.getElementById("seconds");

  document.getElementById("daysBtn").addEventListener("click", fromDays);
  document.getElementById("hoursBtn").addEventListener("click", fromHours);
  document.getElementById("minutesBtn").addEventListener("click", fromMinutes);
  document.getElementById("secondsBtn").addEventListener("click", fromSeconds);

  function fromDays() {
    inputDays.value = inputDays.value;
    inpuHours.value = inputDays.value * 24;
    inputMinutes.value = inputDays.value * 1440;
    inputSeconds.value = inputDays.value * 86400;
  }

  function fromHours() {
    inputDays.value = inpuHours.value / 24;
    inpuHours.value = inpuHours.value;
    inputMinutes.value = inpuHours.value * 60;
    inputSeconds.value = inpuHours.value * 3600;
  }
  function fromMinutes() {
    inputDays.value = inputMinutes.value / 1440;
    inpuHours.value = inputMinutes.value / 60;
    inputMinutes.value = inputMinutes.value;
    inputSeconds.value = inputMinutes.value * 60;
  }
  function fromSeconds() {
    inputDays.value = inputSeconds.value / 86400;
    inpuHours.value = inputSeconds.value / 3600;
    inputMinutes.value = inputSeconds.value / 60;
    inputSeconds.value = inputSeconds.value;
  }
}


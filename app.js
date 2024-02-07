// Add Event listners when DOM is ready
document.addEventListener("DOMContentLoaded", function () {

    // check for buttons exist
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }

    // optionally update when fields update
    // tbd
    document.getElementById(`name`).addEventListener(`change`, function (eventData) {
      let nameOutput = document.getElementById(`nameOutput`);
      nameOutput.innerText = eventData.target.value;
      console.log(eventData);
    })

    
    // process form Data
    document.getElementById("myForm").addEventListener("submit", function (eventData) {
        eventData.preventDefault();
        //stop page reload when form is submitted
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);
        
        //update certificate info when form is submitted
        let nameOutput = document.getElementById(`nameOutput`);
        let info = document.getElementById(`info`);
        nameOutput.innerText = formData.name;
        info.innerText = formData.type;
      });
    // Log readiness to console
    console.log("Ready");
});

function processForm(form){

}
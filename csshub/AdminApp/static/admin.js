
//modal inputs
const EventNameInput = document.getElementById('EventNameInput')
const EventDiscriptionInput = document.getElementById('EventDiscription')
const EventPictureInput = document.getElementById('EventPictureInput')
const EventDate = document.getElementById('EventDate')
const EventLocationInput = document.getElementById('EventLocationInput')
const EventFeeInput = document.getElementById('EventFeeInput')
const EventDiscountInput = document.getElementById('EventDiscountInput')
const EventCreator = document.getElementById('EventCreator')
const EventStatus = document.getElementById('EventStatus')
const Eventid = document.getElementById('Eventid');

//buttons
const editBtns = document.querySelectorAll("#edit-btn");
const deleteBtns = document.querySelectorAll("#delete-btn");
const saveBtn = document.querySelector("#save-btn")
const createBtn = document.getElementById('create-btn')

const formCreate = document.getElementById('create-form-id')

let data = null;
axios.defaults.baseURL = "http://127.0.0.1:8000/";

document.addEventListener("DOMContentLoaded", (e) => {
    axios.get("http://127.0.0.1:8000/api/get-events/")
         .then((response)=>{
            data = response.data
            console.log(data)
        })
    console.log("Page is fully loaded and ready!");
});

document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('edit-form-id');
    const deleteButton = document.getElementById('delete-btn');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const formData = new FormData(form);
      formData.append('id', Eventid.value)
      console.log("formData: pk ", formData.get('id'))
      let url = '/api/edit-event/' + Eventid.value + '/';
      console.log(url)  
      // Send Axios PUT request (for update)
      axios.put(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'X-CSRFToken': getCookie('csrftoken') // Ensure CSRF token is sent with the request
        }
      })
      .then(response => {
        console.log('Event updated:', response.data);
        alert('Event updated successfully!');
        // Optionally redirect or close the modal
      })
      .catch(error => {
        console.error('Error updating event:', error);
        alert('Error updating event.');
      });
    });
  

    deleteButton.addEventListener('click', function() {

      if (confirm('Are you sure you want to delete this event?')) {
        const eventId = deleteButton.getAttribute('event-id')
        console.log("EventId: " + eventId)
        let url = '/api/delete-event/' + eventId + '/';
        console.log(eventId)
        console.log(url)
        axios.delete(url, {
          headers: {
            'X-CSRFToken': getCookie('csrftoken') // CSRF token
          } 
        })
        .then(response => {
          console.log('Event deleted:', response.data);
          alert('Event deleted successfully!');
          // Optionally redirect or close the modal
          window.location.href = '/control/events-dashboard';
        })
        .catch(error => {
        //   alert('Error deleting event.');
        });
      }
    });
  
    // Utility function to get CSRF token from cookies
    function getCookie(name) {
      const cookieValue = document.cookie.match('(^|;)\\s*' + name + '=([^;]*)');
      return cookieValue ? cookieValue.pop() : '';
    }
  });
  

editBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const event_id = e.target.getAttribute("event-id");

        // document.getElementById('edit-form-id').addEventListener('submit', function(event) {
        //     this.action = '/api/edit-event/' + event_id + '/';
        // })

        let eventObj = data.find((element) => element.id == event_id)
        Eventid.value               = event_id
        EventNameInput.value        = eventObj.name
        EventDiscriptionInput.value = eventObj.description
        EventDate.value             = eventObj.date 
        EventLocationInput.value    = eventObj.location
        EventFeeInput.value         = eventObj.fee
        EventDiscountInput.value    = eventObj.discount 
        EventCreator.value          = eventObj.creator 
        EventStatus.value           = eventObj.status
    });
});


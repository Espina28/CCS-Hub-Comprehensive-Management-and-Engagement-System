const login_details = document.getElementById("login-details"); 
const student_details_A = document.getElementById("student-details-A");
const student_details_B = document.getElementById("student-details-B");
const student_details_C = document.getElementById("student-details-C"); 
const signUp_btn = document.getElementById("signUp_btn");
const next_btn_A = document.getElementById('next_btn_A'); 
const next_btn_B = document.getElementById('next_btn_B'); 
const submit_btn_c = document.getElementById('submit_btn_c'); 
const back_btn_A = document.getElementById('back_btn_A');
const back_btn_B = document.getElementById('back_btn_B'); 
const back_btn_C = document.getElementById('back_btn_C');

const login_submit = document.getElementById('login_submit');
const login_email = document.getElementById("login_email");
const login_password = document.getElementById("login_password");

const name_input = document.getElementById("name_input");
const address_input = document.getElementById("address_input");
const program_input = document.getElementById("program_input");
const yearLevel_input = document.getElementById("yearLevel_input");

const studentId_input = document.getElementById("studentId_input");
const commiteename_input = document.getElementById("commiteename_input");
const commiteeposition_input = document.getElementById("commiteeposition_input");

const email_input = document.getElementById("email_input");
const password_input = document.getElementById("password_input");


login_submit.addEventListener('click', (e)=> {
    e.preventDefault()

    //axios backendd
})


signUp_btn.addEventListener('click', (e) => {
    e.preventDefault();
    login_details.classList.replace('d-block', 'd-none');
    student_details_A.classList.replace('d-none', 'd-block');
});

back_btn_A.addEventListener('click', (e) => {
        login_details.classList.replace('d-none', 'd-block');
        student_details_A.classList.replace('d-block', 'd-none');
});

back_btn_B.addEventListener('click', (e) => {
    student_details_A.classList.replace('d-none', 'd-block');
    student_details_B.classList.replace('d-block', 'd-none');
});

back_btn_C.addEventListener('click', (e) => {
    student_details_B.classList.replace('d-none', 'd-block');
    student_details_C.classList.replace('d-block', 'd-none');
});



next_btn_A.addEventListener('click', (e) => {
    // if(name_input.value && address_input.value && program_input.value && yearLevel_input.value){
    //     student_details_A.classList.replace('d-block', 'd-none');
    //     student_details_B.classList.replace('d-none', 'd-block');
    // }else{
    //     console.log("must input be filled")
    // }
    student_details_A.classList.replace('d-block', 'd-none');
    student_details_B.classList.replace('d-none', 'd-block');
});

next_btn_B.addEventListener('click', (e) => {
    //put here for checker
    student_details_B.classList.replace('d-block', 'd-none');
    student_details_C.classList.replace('d-none', 'd-block');
});

submit_btn_c.addEventListener('click', (e) => {
    // Submit the data to the database or any other action
    alert('Data Submitted!')

    console.log("Name:", name_input.value);
    console.log("Address:", address_input.value);
    console.log("Program:", program_input.value);
    console.log("Year Level:", yearLevel_input.value);
    console.log("Student ID:", studentId_input.value);
    console.log("Committee Name:", commiteename_input.value);
    console.log("Committee Position:", commiteeposition_input.value);
    console.log("Email:", email_input.value);
    console.log("Password:", password_input.value);
});
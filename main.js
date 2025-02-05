function showSection(section) {
    let content = document.getElementById('content');
    
    if (section === 'home') {
        content.innerHTML = `<h1>About Me</h1>
                             <p>Hello! I'm Allan Christopher D. Dela Cruz, and this is my digital course portfolio. Here, you'll find my key projects, assignments, and reflections on what I have learned in web programming.</p>
                             <h2>About This Project</h2>
                             <p>This portfolio was created as part of my summative assessment in Web Programming. It showcases my journey in learning HTML, CSS, and JavaScript, demonstrating my progress and understanding of front-end development.</p>`;
    }
    else if (section === 'projects') {
        content.innerHTML = `<h1>Key Projects</h1>
                            <div class='project'>
                                <h3>PH TOURS</h3>
                                <img src='images/PhTours.png' alt='Project 1' style='width: 300px;'>
                                <p><a href='Ph Tours/PhTours.html'>View Project</a></p>
                                <p>Building Discover PH Adventures was a refreshing dive into structuring a clean and visually engaging travel website. The project felt like crafting an invitation to explore the Philippines, and I really appreciated the simplicity and clarity in the layout. The header section stood out with its centered logo and tagline, immediately setting the tone for an exciting adventure.<br>
                                One of the fun parts was working on the call-to-action (CTA) section. I like how it smoothly encourages visitors to take action with a well-placed button, reinforcing the excitement of booking a trip. Styling the navigation bar also gave me a better understanding of how small design choices—like spacing and hover effects—can enhance user experience. However, I noticed that the image path uses "../images/PhToursImage.png" instead of just "images/PhToursImage.png", which might cause display issues depending on the file structure.<br>
                                What I learned most from this project is how small touches make a big difference in web design. Simple elements like consistent color schemes, proper text alignment, and clear sections make the site feel more professional. If I were to expand this, I’d explore adding an interactive section, like a destination carousel or a dynamic booking form, to enhance user engagement. Overall, this was a solid and enjoyable exercise in structuring and styling a travel-themed website!</p>
                            </div>
                            <div class='project'>
                                <h3>SCHEDULE</h3>
                                <img src='images/Sched.png' alt='Project 1' style='width: 300px;'>
                                <p><a href='Schedule/Schedule.html'>View Project</a></p>
                                <p>This Blended Learning Course Schedule project was a great way to practice structuring tabular data effectively. One of the things I immediately appreciated was the clean layout and organization of the table. Each time slot and course entry is neatly aligned, making it easy to read at a glance. The subtle background color on the headers also helps differentiate the headings from the data, which is a simple but effective touch.<br>
                                One interesting challenge I noticed was the font size of the table (10px). While this keeps things compact, it might be a bit small for readability, especially on mobile screens. I’d consider increasing it slightly or adding a responsive style to adjust the font size based on screen width. Another thing I learned was how styling table borders and padding correctly makes a big difference. The schedule looks structured without feeling cluttered, thanks to the spacing of the cells.<br>
                                If I were to improve or expand this project, I’d add color-coding for subjects to make it visually distinct, and maybe even an interactive hover effect that highlights the entire row for better readability. Additionally, adding a search or filtering function could make it easier to find specific courses. Overall, this was a great exercise in presenting structured information in a clean and professional way!<br></p>
                            </div>
                            <div class='project'>
                                <h3>JAVA ACT1</h3>
                                <img src='images/act1.png' alt='Project 1' style='width: 300px;'>
                                <p><a href='ACT1/index.html'>View Project</a></p>
                                <p>This Simple Count Up project was a great way to reinforce my understanding of JavaScript event handling and DOM manipulation. One of the first things I noticed was how minimal yet effective the implementation is. The structure is clean, making it easy to follow the logic of selecting elements, attaching event listeners, and updating the content dynamically. The use of textContent to update the counter was a simple but effective choice, ensuring that the displayed value changes instantly when the button is clicked.<br>
                                One key takeaway for me was how incrementing values in JavaScript can be done in multiple ways (count = count + 1, count++, count += 1). It’s a small but useful reminder that different approaches exist for achieving the same result. Another detail I appreciated was the inclusion of console.log(count)—this is a great debugging practice, allowing me to track the counter’s value in the console while testing the script.<br>
                                If I were to enhance this project, I’d consider adding a reset button, styling the button for better visibility, or even implementing a max limit with an alert when a certain count is reached. I could also experiment with animations or sound effects when clicking the button to make it more interactive. Overall, this was a fun and practical exercise in handling user interactions with JavaScript!</p>
                            </div>
                            <div class='project'>
                                <h3>JAVA ACT2</h3>
                                <img src='images/act2.png' alt='Project 1' style='width: 300px;'>
                                <p><a href='ACT2/index.html'>View Project</a></p>
                                <p>This To-Do List project is a great hands-on exercise for working with arrays, event listeners, and dynamic DOM updates in JavaScript. One of the standout aspects of this implementation is how it efficiently stores tasks in an array and then dynamically generates the list using innerHTML. The display() function neatly loops through the array and updates the <ul> element, making it easy to visualize changes in real-time.<br>
                                One key learning point here is how click events can be used to manipulate lists dynamically. The use of console.log() to track inputs and array updates is a smart debugging approach, allowing me to see exactly how tasks are added step by step. Additionally, the logic of todos.push(txtTodoItem.value) demonstrates how data is stored and updated in an array before being rendered on the screen.<br>
                                If I were to enhance this project, I’d consider adding a delete button for each task, an input validation check to prevent empty tasks from being added, or even storing tasks in local storage so they persist after a page refresh. It would also be useful to include a clear all button to reset the list. Overall, this project was a great introduction to list management with JavaScript, and I enjoyed seeing how small improvements could make it even more interactive!</p>
                            </div>
                            <h1>Side Project</h1>
                            <div class='project'>
                                <h3>SIMPLE CALCULATOR</h3>
                                <img src='images/calc.png' alt='Project 1' style='width: 300px;'>
                                <p><a href='Calc/Calc.html'>View Project</a></p>
                                <p>This Simple Calculator project is a well-structured exercise for understanding basic arithmetic operations, event handling, and DOM manipulation in JavaScript. The layout is clean and user-friendly, with a well-designed calculator interface that ensures clarity and ease of use. The use of parseFloat() to handle number inputs is a good practice, ensuring calculations work correctly even when decimal values are entered.<br>
                                One of the best parts of this implementation is the use of a single function (calculate(operator)) to handle all four operations. This not only makes the code more efficient but also improves maintainability by eliminating repetitive logic. The switch-case structure is well thought out, handling division by zero gracefully with an appropriate error message. The result is then dynamically displayed, making the calculator feel responsive and interactive.<br>
                                To further enhance this project, I’d consider adding keyboard support so users can input numbers and operations using their keyboard. Additionally, implementing a clear/reset button and input validation that restricts non-numeric inputs would improve user experience. Another possible upgrade could be storing the calculation history for reference. Overall, this project was a great hands-on approach to practical JavaScript application development with smooth functionality and an intuitive design!</p>
                            </div>`
                            ;
    }
    else if (section === 'assignments') {
        content.innerHTML = `<h1>Assignments</h1>
                            <div class='project'>
                                <h3>Target A</h3>
                                <img src='TargetA/TargetA.png' alt='Assignment 1' style='width: 300px;'>
                                <p><a href='TargetA/TargetA.html' target="_blank">Targer A</a></p>
                                <p>Description of assignment 1.</p>
                            </div>`;
    }
    else if (section === 'reflection') {
        content.innerHTML = `<h1>Reflection</h1>
                             <p>Throughout this course, I have gained a solid understanding of web development using HTML, CSS, and JavaScript. I have learned how to structure a webpage using HTML, style it with CSS, and add interactivity with JavaScript. Creating this portfolio has allowed me to apply all these skills in a meaningful way.
                             This journey has been an eye-opening experience, teaching me the importance of writing clean and organized code. It has also shown me how powerful web technologies are in building real-world applications. Understanding front-end development has given me a new perspective on how websites function and how user experiences are designed.
                             Looking back, I realize how much I have improved from the start of this course. The process of debugging and refining my work has been both challenging and rewarding. I now feel more confident in my ability to create functional and visually appealing websites. This portfolio is just the beginning of my journey in web development, and I am excited to continue learning and improving my skills.</p>`;
    }
}

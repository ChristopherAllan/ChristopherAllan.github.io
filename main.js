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
                                <h3>Project 1 Title</h3>
                                <img src='project1.jpg' alt='Project 1' style='width: 300px;'>
                                <p><a href='#'>View Project</a></p>
                                <p>Description of project 1.</p>
                            </div>
                            <div class='project'>
                                <h3>Project 2 Title</h3>
                                <img src='project2.jpg' alt='Project 2' style='width: 300px;'>
                                <p><a href='#'>View Project</a></p>
                                <p>Description of project 2.</p>
                            </div>`;
    }
    else if (section === 'assignments') {
        content.innerHTML = `<h1>Assignments</h1>
                            <div class='project'>
                                <h3>Target A</h3>
                                <img src='assignment1.jpg' alt='Assignment 1' style='width: 300px;'>
                                <p><a href='#' target="_blank">View Assignment</a></p>
                                <p>Description of assignment 1.</p>
                            </div>
                            <div class='project'>
                                <h3>Assignment 2 Title</h3>
                                <img src='assignment2.jpg' alt='Assignment 2' style='width: 300px;'>
                                <p><a href='#'>View Assignment</a></p>
                                <p>Description of assignment 2.</p>
                            </div>`;
    }
    else if (section === 'reflection') {
        content.innerHTML = `<h1>Reflection</h1>
                             <p>Throughout this course, I have gained a solid understanding of web development using HTML, CSS, and JavaScript. I have learned how to structure a webpage using HTML, style it with CSS, and add interactivity with JavaScript. Creating this portfolio has allowed me to apply all these skills in a meaningful way.
                             This journey has been an eye-opening experience, teaching me the importance of writing clean and organized code. It has also shown me how powerful web technologies are in building real-world applications. Understanding front-end development has given me a new perspective on how websites function and how user experiences are designed.
                             Looking back, I realize how much I have improved from the start of this course. The process of debugging and refining my work has been both challenging and rewarding. I now feel more confident in my ability to create functional and visually appealing websites. This portfolio is just the beginning of my journey in web development, and I am excited to continue learning and improving my skills.</p>`;
    }
}

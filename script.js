// Engineering branch data
const branchData = {
    civil: {
        name: 'Civil Engineering',
        splineUrl: 'https://prod.spline.design/yY49T35soal28kTd/scene.splinecode',
        description: 'Civil Engineering is one of the oldest engineering disciplines that deals with the design, construction, and maintenance of the built environment.',
        scope: 'The future scope includes sustainable infrastructure development, smart cities, environmental engineering, and disaster-resistant construction.',
        careers: `
            <h4>Industry Roles</h4>
            <ul>
                <li>Structural Engineer (₹4-12 LPA)</li>
                <li>Construction Project Manager (₹6-15 LPA)</li>
                <li>Transportation Engineer (₹5-12 LPA)</li>
                <li>Environmental Engineer (₹4-10 LPA)</li>
            </ul>
            <h4>Specializations</h4>
            <ul>
                <li>Structural Engineering</li>
                <li>Transportation Engineering</li>
                <li>Environmental Engineering</li>
                <li>Geotechnical Engineering</li>
            </ul>
            <h4>Top Recruiters</h4>
            <ul>
                <li>L&T Construction</li>
                <li>DLF Limited</li>
                <li>NHAI</li>
                <li>Shapoorji Pallonji</li>
            </ul>`,
        eligibility: `
            <h4>Academic Requirements</h4>
            <ul>
                <li>10+2 with PCM - Minimum 60% aggregate</li>
                <li>JEE Main/Advanced qualification</li>
                <li>State engineering entrance exams</li>
            </ul>
            <h4>Skills Required</h4>
            <ul>
                <li>Strong mathematical and analytical abilities</li>
                <li>AutoCAD and other design software proficiency</li>
                <li>Project management skills</li>
                <li>Problem-solving capabilities</li>
            </ul>
            <h4>Additional Certifications</h4>
            <ul>
                <li>AutoCAD Certification</li>
                <li>PMP Certification</li>
                <li>LEED Certification</li>
            </ul>`
    },
    mechanical: {
        name: 'Mechanical Engineering',
        splineUrl: 'https://prod.spline.design/VBjQfCtlcVw8akMd/scene.splinecode',
        description: 'Mechanical Engineering involves the design, manufacturing, and maintenance of mechanical systems and machines.',
        scope: 'Future scope includes robotics, automation, aerospace, renewable energy systems, and advanced manufacturing technologies.',
        careers: `
            <h4>Industry Roles</h4>
            <ul>
                <li>Design Engineer (₹4-12 LPA)</li>
                <li>Production Engineer (₹5-15 LPA)</li>
                <li>Robotics Engineer (₹6-18 LPA)</li>
                <li>R&D Engineer (₹5-14 LPA)</li>
            </ul>
            <h4>Specializations</h4>
            <ul>
                <li>Robotics and Automation</li>
                <li>Thermal Engineering</li>
                <li>Manufacturing Technology</li>
                <li>CAD/CAM</li>
            </ul>
            <h4>Top Recruiters</h4>
            <ul>
                <li>Tata Motors</li>
                <li>Maruti Suzuki</li>
                <li>Siemens</li>
                <li>Boeing India</li>
            </ul>`,
        eligibility: `
            <h4>Academic Requirements</h4>
            <ul>
                <li>10+2 with PCM - Minimum 60% aggregate</li>
                <li>JEE Main/Advanced qualification</li>
                <li>BITSAT or state engineering exams</li>
            </ul>
            <h4>Skills Required</h4>
            <ul>
                <li>Strong foundation in physics and mathematics</li>
                <li>3D modeling software proficiency</li>
                <li>Technical drawing skills</li>
                <li>Problem-solving abilities</li>
            </ul>
            <h4>Additional Certifications</h4>
            <ul>
                <li>SolidWorks Certification</li>
                <li>Six Sigma Certification</li>
                <li>AutoCAD Mechanical</li>
            </ul>`
    },
    electrical: {
        name: 'Electrical Engineering',
        splineUrl: 'https://prod.spline.design/2iwsa6xnas396uxB/scene.splinecode',
        description: 'Electrical Engineering focuses on the study and application of electricity, electronics, and electromagnetism.',
        scope: 'Growing scope in renewable energy, power systems, microelectronics, IoT, and smart grid technologies.',
        careers: `
            <h4>Industry Roles</h4>
            <ul>
                <li>Power Systems Engineer (₹4-14 LPA)</li>
                <li>Control Systems Engineer (₹5-15 LPA)</li>
                <li>Electronics Engineer (₹5-16 LPA)</li>
                <li>IoT Specialist (₹6-18 LPA)</li>
            </ul>
            <h4>Specializations</h4>
            <ul>
                <li>Power Systems</li>
                <li>Control Systems</li>
                <li>Microelectronics</li>
                <li>Renewable Energy</li>
            </ul>
            <h4>Top Recruiters</h4>
            <ul>
                <li>ABB India</li>
                <li>Schneider Electric</li>
                <li>BHEL</li>
                <li>Siemens Energy</li>
            </ul>`,
        eligibility: `
            <h4>Academic Requirements</h4>
            <ul>
                <li>10+2 with PCM - Minimum 60% aggregate</li>
                <li>JEE Main/Advanced qualification</li>
                <li>State engineering entrance exams</li>
            </ul>
            <h4>Skills Required</h4>
            <ul>
                <li>Strong foundation in physics and mathematics</li>
                <li>Circuit design and analysis</li>
                <li>Programming skills</li>
                <li>Problem-solving abilities</li>
            </ul>
            <h4>Additional Certifications</h4>
            <ul>
                <li>PLC Programming</li>
                <li>MATLAB Certification</li>
                <li>Power Systems Protection</li>
            </ul>`
    },
    computer: {
        name: 'Computer Science Engineering',
        splineUrl: 'https://prod.spline.design/Ve2PDKTeSH0mxpYo/scene.splinecode',
        description: 'Computer Science Engineering deals with the design, development, and maintenance of software systems and computer hardware.',
        scope: 'Extensive scope in AI/ML, cloud computing, cybersecurity, blockchain, and software development.',
        careers: `
            <h4>Industry Roles</h4>
            <ul>
                <li>Software Developer (₹5-20 LPA)</li>
                <li>Data Scientist (₹8-25 LPA)</li>
                <li>Cloud Architect (₹12-30 LPA)</li>
                <li>AI/ML Engineer (₹8-28 LPA)</li>
            </ul>
            <h4>Specializations</h4>
            <ul>
                <li>Artificial Intelligence & ML</li>
                <li>Cloud Computing</li>
                <li>Cybersecurity</li>
                <li>Full Stack Development</li>
            </ul>
            <h4>Top Recruiters</h4>
            <ul>
                <li>Google</li>
                <li>Microsoft</li>
                <li>Amazon</li>
                <li>TCS</li>
            </ul>`,
        eligibility: `
            <h4>Academic Requirements</h4>
            <ul>
                <li>10+2 with PCM - Minimum 60% aggregate</li>
                <li>JEE Main/Advanced qualification</li>
                <li>BITSAT or state engineering exams</li>
            </ul>
            <h4>Skills Required</h4>
            <ul>
                <li>Programming languages (Java, Python, etc.)</li>
                <li>Data Structures and Algorithms</li>
                <li>Database Management</li>
                <li>Problem-solving abilities</li>
            </ul>
            <h4>Additional Certifications</h4>
            <ul>
                <li>AWS Certified Solutions Architect</li>
                <li>Google Cloud Professional</li>
                <li>Microsoft Azure Certifications</li>
            </ul>`
    },
    chemical: {
        name: 'Chemical Engineering',
        splineUrl: 'https://prod.spline.design/bI8Fmhflta2dm2nq/scene.splinecode',
        description: 'Chemical Engineering involves the design and operation of chemical plants and processes for converting raw materials into valuable products.',
        scope: 'Future scope in sustainable chemistry, biotechnology, nanotechnology, and renewable energy solutions.',
        careers: `
            <h4>Industry Roles</h4>
            <ul>
                <li>Process Engineer (₹4-12 LPA)</li>
                <li>Research Scientist (₹5-15 LPA)</li>
                <li>Quality Control Manager (₹6-16 LPA)</li>
                <li>Plant Manager (₹8-20 LPA)</li>
            </ul>
            <h4>Specializations</h4>
            <ul>
                <li>Petrochemical Engineering</li>
                <li>Biochemical Engineering</li>
                <li>Environmental Engineering</li>
                <li>Process Safety</li>
            </ul>
            <h4>Top Recruiters</h4>
            <ul>
                <li>Reliance Industries</li>
                <li>BASF</li>
                <li>Shell</li>
                <li>Hindustan Unilever</li>
            </ul>`,
        eligibility: `
            <h4>Academic Requirements</h4>
            <ul>
                <li>10+2 with PCM - Minimum 60% aggregate</li>
                <li>JEE Main/Advanced qualification</li>
                <li>State engineering entrance exams</li>
            </ul>
            <h4>Skills Required</h4>
            <ul>
                <li>Strong foundation in chemistry and mathematics</li>
                <li>Process simulation software knowledge</li>
                <li>Laboratory skills</li>
                <li>Safety management</li>
            </ul>
            <h4>Additional Certifications</h4>
            <ul>
                <li>Process Safety Management</li>
                <li>Six Sigma Green Belt</li>
                <li>HAZOP Certification</li>
            </ul>`
    },
    aerospace: {
        name: 'Aerospace Engineering',
        splineUrl: 'https://prod.spline.design/pESdsIcV0Bzl3JoU/scene.splinecode',
        description: 'Aerospace Engineering focuses on the design, development, and production of aircraft and spacecraft.',
        scope: 'Expanding scope in space exploration, commercial aviation, defense technology, and autonomous aerial systems.',
        careers: `
            <h4>Industry Roles</h4>
            <ul>
                <li>Aircraft Design Engineer (₹6-18 LPA)</li>
                <li>Propulsion Engineer (₹5-16 LPA)</li>
                <li>Avionics Engineer (₹6-20 LPA)</li>
                <li>Space Systems Engineer (₹8-25 LPA)</li>
            </ul>
            <h4>Specializations</h4>
            <ul>
                <li>Aerodynamics</li>
                <li>Propulsion Systems</li>
                <li>Avionics</li>
                <li>Space Technology</li>
            </ul>
            <h4>Top Recruiters</h4>
            <ul>
                <li>ISRO</li>
                <li>HAL</li>
                <li>Boeing India</li>
                <li>Airbus</li>
            </ul>`,
        eligibility: `
            <h4>Academic Requirements</h4>
            <ul>
                <li>10+2 with PCM - Minimum 60% aggregate</li>
                <li>JEE Main/Advanced qualification</li>
                <li>IIST entrance exam</li>
            </ul>
            <h4>Skills Required</h4>
            <ul>
                <li>Strong foundation in physics and mathematics</li>
                <li>CAD/CAM software proficiency</li>
                <li>Analytical skills</li>
                <li>Problem-solving abilities</li>
            </ul>
            <h4>Additional Certifications</h4>
            <ul>
                <li>CATIA Certification</li>
                <li>CFD Analysis</li>
                <li>Aircraft Maintenance Engineering</li>
            </ul>`
    }
};

// DOM Elements
const branchCards = document.querySelectorAll('.branch-card');
const detailView = document.getElementById('detailView');
const closeBtn = document.querySelector('.close-btn');
const splineContainer = document.querySelector('.spline-container');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Initialize Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Observe all branch cards
branchCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    observer.observe(card);
});

// Handle branch card clicks
branchCards.forEach(card => {
    card.addEventListener('click', () => {
        const branch = card.getAttribute('data-branch');
        openDetailView(branch);
    });
});

// Open detail view function
function openDetailView(branch) {
    const data = branchData[branch];
    
    // Clear and reinitialize Spline viewer
    const splineContainer = document.querySelector('.spline-container');
    splineContainer.innerHTML = ''; // Remove existing viewer
    
    // Create new Spline viewer
    const splineViewer = document.createElement('spline-viewer');
    splineViewer.setAttribute('loading-anim', '');
    splineContainer.appendChild(splineViewer);
    
    // Set URL after a short delay to ensure proper initialization
    setTimeout(() => {
        splineViewer.setAttribute('url', data.splineUrl);
    }, 100);
    
    // Update tab contents with formatted text
    document.getElementById('description').innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
    `;
    
    document.getElementById('scope').innerHTML = `
        <h3>Future Scope</h3>
        <p>${data.scope}</p>
    `;
    
    document.getElementById('careers').innerHTML = `
        <h3>Career Opportunities</h3>
        ${data.careers}
    `;
    
    document.getElementById('eligibility').innerHTML = `
        <h3>Eligibility Criteria</h3>
        ${data.eligibility}
    `;

    // Show detail view
    detailView.style.display = 'flex';
    detailView.classList.add('active');
    switchTab('description'); // Default to description tab
}

// Close detail view
closeBtn.addEventListener('click', () => {
    const splineContainer = document.querySelector('.spline-container');
    splineContainer.innerHTML = ''; // Clear the Spline viewer
    detailView.classList.remove('active');
    setTimeout(() => {
        detailView.style.display = 'none';
    }, 300);
});

// Handle tab switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        switchTab(tab);
    });
});

// Switch tab function
function switchTab(tabName) {
    tabButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === tabName);
    });
}

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    branchCards.forEach(card => {
        const branchName = card.querySelector('h2').textContent.toLowerCase();
        const branchDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (branchName.includes(searchTerm) || branchDesc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Close detail view when clicking outside
detailView.addEventListener('click', (e) => {
    if (e.target === detailView) {
        const splineContainer = document.querySelector('.spline-container');
        splineContainer.innerHTML = ''; // Clear the Spline viewer
        detailView.classList.remove('active');
        setTimeout(() => {
            detailView.style.display = 'none';
        }, 300);
    }
});

// Navigation handling
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');
const ctaButtons = document.querySelectorAll('.cta-buttons a');

function showSection(sectionId) {
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
        if (sectionId === 'branches') {
            targetSection.style.display = 'grid';
        }
        // Ensure contact section is visible
        if (sectionId === 'contact') {
            targetSection.style.display = 'block';
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Update navigation active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
        
        // If it's the contact section, ensure the form is visible
        if (sectionId === 'contact') {
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add event listeners for CTA buttons
ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = button.getAttribute('href').substring(1);
        showSection(sectionId);
    });
});

// Show home section by default
showSection('home');

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear form
    contactForm.reset();
}); 
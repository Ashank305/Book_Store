const books = [
    // Electrical Engineering Books
    {
        title: "Introduction to Electrical Engineering",
        author: "M. S. Naidu",
        genre: "Electrical Engineering",
        department: "Electrical Engineering",
        reviews: "A comprehensive guide to electrical engineering fundamentals."
    },
    {
        title: "Electrical Power Systems",
        author: "C. L. Wadhwa",
        genre: "Electrical Engineering",
        department: "Electrical Engineering",
        reviews: "In-depth coverage of power systems and their practical applications."
    },
    {
        title: "Control Systems Engineering",
        author: "Norman S. Nise",
        genre: "Electrical Engineering",
        department: "Electrical Engineering",
        reviews: "Detailed introduction to control systems, with a focus on analysis and design."
    },
    {
        title: "Digital Signal Processing",
        author: "John G. Proakis",
        genre: "Electrical Engineering",
        department: "Electrical Engineering",
        reviews: "A definitive guide to digital signal processing concepts and techniques."
    },
    {
        title: "Electromagnetic Waves and Radiating Systems",
        author: "Edward C. Jordan",
        genre: "Electrical Engineering",
        department: "Electrical Engineering",
        reviews: "Comprehensive coverage of electromagnetic theory and applications."
    },

    // Civil Engineering Books
    {
        title: "Civil Engineering Materials",
        author: "Shan Somayaji",
        genre: "Civil Engineering",
        department: "Civil Engineering",
        reviews: "Essential knowledge on materials used in civil engineering projects."
    },
    {
        title: "Structural Analysis",
        author: "R. C. Hibbeler",
        genre: "Civil Engineering",
        department: "Civil Engineering",
        reviews: "An authoritative text on the principles and methods of structural analysis."
    },
    {
        title: "Transportation Engineering and Planning",
        author: "C. S. Papacostas",
        genre: "Civil Engineering",
        department: "Civil Engineering",
        reviews: "Comprehensive guide to transportation engineering and planning methodologies."
    },
    {
        title: "Fluid Mechanics for Civil Engineers",
        author: "N.B. Web",
        genre: "Civil Engineering",
        department: "Civil Engineering",
        reviews: "In-depth exploration of fluid mechanics with applications in civil engineering."
    },
    {
        title: "Soil Mechanics in Engineering Practice",
        author: "Karl Terzaghi",
        genre: "Civil Engineering",
        department: "Civil Engineering",
        reviews: "A foundational text on soil mechanics and its engineering applications."
    },

    // Computer Science Books
    {
        title: "Computer Networks",
        author: "Andrew S. Tanenbaum",
        genre: "Computer Science",
        department: "Computer Science",
        reviews: "A foundational text on the principles and practice of computer networking."
    },
    {
        title: "Data Structures and Algorithms",
        author: "Narasimha Karumanchi",
        genre: "Computer Science",
        department: "Computer Science",
        reviews: "An in-depth exploration of data structures and algorithms for computer science students."
    },
    {
        title: "Introduction to Algorithms",
        author: "Thomas H. Cormen",
        genre: "Computer Science",
        department: "Computer Science",
        reviews: "A comprehensive guide to algorithms and their analysis."
    },
    {
        title: "Artificial Intelligence: A Modern Approach",
        author: "Stuart Russell",
        genre: "Computer Science",
        department: "Computer Science",
        reviews: "The definitive introduction to the theory and practice of artificial intelligence."
    },
    {
        title: "Operating System Concepts",
        author: "Abraham Silberschatz",
        genre: "Computer Science",
        department: "Computer Science",
        reviews: "A detailed examination of operating system principles and their practical applications."
    },

    // Mechanical Engineering Books
    {
        title: "Mechanical Vibrations",
        author: "S. S. Rao",
        genre: "Mechanical Engineering",
        department: "Mechanical Engineering",
        reviews: "An in-depth look into vibrations and their impact on mechanical systems."
    },
    {
        title: "Engineering Thermodynamics",
        author: "P. K. Nag",
        genre: "Mechanical Engineering",
        department: "Mechanical Engineering",
        reviews: "Comprehensive coverage of thermodynamics principles and applications."
    },
    {
        title: "Machine Design",
        author: "Robert L. Norton",
        genre: "Mechanical Engineering",
        department: "Mechanical Engineering",
        reviews: "A practical approach to designing mechanical components and systems."
    },
    {
        title: "Fluid Mechanics",
        author: "Frank M. White",
        genre: "Mechanical Engineering",
        department: "Mechanical Engineering",
        reviews: "In-depth exploration of fluid mechanics principles and applications."
    },
    {
        title: "Heat and Mass Transfer",
        author: "Yunus A. Çengel",
        genre: "Mechanical Engineering",
        department: "Mechanical Engineering",
        reviews: "Comprehensive guide to heat and mass transfer concepts and techniques."
    }
];

function loadBooks(department) {
    const bookList = document.getElementById('book-list');
    const bookDetails = document.getElementById('book-details');

    bookList.innerHTML = ''; // Clear the list before adding new items
    bookDetails.innerHTML = ''; // Clear the details section

    books.forEach((book, index) => {
        if (book.department === department || department === 'All') {
            const bookItem = document.createElement('div');
            bookItem.className = 'book-item';
            bookItem.textContent = book.title;
            bookItem.dataset.index = index; // Store the index in the element's dataset
            bookItem.addEventListener('click', () => toggleBookDetails(index));
            bookList.appendChild(bookItem);
        }
    });

    function toggleBookDetails(index) {
        const book = books[index];

        // Check if the book details are currently shown
        if (bookDetails.style.display === 'block' && bookDetails.dataset.index == index) {
            bookDetails.style.display = 'none'; // Hide the details if the same book is clicked again
            bookDetails.innerHTML = ''; // Clear the content
        } else {
            // Show the details if a different book is clicked
            bookDetails.style.display = 'block';
            bookDetails.dataset.index = index; // Store the index of the current book being shown
            bookDetails.innerHTML = `
                <h2>${book.title}</h2>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Reviews:</strong> ${book.reviews}</p>
            `;
        }
    }
}

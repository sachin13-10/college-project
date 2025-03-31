const fs = require('fs');
const path = require('path');

// Directory containing the HTML files
const directoryPath = path.join(__dirname);

// Footer content with corrected grammar
const correctedFooter = `
<section class="footer">
    <h4>About Us</h4>
    <p>This is my first website built for fun.<br>Get any PDF or code output anywhere without any hassle.</p>
    <div class="icons">
        <a href=""><i class="fa fa-facebook"></i></a>
        <a href=""><i class="fa fa-twitter"></i></a>
        <a href=""><i class="fa fa-instagram"></i></a>
        <a href=""><i class="fa fa-linkedin"></i></a>
    </div>
    <a href="" class="footer-link"><p>Made with <i class="fa fa-heart-o"></i> by SG</p></a>
</section>
`;

// Function to update footer in an HTML file
function updateFooter(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            return;
        }

        // Replace the footer section
        const updatedData = data.replace(
            /<section class="footer">[\s\S]*?<\/section>/,
            correctedFooter
        );

        // Write the updated content back to the file
        fs.writeFile(filePath, updatedData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing to file ${filePath}:`, err);
            } else {
                console.log(`Footer updated in ${filePath}`);
            }
        });
    });
}

// Scan the directory for HTML files and update their footers
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach((file) => {
        if (path.extname(file) === '.html') {
            const filePath = path.join(directoryPath, file);
            updateFooter(filePath);
        }
    });
});

<h1>Wildlife-Reserve</h1>

<h2>Description:</h2>
A mock-website for a wildlife reserve, populated with various species of antelope. 
From the homepage, you can visit the Gallery of Species, the About page, and the site's main feature, the Antelope Quiz, in ou are shown an image of a random antelope species and are prompted to select the correct name for the pictured species from four onscreen options. After you make your guess, the page will display the correct answer. Clicking 'Continue' will take you to the next question. After ten questions, the quiz will end, and you will receive an alert telling you how you did.

<h2>Requirements and Features:</h2>

<strong>(Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. For example, swapping from a single column layout to a two-column layout on desktop):</strong>
Each of the pages in this project uses Flexbox and Media Queries to optimize user experience on multiple screen sizes.

<strong>(Create a JavaScript function that performs some form of mathematical operation and displays the result on your page):</strong>
In 'quiz.js', I've created a function, 'run()', which displays HTML dynamically, including two instances of items being randomly selected from arrays through 'Math.floor(Math.random()'. More on this directly below.

<strong>(Create a Javascript loop that dynamically displays HTML on your page - for example adding a new row to a table, based on a value passed to the loop):</strong>
In 'quiz.js' at line 29, inside the 'run()' function, I've constructed a loop that, on each iteration, randomly selects an item from an array, removes it, places it into a new array, and finally displays a button, via innerHTML, containing a string gathered from said item. The loop repeats four times, and the result is a set of multiple choice answers displayed on the page. A second loop is then employed to randomly select which item in the new array shall have its corresponding image file displayed above the options. This item thus becomes the correct answer for the quiz's current question.

<strong>(Create and populate a JavaScript array with one or more values and display the contents on your page):</strong>
In 'gallery.js I've populated an entire page, via insertAdjacentHTML, with the contents of a the large array in 'antelope.js', and in 'quiz.js', the same array is accessed and displayed dynamically throughout the quiz via the 'run()' function.


<h2>Special Instructions:</h2>
Open index.html and have fun!
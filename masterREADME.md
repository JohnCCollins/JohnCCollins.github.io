# JohnCCollins.github.io

Description
///////////

A mock-website for a wildlife reserve, populated with various species of antelope. From the homepage, you can visit the gallery of species, the 'Visit Us!' page, and the site's main feature, the 'Name That Antelope' quiz. You are shown an image of a particular antelope species and you select your guess for the antelope pictured from 4 onscreen options, 'Who Wants to be a Millionaire' style. After you make your guess, the page will display the correct answer and some information on the species itself. Clicking 'Next' will take you to the next question. When you have finished ten questions, the quiz will end and your score will be displayed.



Requirements and Features
/////////////////////////

(Use Flexbox or CSS Grid to organize content areas based on mobile or desktop views. For example, swapping from a single column layout to a two-column layout on desktop)

Each of the pages in this project uses media queries to optimize user experience on multiple screen sizes.



(Create a JavaScript function that performs some form of mathematical operation and displays the result on your page)

At multiple places in 'quiz.js', I've implemented functions that select random object from an array and display them on the page, e.g. images, multiple-choice answer options on the Quiz page. 



(Create a Javascript loop that dynamically displays HTML on your page - for example adding a new row to a table, based on a value passed to the loop)

In 'quiz.js' I've constructed a loop that, on each iteration, randomly selects an item from an array, removes it, places it into a new smaller array, and finally displays a button containing a string fetced from said item. The loop repeats four times, and the result is a set of multiple choice answers displayed on the page.



(Create and populate a JavaScript array with one or more values and display the contents on your page)  

in 'gallery.js I've populated an entire page, via insertAdjacentHTML, with the contents of an large array.



Special Instructions
////////////////////  

Open index.html and have fun!




# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshots

####  Newsletter Page Desktop View
![Desktop View](../public/desktop-view-newsletter-page.png)
  #### Newsletter Page Desktop View Active State
  ![Desktop View Active State](../public/desktop-view-newsletter-page-active-state.png)
  ####  Newsletter Page Desktop View Error State
  ![Desktop View Error State](../public/desktop-view-newsletter-page-error-state.png)

#### Success Page Desktop View
![Desktop View](../public/desktop-view-success-page.png)

  #### Success Page Desktop View Active State
  ![Desktop View Active State](../public/desktop-view-success-page-active-state.png)

#### Mobile View
![Mobile View](../public/mobile-view-newsletter-page.png)

#### Mobile View Active State
![Mobile View Active State](../public/mobile-view-newsletter-page-active-state.png)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned a lot about form validation and the importance of user feedback during this project. Managing form state and errors can be complex in a larger form, but for this single field form, it was a good exercise.

I implemented email validation with a simple regular expression:

```js
const validateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

```
 ### Continued development

In the future, I plan to improve the design's responsiveness and accessibility. 

### Useful resources

- [React Documentation](https://reactjs.org/docs/getting-started.html) - This helped me understand React's state and how to use it for form validation.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) - This is always an incredible resource that I refer to when I'm stuck, especially when dealing with JavaScript.

## Author

- GitHub - [@yourusername](https://github.com/yourusername)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

I want to acknowledge the Frontend Mentor platform for providing such interesting challenges that help me improve my coding skills.
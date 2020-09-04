// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div')
    const dateSpan = document.createElement('span')
    const headingText = document.createElement('h1')
    const weatherSpan = document.createElement('span')

    header.classList.add('header');
    dateSpan.classList.add('date');
    weatherSpan.classList.add('temp');

    headingText.textContent = 'Lambda Times'
    weatherSpan.textContent = '98°'
    dateSpan.textContent = 'September 4, 2020'

    header.appendChild(dateSpan);
    header.appendChild(headingText);
    header.appendChild(weatherSpan);
    return header;
}

const header = Header();
document.querySelector('.header-container').appendChild(Header());

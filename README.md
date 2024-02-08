# Covid-19 Website
The project aims to create a website that centers around the Covid-19 virus. The website's purposes is for the users from anywhere to be able to utilize the website by obtaining data from respective countries. 
 
## Design Process
This website focuses on the general people,whether young or old, professional or casual to be able to access this website. Users are able to access real time information about Covid-19 presemted in a simple and relatively easy way to understand. 

Wireframe link:
https://pixso.net/app/editor/j8jiKUibePBX1AMz0eL8ig?icon_type=1&page-id=0%3A1

## Features

 It has an introduction page to introduce users to the website and direct them to the website's main features.
 It has a statistics page that have three options, which are local, location and global. For local and location, they use chart.js to get a graph of new cases by day, where location prompts the user with a windows prompt for the country.
 1. Global allows users to see statistics from different countries.
 2. Local defaults to Singapore and shows SIngapore's COVID-19 new cases data.
 3. Location prompts the user to input a country name and will search up the country using API, before making the data into a chart.
 It has an about page to provide detailed information about various topics, like Symptoms, medical data and About Us.

### Features Left to Implement
- Getting different country headlines (Complications include: getting news sources that are reliable, formatting it for each country, )

## Technologies Used
- [Lottie](https://bootstrap.com)
    - The project uses **Bootstrap** for website template.

- [Lottie](https://lottie.com)
    - The project uses **Lottie** for animation.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.


## Testing

Bugs across all pages:

1. Mouse trailer:
    - On page load, if mouse is not moved the trailer will not move to mouse
    - Mix-blend mode incompatible with IE

2. Dark mode light mode:
    - Open page across multiple tabs
    - Change mode
    - Page style will not update the css to fit the mode until refresh
    - Local storage does reflect the change but the styling change will not be called

Page related bugs:

1. Home Page:
    - Bring mouse cursor inside the google maps embed
    - Trailer will stop at the last location it was at before entering the embed
    - Trailer will still follow if the cursor exits the embed
    Bug 2:
    - Click the "View larger map" on the embed
    - Bring to a enw tab of google maps, which is unintended

2. Local Stats
    - Hovering over the chart will cause slight lag
    - This is due to there being many points in the data, causing every small movement to try and tooltip multiple
    - This lag is also caused when spamming the visibility for the chart
    - Probably hard to fix as decimation does not seem to work

3. Activities > Games
    Bug 1:
    - Text seems to display at full opacity contrary to the rest of the bubble
    Bug 2:
    - Load the game window.
    - Minimise the tab / Alt+Tab into another window / Change windows
    - Return to the page
    - The bubbles will spawn all at once based on how long you have been away from the tab, based on the speed you last left.

## [Changes](PatchNotes.md) 
Changes are usually documented [here](PatchNotes.md).
## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)
- Images for the memory game:
    - [Mask icons created by mangsaabguru - Flaticon](https://www.flaticon.com/free-icons/mask)
    - [Social distancing icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/social-distancing)
    - [Disinfection icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/disinfection)
    - [Wash your hands icons created by monkik - Flaticon](https://www.flaticon.com/free-icons/wash-your-hands)
    - [Shower icon created by Freepik - Flaticon](https://www.flaticon.com/free-icons/furniture-and-household)
    - [Cough icons created by berkahicon - Flaticon](https://www.flaticon.com/free-icons/cough)
    - [Patient icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/patient)
    - [Pets icons created by photo3idea_studio - Flaticon](https://www.flaticon.com/free-icons/pets)
### Acknowledgements

- I received inspiration for this project from WHO, and MOH Singapore.


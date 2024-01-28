# Covid-19 Website
The project aims to create a website that centers around the Covid-19 virus. The website's purposes is for the users from anywhere to be able to utilize the website by obtaining data from respective countries. 
 
## Design Process
This website focuses on the general people,whether young or old, professional or casual to be able to access this website. Users are able to access real time information about Covid-19 presemted in a simple and relatively easy way to understand. 

Wireframe link:
https://pixso.net/app/editor/j8jiKUibePBX1AMz0eL8ig?icon_type=1&page-id=0%3A1

## Features

 It has an introduction page to introduce users to the website and direct them to the website's main features.
 It has a statistics page that have two options, which are local and global. Both pages have a Covid-19 heatmap, and headlines. The differences in these two are 
 1. Global allows users to see statistics from different countries and global headlines.
 2. Local detect the country the user is from and displays local statistics along with local headlines and also resource centers in that country.
 It has an about page to provide detaied information about various topics, like Faq and About Us.

### Features Left to Implement
- Another feature idea would be a game page where user will learn through playing a series of game-like feature to understand about pandemics.

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

### Acknowledgements

- I received inspiration for this project from WHO, and MOH Singapore.


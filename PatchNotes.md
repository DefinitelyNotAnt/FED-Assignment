# Patch Notes

## Added Game 1
## Virus Game
### Concept
- Red bubbles (Viruses) appears on screen. 
    - To represent people infected as bubbles and killing the viruses by clicking on them.
- The player needs to kill them by clicking on them, increasing their score.
- The rate of which "viruses" appear is based off on how many are alive.
    - This is to represent how the more infected people they are the faster they multiply.
    - The speed should be balanced that when a good player plays he can keep going until he wants to stop, but still has some difficulty.
- Past 50 viruses being alive, the game is lost and the score is tracked.
- The viruses die off on their own, but is way slower than the rate of infection.
    - To show self-recovery, but it being slow to show that it can spread before being recovered.
Notes:
Might change the bubbles to mean different meanings, where players only click the good meanings. For this, the score will have to change a bit, and the speed has to be adjusted. For the different meanings, an API could be used to implement different meanings directly.

### Game Implementation
- Created the bubble class
- Added bubbles to randomly generate on screen
- Added a way for the bubbles to disappear
- Added Event Listener that increases score and removes bubbles on click
- Added animations such as expanding when hovered and popped
- Added a scoring system
- Added high score system based on Local Storage
- Added a way to show details of game like score, current number of bubbles on screen, total bubbles so far
Notes:
Interface is kept simple to not distract the user too much. 
> [!WARNING]
> The trailer lag will affect this game so a temporary fix is that the cursor is set to a pointer when hovering the bubbles.
The hover effects etc might affect gameplay a bit but its for aesthetics, and it does not have to be well-balanced.
> [!NOTE]
> The bubbles do not disappear right away so the animations can play out. Might affect gameplay. The speed of the game may also cause performance issues on very very low end devices due to the amount of movement and speed this game has.
Should add some SFX like a sound on click, or on generation of bubbles. Maybe even a voice line when starting or losing.

# Overall changes
Added a game for the website.
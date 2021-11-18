# myApp

Calculator functionality works but is lacking the ability to chain operations together. As such, hitting the '=' button is required between operations if the user wishes to keep
a running total going. Otherwise, the previous two inputs are used for the calculation and the running total is overwritten (i.e. 8 + 5 + 6 and then '=' would result in 11 since
the 8 would be overwritten).

Light and dark themes were configured. I would like to do some more looking into how to configure themes more appropriately since it seemed to me that the dark theme would
benefit from some less bright borders.

Layout is a work in progress. With this being my first time using Ionic React (and React outside of a controlled situation), I wasn't able to quite figure out how to
adjust layout appropriately within Ionic. On my iPhone (iPhone 8), I think the portrait view actually looks quite good. But on a screen of smaller size the layout becomes a mess.
On larger screen sizes, the display value is far off to the right of the screen, rather than aligned with the right-most buttons like I would desire.

Outside of initial frustrations trying to figure out this framework, I found working with Ionic React to be enjoyable and fairly intuitive once I started to understand it more.
Managing state in the calculator was a challenge, even with this limited calculator functionality (no parentheses, exponents, etc.), but I feel that as I re-familiarize myself
with React I will be able to find a better way to handle state which will allow for additional functionality to be added (which could potentially only be available in
landscape mode on mobile devices or larger screens like PCs and tablets).

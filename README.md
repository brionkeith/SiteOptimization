# <h2>Testing and Optimization</h2>
Parent repository for all Testing and Optimization test code. Code in this repo ultimiately needs to be placed within campaign-specific Adobe Target Offers to enusre compliance with test plans.

<h4>Repo Structure</h4>
Each 'brand' directory is where all related Adobe Target campaign code will be located. For example: EX/Book-Today-Messaging/. To avoid committing campaign-related files to the wrong directory, sub-directories should be created for each campaign.

HTML files for...

<h4>Rolling Out Winners</h4>
Once a campaign is deactivated, and deemed a 'winner', a new folder should be created withing the test repo, and named as winner. This repo should include sub-folders with all dependent files, and shared with the appropriate dev team for rollout to PROD environment.

<h4>Resources</h4>
The resources directory contains items which can be reused, as needed, in any campaign. For example, there may be instances when clicks will need to be tracked. When needed, copy the mbox-click-track.js file to the desired test directory, and adhere to comments for specific instructions for proper use.



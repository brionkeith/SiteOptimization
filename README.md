# Testing & Optimization
Parent repository for all Site Optimization tests.

<h4>Repo Structure</h4>
Each 'brand' directory is where all related Adobe Target campaigns will be located. For example: EX/Book-Today-Messaging. To avoid committing campaign-related files to the wrong directory, sub-directories should be created for each campaign.

<h4>QA Approval</h4>
Once campaign is approved by QA team, create a branch named 'QA-approved'. This will ensure the final/approved files will no longer be modified.

<h4>Rolling Out Winners</h4>
Once a campaign is deactivated, and deemed a 'winner', a branch should be created and named as such--winner. This branch should then be shared with the appropriate dev team for rollout to PROD environment.

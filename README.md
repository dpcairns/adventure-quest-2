# Adventure Quest

1) Home
HTML Setup: Form for user data
On submit:
- Store the user data in local storage
- Redirect the user to map/list

2) Map/List
HTML Setup: ul to inject quests into
- Before anything, if all quests are completed, redirect to results page
- If the user has <= 0 HP, redirect them to the results page
- Otherwise, grab quest data
- Loop through it
- Generate a title for each quest
- If the quest has been completed, cross it out
- If the quest has NOT been completed it should be a link to the correct quest

3) Quest
HTML Setup: header, image, paragraph, a button, and a list of radio buttons
- Grab the id of the quest from the URL
- Use that id to `findById` that quest in our quest data
- Use the quest to populate the elements of the html
- On submit,
    - Calculate the user's new stats (HP and gold)
    - Put the new stats in local storage
    - Send user back to map

3) Results
- Display some custom ending determined by the user's stats
- Button to play again (clear local storage and redirect home)
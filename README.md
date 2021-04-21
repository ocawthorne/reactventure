# React-venture!
Flatiron School - SPA Project (*React-venture!*) - JavaScript, React, Redux, Ruby on Rails, PostgreSQL.

## Introduction
*React-venture!* is a Single-Page Application representing many of the computer games available, particularly in the 1980's and 1990s. This project was built for the final phase of Flatiron School (Front-End Frameworks); its aim is to demonstrate skill and understanding in vanilla JavaScript in addition to React and Redux and applying the principles appropriately.

The full version is hosted on https://reactventure.herokuapp.com/. Please be patient when loading the webpage as Heroku unloads the application and loads when an HTTP request is made.

## Gameplay
The player is given an introductory few sentences describing the entities around them and what they may choose to interact with. However, the player is required to either create an account or sign in. This form is purposefully rudimentary as its primary purpose is to log the progress of the player, what objects are known and unknown to the player, and to grant the player the ability to save their progress to return to later. The goal of the game is fairly implicit: to escape.

<img src="https://i.imgur.com/I0y6F0f.png">

The player has, at their disposal, four fundamental commands:
<ul>
  <li>Obtaining items</li>
  <li>Combining one item with another</li>
  <li>Looking at an item</li>
  <li>Feeling an item</li>
</ul>

With these, the player may interact with the world around them. ('Pray' and 'hit [object]' are also commands, but ultimately serve as Easter eggs.)

## Technical
Ultimately, the mechanics of the game relies on the objects which are **known**, the objects which are **held**, and objects which can be **combined** with one another. Therefore, the underlying JavaScript comprises a complex system of switch statements which, in turn, test queries including, but not limited to, the following:
<ul>
  <li>Is the verb valid? (e.g. 'get', 'grab', and 'pick up' are valid verbs, but not 'obtain')</li>
  <li>Is the object known? (e.g. 'door' is known, 'bucket' is not yet known)</li>
  <li>Is the object broken? (most objects start off in-tact, but a few start broken and require fixing by the player.</li>
  <li>If the verb is 'get':
  <ul>
    <li>Is the object itself obtainable? (e.g. crowbar is obtainable, door is not)</li>
    <li>Is the object already in the player's inventory?</li>
  </ul>
  <li>If the verb is 'use' (i.e. combining items):</li>
  <ul>
    <li>Is the object that is being applied to another object in the player's inventory?</li>
    <li>Can the two objects be combined?</li>
    <li>If the objects are successfully combined, what is the outcome? What leaves the inventory and what enters? What narrative follows?</li>
  </ul>
</ul>

When the player inputs a command, these switch statements will pull apart the string entry and determine the best treatment.

When the player saves their progress, the following data are stored to a player's row in the backend database:
<ul>
  <li>History (i.e. what has been typed and the responses)</li>
  <li>Inventory</li>
  <li>Known objects</li>
  <li>Broken objects (objects which are flagged so that they cannot be used or obtained again)</li>
  <li>Unique events (essentially, strings which serve as markers of the player's progress)</li>
</ul>

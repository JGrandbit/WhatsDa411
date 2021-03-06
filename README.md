# WhatsDa411
Tech Blog

## What it was suppose to do:

```md
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## What it currently looks like on LocalHost3001

<img width="1440" alt="Screen Shot 2021-06-29 at 4 57 34 PM" src="https://user-images.githubusercontent.com/75192030/123882234-33a87100-d8fb-11eb-9fd8-e81339a218d8.png">

## I keep getting the following when attempting to Login

<img width="1440" alt="Screen Shot 2021-06-29 at 4 39 41 PM" src="https://user-images.githubusercontent.com/75192030/123882287-55a1f380-d8fb-11eb-9d1d-693fdc2957d5.png">

## Current status

The navagation works. When you click on Home, it displays blog entries. 

When you click on Dashboard it should prompt you to Login

Attempted to get it to show up on Heroku. The link currently displays an application error.

## Heroku link
https://secure-coast-38422.herokuapp.com/

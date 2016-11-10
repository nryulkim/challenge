# Journy Coding Challenge
[Live][heroku]

[heroku]: [http:/journy-challenge.herokuapp.com]

RetroBox is a full-stack web application using Ruby on Rails as its backend, PostgreSQL as its database, and React.js with a Redux architectural framework on the frontend.
It also utilizes the Google Maps API, Yelp Fusion API, and FourSquare API in order to get the URLs.

## Features and Implementation

### User Authentication
  Users are able to create an account and sign in. Their passwords are encrypted and stored as a digest.
  Once an account is created, users are able to save Locations to their personal list.

### Locations
  Users are able to search for a location by inputting a City and typing in the name.
  The name is autocompleted based off of Yelp's database. Once a name is selected, the user can then retrieve the URLs for Yelp and FourSquare.
  The user can also manually edit these URLs and add the TripAdvisor URL. If the user is logged in, they can save the Location and associate that location with their account.

### Index Page
  Users can see all of the locations that they have saved to their account.
  The links point to the Location's show page, which will allow the user to edit the URLs as well.

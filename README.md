# travel-blog

## Project: Travel Blog

This project is part of the curriculum of the Full-Stack Web Development program at [Hamburg Coding School](https://hamburgcodingschool.com/).

### Goal

Goal is to publish a Travel Blog where you display a map and markers with posts about the places you visited.

### Features

#### World Map with Google Maps API

-   ~~Use the Google Maps JavaScript API to display a world map.~~
-   ~~For each blog post, put a marker on the map at the location of the post.~~
-   ~~Add a menu bar with title (e.g. "Travel Blog") on the left and author (profile picture, name) on the right.~~

#### Display Blog Posts at Location

-   ~~Make the markers clickable: on click, show the blog post at that location as InfoWindow.~~
-   ~~A blog post should contain:~~
    -   ~~image~~
    -   ~~title~~
    -   ~~text~~
    -   ~~author with name and image~~
    -   ~~date~~
    -   ~~location with city and country~~

#### Get Blog Posts from Firestore

-   ~~Store the blog posts on Firebase Firestore and load them with the Firebase JavaScript API.~~
-   ~~Also save the coordinates of a location with latitude and longitude.~~
-   ~~Load the blog posts as soon as the map is loaded (inside the `initMap()` function).~~
-   ~~Save Markers and InfoWindows in global arrays to handle click events easier.~~

#### Admin View

-   ~~Put a link on the menu bar: "ADMIN".~~
-   ~~This should go to an HTML file `admin.html`.~~
-   ~~This contains the list of blog posts (as in Micro Blog).~~
-   ~~At the bottom, create a form to submit a new blog post.~~
-   ~~On submit, send the new blog post to Firestore.~~
-   ~~For the images, save the image in your project manually and save the relative path as string, e.g. `"img/barcelona.jpg"`.~~

#### Authentication

-   Use Firebase Auth (login with email and password) for authentication.
-   If the user is not logged in:
    -   they can still see the map with all blog posts
    -   they do not see an author in the menu bar
    -   they do not see the "ADMIN" link in the menu bar
    -   they see a "LOGIN" link in the menu bar
-   The "LOGIN" link in the menu bar leads to a page `login.html` that displays a login form.
-   Unsuccessful login attempts show a general error message "Username and password do not match."
-   If the user successfully logged in:
    -   they are sent to the world map
    -   they do not see the "LOGIN" link in the menu bar
    -   they see the author (profile image, name) in the menu bar
    -   they see the "ADMIN" link in the menu bar
    -   they see a "Logout" button in the menu bar behind the author
-   If the user is not logged in and accesses `admin.html` directly in the browser, they are automatically sent to the login form.

#### Imprint / Contact

-   Create a link in the menu bar "CONTACT".
-   Create a `contact.html` file.
-   Put your (and your team mate's) name there.
-   Write 2 sentences about your project.
-   Put your (or if you prefer [Hamburg Coding School's](https://hamburgcodingschool.com/contact/)) contact details:
    -   name
    -   address
    -   email
    -   phone number
-   Write a note that this was a project from a course at Hamburg Coding School.

#### Tailwind CSS

-   Apply Tailwind CSS to the pages where you haven't already used it.
-   Make it pretty. 🤩

### Optional Bonus Tasks

#### Bonus: Firebase Storage for images

-   Include the Storage API from Firebase.
-   Research how to upload and download pictures with Firebase Storage.
-   Upload your blog post's images to Storage.
-   Load the images from Storage when displaying the blog posts.
-   In the form for creating a new blog post, add an option to upload an image for the blog post to Storage.

#### Bonus: Save Author Profile in User object

-   Research how Firebase Auth is connecting user information to a login, and how the User object looks like.
-   Use the User object from Firebase Auth to store profile picture and name.
-   Use this user information as author data wherever you display the author.

#### Bonus: Edit Blog Posts

-   In the Admin view, add an "edit" icon to every blog post.
-   If the user clicks that, the blog post is replaced with a form similar to the one for creating a new blog post.
-   The values of the form are pre-filled with the data from the blog post.
-   Research how changing a blog post works with the Firestore API.
-   On click on the submit button, the old blog post is changed with the new values and sent to Firestore.

#### Bonus: Limit Blog Post Text to 120 Characters

-   ~~Research how you can use JavaScript to limit the number of characters the user can type into a textarea, similar to Twitter.~~
-   ~~For the blog post form, apply that to the textarea for the text.~~
-   ~~Display a number below the textarea that indicates the number of characters, e.g.: `87/120` or `34 left`.~~
-   If the number of characters the user typed in is more than 120:
    -   ~~the number turns red~~
    -   the submit button is disabled.
-   If the user reduces the number of characters to less than 120:
    -   ~~the number is grey/black again~~
    -   the submit button is enabled again.

### Modalities

-   You can work alone or in a team of two.
-   You are allowed (and even encouraged) to ask your classmates for help or help them.
-   Use all the documentation and online tutorials as you like.
-   You can ask Teresa for help anytime.
-   For communication, use the Slack channel.
-   You get two consultation classes:
    -   Friday, March 27th, 18:00-20:00
    -   Friday, April 3rd, 18:00-20:00
-   The consultation classes take place in our online classroom at NewRow.
-   **Deadline: 17.4.2020, 18:00**

### Submission

1. Upload your code to a new GitHub repository.

-   Remember to remove your API keys.
-   If you worked in a team, link the GitHub accounts of both of you in the README.md.

2. Publish your travel blog on GitHub Pages.

-   Create one login for you (or each team member)
-   Create a guest login
-   Have at least 8 blog posts

3. Send us an email with the following information:

-   A link to your GitHub repository
-   A link to your published travel blog
-   If you worked in a team, both your names
-   If you did any bonus tasks, list them
-   Login information for the Guest account you created
-   Send it to Teresa (teresa@hamburgcodingschool.com) and Jonas (jonas.reitmann@hamburgcodingschool.com)

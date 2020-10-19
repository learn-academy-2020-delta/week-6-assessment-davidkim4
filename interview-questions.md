# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: The name of the foreign key will most likely be id and would be part of the sightings model because it needs to associate with an id from the an instance of animal.

  Researched answer:The foreign key always goes to the model with the belongs_to association. The foreign key would be called animal_id.



2. Which RESTful routes must always be passed params? Why?

  Your answer: I don't recall what RESTful routes are... 

  Researched answer: delete, update, and show require an paramter because here we are dealing with a specific model item.



3. Name three rails generator commands. What is created by each?

  Your answer: generate model creates a model class with designated parameters. generate controller creates a controller class that will direct the user through different paths. I dont rememeber the 3rd one but its the most convenient generate.

  Researched answer: Generate model creates a model class with designated parameters and their data type. Generate controller creates a controller class that will hold all the restful functions and direct the user through different paths. Third one is generate resource which sets up migration, model, controller and all the routes necessary.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

def index, returns all the model user objects
method="GET"    /users          

def show, returns a user object with a specified id
method="GET"    /users/1  

def new, return an HTMl form for creating a new user
method="GET"    /users/new

def edit, return an HTML form for editing a user 
method="GET"    /users/edit/1    

def create, create a new user
method="POST"   /users/       

def update, updates a specific user
method="PUT"    /users/1      

def destroy, destroys a specific user
method="DELETE" /users/1      



5. As a developer, you want to make an application that will help you manage your to do list. For the MVP, you want to create just the user's view. Create 10 user stories that will help you get your application started. 

1  As a user I can see an empty list of to dos
2  As a user I can create a new to do with a title and content, and it will show up on the empty list.
3  As a user I can create another to do and it will be placed below the previous to do.
4  As a user I can mark a to do so that it is finished.
5  As a user I can unmark a to do so that it is not finished.
6  As a user I can update a to do to change its title.
7  As a user I can update a to do to change its content.
8  As a user I can press a button to delete every single to do on the list.
9  As a user I can select a specific to do and delete it.
10  As a user I can find a specific to do by searching for the title.
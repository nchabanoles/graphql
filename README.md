GraphQL - NodeJS
 
 This project is a discovery project for GraphQL.


Mongo Db:

Using an online database from https://mlab.com

Inserting data into MongoDB using GraphQL mutations:

Access GraphiQL webapp: http://localhost:4000/graphql

Issue the following mutations:

mutation {
	addAuthor(name: "Patrick Rothfuss", age:44) {
    id
    name
    age
  }
}

mutation {
	addAuthor(name: "Brandon Sanderson", age:42) {
    id
    name
    age
  }
}

mutation {
	addAuthor(name: "Terry Pratchett", age:66) {
    id
    name
    age
  }
}

mutation {
	addBook(name: "The Long Earth", genre:"Sci-Fi", authorId:"5b0d747de784af20701a2297") {
    id
    name
    genre
  }
}

mutation {
	addBook(name: "The Final Empire", genre:"Fantasy", authorId:"5b0d746ce784af20701a2296") {
    id
    name
    genre
  }
}

mutation {
	addBook(name: "The Hero of Ages", genre:"Fantasy", authorId:"5b0d746ce784af20701a2296") {
    id
    name
    genre
  }
}

mutation {
	addBook(name: "The Colour of Magic", genre:"Fantasy", authorId:"5b0d747de784af20701a2297") {
    id
    name
    genre
  }
}

mutation {
	addBook(name: "The Light Fantastic", genre:"Fantasy", authorId:"5b0d747de784af20701a2297") {
    id
    name
    genre
  }
}

mutation {
	addBook(name: "Name of the Wind", genre:"Fantasy", authorId:"5b0d745ce784af20701a2295") {
    id
    name
    genre
  }
}


Test application
nodemon server/app.js

Access GraphiQL webapp: http://localhost:4000/graphql

Issue queries on Books or Authors

Get author with id 1 and the list of his/her books 
{
  author(id:1){
    name
  	books{
      name
	  genre
    }
  }
}

List all books with their author
{
  books{
    name
  	genre
    author{
      name
    }
  }
}
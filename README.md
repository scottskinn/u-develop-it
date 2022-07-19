# u-develop-it

Voting with SQL

This is a backend project that uses SQL to store data. The data is stored in a database called 'election'.
Within the database, there are four tables that hold information on the candidates, the voters, the votes, and the parties. The candidates are stored in a table called 'candidates'. The voters are stored in a table called 'voters'. The votes are stored in a table called 'votes'. The parties are stored in a table called 'parties'.

## Start Server

In the command line, run the following command to start the server:

```npm start or node server.js```, server will start on localhost:3000

Once the server has started, you can use Postman to test the API's.

## API's

### Candidates

![Get candidates](/images/Get-candidates.jpg)

### Parties

![Get parties](/images/Get-parties.jpg)

### Voters

![Get Voters](/images/Get-voters.jpg)

### Votes

![Get votes](/images/Get-votes.jpg)

This is just an example of the GET routes. The POST routes are the same as the GET routes, except that the data is sent in the body of the request. The PUT routes are the same as the GET routes, except that the data is sent in the body of the request. The DELETE routes are the same as the GET routes, except that the data is not sent in the body of the request.

## Continuation

The next steps for this project are to create the front-end page to display the data.

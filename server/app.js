const express = require("express")
const graphqlHTTP = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")

const app = express()

//connect to mongodb atlas db
mongoose.connect("mongodb+srv://testUser:test123@gql-practice-0uxbz.mongodb.net/test?retryWrites=true&w=majority")
mongoose.connection.once("open", () => {
    console.log("Connected to the database")
})

app.use("/graphql", graphqlHTTP({
    //this schema is describing a graph 
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log("Listening to requests")
})


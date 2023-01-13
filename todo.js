const a = require("express");
const app = a();
const bodyparser = require("body-parser");
const x = require(__dirname + "/day.js");
const dateData = x();
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://shubham:shubham121@cluster0.z61vco4.mongodb.net/todoList")

todoSchema = {
    name: String
}
const todo = mongoose.model("todolist", todoSchema)


app.set("view engine", "ejs");

var n0 = [];
app.use(bodyparser.urlencoded({ extended: true }));
/////////////////////////////////////

app.get("/", function (req, res) {
    todo.find(function (err, data) {
        if (data.length === 0) {
            const item1 = new todo({ name: 'additem' })
            const item2 = new todo({ name: "delete" })
            const item3 = new todo({ name: "updateitem" })
            const defaultItems = [item1, item2, item3]
            todo.insertMany(defaultItems,function(err){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("added because database is empty")
                }
            })
            res.redirect("/")
        }
        else{
            res.render("todo.ejs",{data:dateData,task:data})
        }
    })


    
})

4
//donottouch/////////////////////////////
app.listen(3001, function () {
    console.log("server turned on");
})
//donottouch////////////////////////////

app.post("/", function (req, res) {
    input=req.body.n1;
    todo.create({name:input});
    res.redirect("/")

})
app.get("/work", function (req, res) {
    res.render("todo.ejs", { data: "WorkList", task: n0 })

})
app.get("/about", function (req, res) {
    res.render('todoabout.ejs')
})

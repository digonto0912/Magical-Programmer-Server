//require
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require('mongodb');
const objectId = require("mongodb").ObjectId;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = require("./pages/Registers");
require("dotenv").config();

// port
const port = process.env.PORT || 2333;

// uses
app.use(cors());
app.use(express.json());

//mongoDB
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dbm4r.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log(uri);

async function run() {
try {
    await client.connect();
    const database = client.db("MagicalProgrammer");
    
    
// get apis
    
    // CIC3Card1stApi
    const CIC3Card1stApi = database.collection("CIC3Card-1st-Api");
    app.get("/CIC3Card1stApi", async(req, res)=>{
        const CIC3Card1stApiCursor = CIC3Card1stApi.find({});
        const CIC3Card1stApiResult = await CIC3Card1stApiCursor.toArray();
        res.send(CIC3Card1stApiResult);
    })
    
    // CIC3Card2ndApi
    const CIC3Card2ndApi = database.collection("CIC3Card-2nd-Api");
    app.get("/CIC3Card2ndApi", async(req, res)=>{
        const CIC3Card2ndApiCursor = CIC3Card2ndApi.find({});
        const CIC3Card2ndApiResult = await CIC3Card2ndApiCursor.toArray();
        res.send(CIC3Card2ndApiResult);
    })

    // CIC3Card3rdApi
    const CIC3Card3rdApi = database.collection("CIC3Card-3rd-Api");
    app.get("/CIC3Card3rdApi", async(req, res)=>{
        const CIC3Card3rdApiCursor = CIC3Card3rdApi.find({});
        const CIC3Card3rdApiResult = await CIC3Card3rdApiCursor.toArray();
        res.send(CIC3Card3rdApiResult);
    })
    
    // CourseInfosApi1
    const CourseInfosApi1 = database.collection("Course-Infos-Api-1");
    app.get("/CourseInfosApi1", async(req, res)=>{
        const CourseInfosApi1Cursor = CourseInfosApi1.find({});
        const CourseInfosApi1Result = await CourseInfosApi1Cursor.toArray();
        res.send(CourseInfosApi1Result);
    })
    
    // CourseInfosApi2
    const CourseInfosApi2 = database.collection("Course-Infos-Api-2");
    app.get("/CourseInfosApi2", async(req, res)=>{
        const CourseInfosApi2Cursor = CourseInfosApi2.find({});
        const CourseInfosApi2Result = await CourseInfosApi2Cursor.toArray();
        res.send(CourseInfosApi2Result);
    })

    // BlogsCardsApi
    const BlogsCardsApi = database.collection("blogs-Cards-Api");
    app.get("/BlogsCardsApi", async(req, res)=>{
        const BlogsCardsApiCursor = BlogsCardsApi.find({});
        const BlogsCardsApiResult = await BlogsCardsApiCursor.toArray();
        res.send(BlogsCardsApiResult);
    })

    // cssDemoVideo
    const cssDemoVideos = database.collection("css-demo-videos");
    app.get("/cssDemoVideos", async(req, res)=>{
        const cssDemoVideosCursor = cssDemoVideos.find({});
        const cssDemoVideosResult = await cssDemoVideosCursor.toArray();
        res.send(cssDemoVideosResult);
    })

    // htmlDemoVideo

    // get
    const htmlDemoVideos = database.collection("html-demo-videos");
    app.get("/htmlDemoVideos", async(req, res)=>{
        const htmlDemoVideosCursor = htmlDemoVideos.find({});
        const htmlDemoVideosResult = await htmlDemoVideosCursor.toArray();
        res.send(htmlDemoVideosResult);
    })
    // post
    app.post("/AddInfosHtmlDemoVideo", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await htmlDemoVideos.insertOne(AddInfosHtmlDemoVideoInfoCursor);
        console.log(totalAddInfosHtmlDemoVideoInfoResult);
    })
    // update
    // update page get
    app.get("/UpdateHtmlDemoVideo/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        const result = await htmlDemoVideos.findOne(query);
        res.send(result);
    })

    // Delete
    app.delete("/HtmlDemoVideoDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await htmlDemoVideos.deleteOne(query);
    })



    // Payment

    // get
    // Payment Rules
    const PaymentSystemRuls = database.collection("payment-system-rules");
    const bkashPaymentInfo = database.collection("bkashPaymentInfo");
    app.get("/PaymentSystemRuls", async(req, res)=>{
        const PaymentSystemRulsCursor = PaymentSystemRuls.find({});
        const PaymentSystemRulsResult = await PaymentSystemRulsCursor.toArray();
        res.send(PaymentSystemRulsResult);
    })
    // bkash Payment Info
    app.get("/bkashPaymentInfo", async(req, res)=>{
        const BkashPaymentInfoCursor = bkashPaymentInfo.find({});
        const BkashPaymentInfoResult = await BkashPaymentInfoCursor.toArray();
        res.send(BkashPaymentInfoResult);
    })
    // posts
    // bkash Payment Info
    app.post("/bkashPayment", async(req, res)=>{
        const bkashPaymentCursor = req.body;
        const bkashPaymentResult = await bkashPaymentInfo.insertOne(bkashPaymentCursor);
        console.log(bkashPaymentResult)
    })



    // videoList
    const videoList = database.collection("videoList");
    app.get("/videoList", async(req, res)=>{
        const videoListCursor = videoList.find({});
        const videoListResult = await videoListCursor.toArray();
        res.send(videoListResult);
    })



    // users 
    // register
    const createNewUsers = database.collection("createNewUsers");
    app.post("/registation", async(req, res)=>{

        const newUserInfo = req.body;
        let email = newUserInfo.email;
        let pass = newUserInfo.pass;

        // scure registation
        if(email,pass){
            const hashedPass = await bcrypt.hash(pass, 10);

            pass = hashedPass;

            const registerEmploye = new Register({
                email: email,
                pass: pass
            })

            // token
            const token = await registerEmploye.generateAuthToken();
            // res.cookie(jwt, token);
            console.log(token)

            // inserting
            const result = await createNewUsers.insertOne(registerEmploye);

            console.log(registerEmploye);
            console.log(result);
        }
        

    })
    
    // login
    app.post("/login", async(req, res)=>{
        try {
            const loginUserInfo = req.body;
            const email = loginUserInfo.email;
            const pass = loginUserInfo.pass;

            // mongoDB to find info
            const userToFindEmail = await createNewUsers.findOne({email});
            const matchThisPass = await bcrypt.compare(pass, userToFindEmail.pass);
            
            // if(userToFindEmail.pass === pass){

            if(matchThisPass){
                res.send(userToFindEmail)
                console.log("done")
            }
            else{
                res.send(404);
                console.log("email not found")
            }
            console.log(matchThisPass);
            console.log(userToFindEmail, userToFindEmail.pass);
        } catch (error) {
            res.send("email not 404")
        }
    })
    
    
} 

  finally {
    // await client.close();
  }
}

run()


// listen
app.listen(port, ()=>{
    console.log("please check this port :", port)
})
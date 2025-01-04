//require
const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient } = require('mongodb');
const objectId = require("mongodb").ObjectId;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = require("./pages/Registers");
const { cookie } = require("express/lib/response");
const fileUpload = require("express-fileupload");

// .env requireing
require("dotenv").config();

// port
const port = process.env.PORT || 2333;

// uses
app.use(cors());
app.use(express.json());
app.use(fileUpload());

//mongoDB

// mongoDB node.js 2.2.12
var uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-shard-00-00.dbm4r.mongodb.net:27017,cluster0-shard-00-01.dbm4r.mongodb.net:27017,cluster0-shard-00-02.dbm4r.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-cwmyp3-shard-0&authSource=admin&retryWrites=true&w=majority`;
console.log(uri)

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
try {
    await client.connect();
    const database = client.db("MagicalProgrammer");
    
    
// get apis
    
    // CIC3Card1stApi

    // get
    const CIC3Card1stApi = database.collection("CIC3Card-1st-Api");
    app.get("/CIC3Card1stApi", async(req, res)=>{
        const CIC3Card1stApiCursor = CIC3Card1stApi.find({});
        const CIC3Card1stApiResult = await CIC3Card1stApiCursor.toArray();
        res.send(CIC3Card1stApiResult);
    })
    // post
    app.post("/AddInfosCIC3Card1stApi", async(req, res)=>{
        const ReqBody = req.body;
        const pic = req.files.img;
        const picData = pic.data;
        const encodedPic = picData.toString("base64");
        const imgBuffer = Buffer.from(encodedPic, "base64");
        const infos = {
            ...ReqBody,
            image: imgBuffer
        }

        const result = await BlogsCardsApi.insertOne(infos);

        console.log("body", req.body);
        console.log("files", req.files);
        console.log(result);
    })
    // update
    // update page get
    app.get("/UpdateCIC3Card1stApi/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await CIC3Card1stApi.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCIC3Card1stApi/:id", async(req, res)=>{
        const id = req.params.id;
        // user updated infos get start
        const ReqBody = req.body;
        const infos = {
            ...ReqBody
        }
        // user updated infos get end 
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...infos
            },
          };
          console.log(updateDoc);
        const result = await CIC3Card1stApi.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CIC3Card1stApiDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CIC3Card1stApi.deleteOne(query);
    })
    


    // CIC3Card2ndApi
    
    
    //get
    const CIC3Card2ndApi = database.collection("CIC3Card-2nd-Api");
    app.get("/CIC3Card2ndApi", async(req, res)=>{
        const CIC3Card2ndApiCursor = CIC3Card2ndApi.find({});
        const CIC3Card2ndApiResult = await CIC3Card2ndApiCursor.toArray();
        res.send(CIC3Card2ndApiResult);
    })
    // post
    app.post("/AddInfosCIC3Card2ndApi", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await CIC3Card2ndApi.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })
    // update
    // update page get
    app.get("/UpdateCIC3Card2ndApi/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await CIC3Card2ndApi.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCIC3Card2ndApi/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await CIC3Card2ndApi.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CIC3Card2ndApiDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CIC3Card2ndApi.deleteOne(query);
    })
    


    // CIC3Card3rdApi
    
    //get
    const CIC3Card3rdApi = database.collection("CIC3Card-3rd-Api");
    app.get("/CIC3Card3rdApi", async(req, res)=>{
        const CIC3Card3rdApiCursor = CIC3Card3rdApi.find({});
        const CIC3Card3rdApiResult = await CIC3Card3rdApiCursor.toArray();
        res.send(CIC3Card3rdApiResult);
    })
    // post
    app.post("/AddInfosCIC3Card3rdApi", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await CIC3Card3rdApi.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })
    // update
    // update page get
    app.get("/UpdateCIC3Card3rdApi/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await CIC3Card3rdApi.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCIC3Card3rdApi/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await CIC3Card3rdApi.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CIC3Card3rdApiDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CIC3Card3rdApi.deleteOne(query);
    })
    

    
    // CourseInfosApi1

    //get
    const CourseInfosApi1 = database.collection("Course-Infos-Api-1");
    app.get("/CourseInfosApi1", async(req, res)=>{
        const CourseInfosApi1Cursor = CourseInfosApi1.find({});
        const CourseInfosApi1Result = await CourseInfosApi1Cursor.toArray();
        res.send(CourseInfosApi1Result);
    })
    // post
    app.post("/AddInfosCourseInfoCard1", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await CourseInfosApi1.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })
    // update
    // update page get
    app.get("/UpdateCourseInfoCard1/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await htmlDemoVideos.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCourseInfoCard1/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await htmlDemoVideos.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CourseInfoCard1Delete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CourseInfosApi1.deleteOne(query);
    })
    

    
    // CourseInfosApi2
    
    const CourseInfosApi2 = database.collection("Course-Infos-Api-2");
    app.get("/CourseInfosApi2", async(req, res)=>{
        const CourseInfosApi2Cursor = CourseInfosApi2.find({});
        const CourseInfosApi2Result = await CourseInfosApi2Cursor.toArray();
        res.send(CourseInfosApi2Result);
    })
    // post
    app.post("/AddInfosCourseInfoCard2", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await CourseInfosApi2.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })
    // update
    // update page get
    app.get("/UpdateCourseInfoCard2/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await htmlDemoVideos.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCourseInfoCard2/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await htmlDemoVideos.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CourseInfoCard2Delete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CourseInfosApi2.deleteOne(query);
    })
    


    // BlogsCardsApi
    
    //get
    const BlogsCardsApi = database.collection("blogs-Cards-Api");
    app.get("/BlogsCardsApi", async(req, res)=>{
        const BlogsCardsApiCursor = BlogsCardsApi.find({});
        const BlogsCardsApiResult = await BlogsCardsApiCursor.toArray();
        res.send(BlogsCardsApiResult);
    })
    // post
    app.post("/AddInfosBlogCard", async(req, res)=>{
        const ReqBody = req.body;
        const pic = req.files.img;
        const picData = pic.data;
        const encodedPic = picData.toString("base64");
        const imgBuffer = Buffer.from(encodedPic, "base64");
        const infos = {
            ...ReqBody,
            image: imgBuffer
        }

        const result = await BlogsCardsApi.insertOne(infos);

        console.log("body", req.body);
        console.log("files", req.files);
        console.log(result);
    })
    // update
    // update page get
    app.get("/UpdateBlogCard/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await BlogsCardsApi.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateBlogCard/:id", async(req, res)=>{
        const id = req.params.id;
        // user Update infos line start
        const ReqBody = req.body;
        const pic = req.files.img;
        const picData = pic.data;
        const encodedPic = picData.toString("base64");
        const imgBuffer = Buffer.from(encodedPic, "base64");
        const infos = {
            ...ReqBody,
            image: imgBuffer
        }
        // user Update infos line end
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...infos
            },
          };
          console.log(updateDoc);
        const result = await BlogsCardsApi.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/BlogCardDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await BlogsCardsApi.deleteOne(query);
    })
    


    // cssDemoVideo
    
    // get
    const cssDemoVideos = database.collection("css-demo-videos");
    app.get("/cssDemoVideos", async(req, res)=>{
        const cssDemoVideosCursor = cssDemoVideos.find({});
        const cssDemoVideosResult = await cssDemoVideosCursor.toArray();
        res.send(cssDemoVideosResult);
    })
    // post
    app.post("/AddInfosCssDemoVideo", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await cssDemoVideos.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })
    // update
    // update page get
    app.get("/UpdateCssDemoVideo/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await cssDemoVideos.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCssDemoVideo/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await cssDemoVideos.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CssDemoVideoDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await cssDemoVideos.deleteOne(query);
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
    })
    // update
    // update page get
    app.get("/UpdateHtmlDemoVideo/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await htmlDemoVideos.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateHtmlDemoVideo/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await htmlDemoVideos.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/HtmlDemoVideoDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await htmlDemoVideos.deleteOne(query);
    })
    
    // CIDCH

    // get
    const CIDCH = database.collection("CIDCH");
    app.get("/CIDCH", async(req, res)=>{
        const CIDCHCursor = CIDCH.find({});
        const CIDCHResult = await CIDCHCursor.toArray();
        res.send(CIDCHResult);
    })
    // post
    app.post("/AddInfosCIDCH", async(req, res)=>{
        const AddInfosCIDCH = req.body;

        const totalAddInfosCIDCHResult = await CIDCH.insertOne(AddInfosCIDCH);
    })
    // update
    // update page get
    app.get("/UpdateCIDCH/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await CIDCH.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCIDCH/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await CIDCH.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CIDCHDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CIDCH.deleteOne(query);
    })
    


    
    // CIDCC

    // get
    const CIDCC = database.collection("CIDCC");
    app.get("/CIDCC", async(req, res)=>{
        const CIDCCCursor = CIDCC.find({});
        const CIDCCResult = await CIDCCCursor.toArray();
        res.send(CIDCCResult);
    })
    // post
    app.post("/AddInfosCIDCC", async(req, res)=>{
        const AddInfosCIDCC = req.body;

        const totalAddInfosCIDCCResult = await CIDCC.insertOne(AddInfosCIDCC);
    })
    // update
    // update page get
    app.get("/UpdateCIDCC/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await CIDCC.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateCIDCC/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await CIDCC.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/CIDCCDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await CIDCC.deleteOne(query);
    })
    



    // Payment

    // get
    // Payment Rules
    const PaymentSystemRuls = database.collection("payment-system-rules");
    const bkashPaymentInfo = database.collection("bkashPaymentInfo");
    const ThisTimeRunningCourseName = database.collection("ThisTimeRunningCourseName");
    app.get("/PaymentSystemRuls", async(req, res)=>{
        const PaymentSystemRulsCursor = PaymentSystemRuls.find({});
        const PaymentSystemRulsResult = await PaymentSystemRulsCursor.toArray();
        res.send(PaymentSystemRulsResult);
    })
    // ThisTimeRunningCourseName
    app.get("/ThisTimeRunningCourseName", async(req, res)=>{
        const ThisTimeRunningCourseNameCursor = ThisTimeRunningCourseName.find({});
        const ThisTimeRunningCourseNameResult = await ThisTimeRunningCourseNameCursor.toArray();
        res.send(ThisTimeRunningCourseNameResult);
    })
    // bkash Payment Info
    app.get("/bkashPaymentInfo", async(req, res)=>{
        const BkashPaymentInfoCursor = bkashPaymentInfo.find({});
        const BkashPaymentInfoResult = await BkashPaymentInfoCursor.toArray();
        res.send(BkashPaymentInfoResult);
    })

    // posts
    // bkash Payment Info user posting
    app.post("/bkashPayment", async(req, res)=>{
        const bkashPaymentCursor = req.body;
        const bkashPaymentResult = await bkashPaymentInfo.insertOne(bkashPaymentCursor);
    })
    // rules post
    app.post("/AddInfosPaymentSystemRules", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await PaymentSystemRuls.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })

    // update
    // rules update page get
    app.get("/UpdatePaymentSystemRules/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await PaymentSystemRuls.findOne(query);
        res.send(result);
    })
    // rules update page puting
    app.put("/UpdatePaymentSystemRules/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await PaymentSystemRuls.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/PaymentSystemRulesDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await PaymentSystemRuls.deleteOne(query);
    })

    



    // videoList
    
    //get
    const videoList = database.collection("videoList");
    app.get("/videoList", async(req, res)=>{
        const videoListCursor = videoList.find({});
        const videoListResult = await videoListCursor.toArray();
        res.send(videoListResult);
    })
    // post
    app.post("/AddInfosVideoListData", async(req, res)=>{
        const AddInfosHtmlDemoVideoInfoCursor = req.body;

        const totalAddInfosHtmlDemoVideoInfoResult = await videoList.insertOne(AddInfosHtmlDemoVideoInfoCursor);
    })
    // update
    // update page get
    app.get("/UpdateVideoListData/:id", async(req, res)=>{
        const id = req.params.id;
        const query = { _id: objectId(id) };
        console.log(query);
        const result = await videoList.findOne(query);
        res.send(result);
    })
    // update page puting
    app.put("/UpdateVideoListData/:id", async(req, res)=>{
        const id = req.params.id;
        const updatedInfo = req.body;
        const query = { _id: objectId(id) };
        console.log(query);
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                ...updatedInfo
            },
          };
          console.log(updateDoc);
        const result = await videoList.updateOne(query, updateDoc, options);
        res.send(result);
    })

    // Delete
    app.delete("/VideoListDataDelete/:id", async(req, res)=>{
        const id = req.params.id;
        const query = {_id: objectId(id)};

        const result = await videoList.deleteOne(query);
    })
    




    // users 
    // register
    const createNewUsers = database.collection("createNewUsers");
    app.post("/registation", async(req, res)=>{
        try {
            const newUserInfo = req.body;
            const userName = newUserInfo.userName;
            const UserPhoneNumber = newUserInfo.UserPhoneNumber;
            const email = newUserInfo.email;
            let pass = newUserInfo.pass;
            const userPay = newUserInfo.userPay;
            const coursesNames = newUserInfo.coursesNames;
        
            // scure registation
            if(email, pass, userName, UserPhoneNumber){
                // Finding This Email
                const findingThisEmail = await createNewUsers.findOne({email});

                if (!findingThisEmail) {
                const hashedPass = pass // await bcrypt.hash(pass, 10);
            
                pass = hashedPass;
            
                const registerEmploye = new Register({
                userName: userName,
                UserPhoneNumber: UserPhoneNumber,
                email: email,
                pass: pass,
                userPay: userPay,
                coursesNames: coursesNames
                });
            
                // token
                const token = await registerEmploye.generateAuthToken();
                
                // inserting
                const result = await createNewUsers.insertOne(registerEmploye);

                if (token) {
                    const cookie = {token:token, SG:email} ;
                    res.send(JSON.stringify(cookie));
                    console.log("cookie done !");
                }    

                } else {
                    const error = {error:"Already Registered !"};
                    res.send(JSON.stringify(error));
                }
                
            }
            else{
                const error = {error:"Please, fill in all"};
                res.send(JSON.stringify(error))
            }

        } catch (error) {
            console.log(error)
        }
    })
    
    // login
    app.post("/login", async(req, res)=>{
        try {
            const loginUserInfo = req.body;
            const email = loginUserInfo.email;
            const pass = loginUserInfo.pass;

        if (email, pass) {
                
            // mongoDB to find info
            const userToFindEmail = await createNewUsers.findOne({email});
            
            // please uncomment this hashing start
                // const matchThisPass = await bcrypt.compare(pass, userToFindEmail.pass);
            
                // if(matchThisPass && userToFindEmail){
            // please uncomment this hashing end
            
            if(pass === userToFindEmail.pass && userToFindEmail){
                
                const registerEmploye = new Register({
                    email: email,
                    pass: pass
                });

                // token
                const token = await registerEmploye.generateAuthToken();

                if (token) {
                    const cookie = {token:token, SG:email};
                    res.send(JSON.stringify(cookie));
                    console.log("cookie done !", cookie);
                }

            }
            else{
                const error = {error:"Email not found"};
                res.send(JSON.stringify(error));
            }
            
        } else {
            const error = {error:"Please, fill in all"};
            res.send(JSON.stringify(error));
        }

        } catch (error) {
            console.log(error);
        }
    })

    // auth
    app.post("/auth", async(req,res)=>{
        const SG = await req.body.SG;
        
        // mongoDB to find info
        const userInfo = await createNewUsers.findOne({email:SG});

        const cookie = `user=${userInfo.email}; samesite=lax; secure`;  
        
        res.setHeader("set-cookie", [cookie]);
        res.send(userInfo);
        
    })





    // user paying all subject

    // Update UserPay and why !
    app.put("/UpdateUserPay/:email", async(req, res)=>{
        const email = req.params.email;
        const reqInfos = req.body;
    
        const updatedInfo = reqInfos.userPay;
        const courseName = reqInfos.courseName;
    
        const query = { email:email };
        const userInfo = await createNewUsers.findOne(query);
        const id = userInfo._id;
    
        const options = { upsert: true };
        const coursesNames = userInfo.coursesNames;
        const updateDoc = {
            $set: {
                userPay:updatedInfo
            },
        };
        console.log(updateDoc);
        
        const result = await createNewUsers.updateOne(query, updateDoc, options);
        console.log(result);
        
        createNewUsers.updateOne(
            { _id:id },
            { $push: { coursesNames: courseName } }
         )
        res.send(result);
        
        console.log(coursesNames);
        console.log(userInfo);
    })
    // Why pay or there buyed all courses name
    // app.get("/TBACN/:email", async(req, res)=>{
    //     const email = req.params.email;
        
    //     const query = { email:email };
    //     const userInfo = await createNewUsers.findOne(query);
        
    //     const coursesNames = userInfo.coursesNames;

    //     const Result = await coursesNames.toArray();
    //     res.send(Result);
    // })




    //Courses Cards Infos
    const CCIs = database.collection("CCIs");

    //get
    // CCI
    app.post("/CCI", async(req, res)=>{
        const email = await req.body.userEmail;
        var arr = [];
        console.log(email);
        
        // DBCN array
        const query = { email:email };
        const userInfo = await createNewUsers.findOne(query);
        
        // user buyed courses names
        const coursesNames = await userInfo.coursesNames;
        var UDBCNsA = await coursesNames;

        // UDBCNsA for looping
        UDBCNsA = UDBCNsA.toString().split(',').map(String);

        // for loop for CN fineding
        for (i=0 ; i <= UDBCNsA.length ; ++i) {
            
            //CN fineding
            const FindedCCIs = await CCIs.findOne({ CN:UDBCNsA[i] });

            // empty array pushing
            if(FindedCCIs){
                console.log(FindedCCIs);
                arr.push(FindedCCIs);
            }
        }
        
        console.log(arr);
        res.send(arr);
        res.end();
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
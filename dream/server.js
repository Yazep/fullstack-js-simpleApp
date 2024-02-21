
import dotenv from 'dotenv';
dotenv.config();
import {OpenAI} from 'openai';
import express from 'express';
import cors from 'cors';

const openAi2 =new OpenAI ({
    apiKey:process.env.AIKEY,
}) 

const app2 = express();
app2.use(cors());
app2.use(express.json());

app2.post('/dream',async (req,res)=>{
    try
    {// const prompt = req.body.prompt;
    // const request = await openAi2.images.generate({
    //     prompt,
    //     n:1,
    //     size:'1024x1024',
    // })
    const image = 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg.webp';
    res.send({image});}
    catch (error){
        console.error(error)
        res.status(500).send(error?.response.data.error||'Something went wrong')
    };
});

app2.listen(8080,()=>{console.log('make art on http://localhost:8080/dream')})
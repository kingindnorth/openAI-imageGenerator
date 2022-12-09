const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const aiController = async(req,res)=>{
    try{
        const {prompt,size} = req.body
        const imageSize = size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024"

        const response = await openai.createImage({
            prompt,
            n:1,
            size:imageSize
        })
          const image_url = response.data.data[0].url
          res.status(200).json({
            success:true,
            data:image_url
          })
    }catch(err){
        res.status(500).json({
            success:false,
            error:"internal server error"
        })
    }
}

module.exports = aiController
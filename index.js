import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.get("/", (req, res) => {
  res.send("server is running");
});

const obj = {
  is_success: "true",
  user_id: "keshav_sharma_07062003",
  email: "keshav0759.be21@chitkara.edu.in",
  roll_number: "2110990759",
  odd_numbers: [],
  even_numbers: [],
  alphabets: [],
};


app.post("/bfhl", (req, res) => {
  try {
    const {data} = req.body;
  const response = structuredClone(template);
  
  for(var i=0; i<data.length; i++){
    var ele = parseInt(data[i]);
    if(isNaN(ele)){
      response.alphebets.push(data[i].toUpperCase());
    }else{
      if(ele%2==0){
        response.even_numbers.push(ele);
      }else{
        response.odd_numbers.push(ele);
      }
    }
    
  }
  res.json(response);
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

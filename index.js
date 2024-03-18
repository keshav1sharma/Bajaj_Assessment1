import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

const obj = {
  is_success: true,
  user_id: "keshav_sharma_07062003",
  email: "keshav0759.be21@chitkara.edu.in",
  roll_number: "2110990759",
  odd_numbers: [],
  even_numbers: [],
  alphabets: [],
};




app.post("/bfhl", (req, res) => {
  const data = req.body;
  const response = obj;

  data.forEach((ele) => {
    // Check whether the element contains alphabets or numbers
    if (ele[0] >= "0" && ele[0] <= "9") {
      ele = parseInt(ele); // Convert the element to an integer
      console.log(ele);
      if (ele % 2 === 0) {
        response.even_numbers.push(ele);
      } else {
        response.odd_numbers.push(ele);
      }
    } else {
      response.alphabets.push(ele.toUppercase());
    }
  });

  // Send the modified response object
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

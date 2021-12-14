// output names for Secret Santa project
const names = ["Michel Scott", "Dwight Schrute", "Jim Halpert", "Pam Beesley", "Jan Levinson", "Kevin Malone", "Toby Flenderson", "Angela Martin", "Andy Bernard", "Stanley Hudson", "Ryan Howard", "Kelly Kapoor"];

for (let i = 0; i < names.length; i++)
{
  console.log(names[i]);
}

// pair participants and output the pairs

for (let giver = 0; giver < names.length; giver += 1)  {
  for (let receiver = 0; receiver < names.length; receiver +=1) {
    console.log(`${giver} gets present for ${receiver}`);
  }
}

// display name buys gift for name

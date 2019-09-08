// Write your code in this file!
function scuberGreetingForFeet(distance) { 
  if (distance <= 400) {return 'This one is on me!'}
  else if (distance > 2000 && distance <= 2500) {return 'I will gladly take your thirty bucks.'}
  else if (distance > 2500) {return 'No can do.'}
}

function ternaryCheckCity(city) {
  let response
  city === 'NYC' ? response = "Ok, sounds good." : response = "No go.";
  return response;
}
//returns "Ok, sounds good." when the city is NYC
//should return "No go." if the destination city is not NYC

function switchOnCharmFromTip(tip) {
  let response;
  switch (tip) {
  case tip === 'generous':
  response = "Thank you so much.";
  break;
  case tip !== 'generous' && tip !== 0:
  response = "Thank you.";
  break;
  default
  response = "Bye."}
}
//"Thank you so much." if the tip is generous
//"Thank you." if the tip is not as generous
//"Bye." if anything else
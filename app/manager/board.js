var ticketTag = require('ticket-tag');

module.exports = {
  updateFromImage: updateFromImage
};

function updateFromImage(imageBuffer) {
  var tags = ticketTag.extractFromImage(imageBuffer);
  return tags; 
}

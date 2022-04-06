let today = function()
{console.log(new Date().toLocaleDateString())}

let month = function()
{console.log(new Date().getMonth()+1)}

let getBatchInfo = function ()
{ console.log('Thorium, W3D4, the topic for today is Nodejs module system')}


module.exports.today = today
module.exports.month = month
module.exports.getBatchInfo = getBatchInfo
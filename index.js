const franc = require("franc");
const langs = require('langs');
const colors = require('colors')
let input = process.argv[2];
let langCode = franc(input);
let langName = langs.where("3", langCode);
//console.log(langCode);
if (langName){
    console.log(`Our best guess is: ${langName.name}`.green);
}else{
    console.log("LANGUAGE NOT FOUND".red);
}
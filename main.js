var images =
["https://image.shutterstock.com/image-vector/big-family-on-white-background-260nw-432310756.jpg",
"https://www.clipartmax.com/png/middle/243-2439854_mother-cartoon-clip-art-animated-mom-png.png",
"https://cdn1.vectorstock.com/i/1000x1000/76/80/cartoon-dad-vector-10157680.jpg",
"https://img.favpng.com/14/6/22/clip-art-image-cartoon-girl-daughter-png-favpng-jBvdzJn67WPP82MPyqRjXdu3U.jpg",
"https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170515350/79062792-cartoon-boy-kid-son-family-image-vector-illustration.jpg",
"https://cdn4.vectorstock.com/i/1000x1000/46/13/cute-grandfather-cartoon-vector-17814613.jpg",
"https://www.pngarts.com/files/8/Grandmother-Cartoon-PNG-Photo.png"]; 
var names =
["Family Book","Mother","Dad","Daughter","Son","Grandfather","Grandmother"];
var i=0;
function next(){
    i++;
var family_member=6;
if (i>family_member) {
    i=0;
}
    document.getElementById("image_1").src=images[i];
document.getElementById("my_name").innerHTML=names[i];
}
console.log(names);
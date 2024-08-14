/*
Text Contents Exporter 1.0.3
A Javascript for Adobe Illustrator

Purpose:
Exports a list of all active text objects'
contents into a txt file on your desktop.

How To Use:
Activate/Show/Make visible all the text objects
you want a list of. The script will copy the
contents and create a list separated by a new line
for every text object.

Limitations:
It does not copy the names of the objects, if you
renamed your text object, it will only copy the
contents.

BY Ken Cxandre (kr4kken)
Website: www.kr4kken.com
*/

var doc = app.activeDocument;  
var docTitle = doc.name;
var docTitle = docTitle.substring(0, docTitle.length - 3);
var textFile = File('~/Desktop/' + docTitle +'_Items.txt');

var docRef = app.activeDocument;
var docTextFrames = docRef.textFrames;
const docText = [];

for (var i=0; i < docTextFrames.length; i++){
	docText[i] = docRef.textFrames[i].contents;
}

textFile.open('e');
for (var p=0; p < i; p++){
	textFile.write(docText[p] + '\r');
}
textFile.close();
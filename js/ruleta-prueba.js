let theWheel = new Winwheel({
  'canvasId':'myCanvas',
  'numSegments': 4,
  'textOrientation': 'vertical',
  'textFontFamily' : 'Verdana', 
  'textFontSize' : 20,
  'segments': [
    {'fillStyle' : '#eae56f', 'text': 'Segment 1'},
    {'fillStyle' : '#89f26e', 'text': 'Segment 2'},
    {'fillStyle' : '#7de6ef', 'text': 'Segment 3'},
    {'fillStyle' : '#e7706f', 'text': 'Segment 4'}
  ]
});


function changeColours(){
  let temp = theWheel.segments[1].fillStyle;
  theWheel.segments[1].fillStyle = theWheel.segments[2].fillStyle;
  theWheel.segments[2].fillStyle = theWheel.segments[3].fillStyle;
  theWheel.segments[3].fillStyle = theWheel.segments[4].fillStyle;
  theWheel.segments[4].fillStyle = temp;

  theWheel.draw();  
}



function addSegment(){
  // Use a date object to set the text of each added segment to the current minutes:seconds
  // (just to give each new segment a different label).
  let date = new Date();

  // The Second parameter in the call to addSegment specifies the position,
  // in this case 1 meaning the new segment goes at the start of the wheel.
  theWheel.addSegment({
    'text' : date.getMinutes() + ':' + date.getSeconds(),
    'fillStyle': 'agua'
  });

  // The draw method of the wheel object must be called in order for the changes
  // to be rendered.
  theWheel.draw();
}

function deleteSegment(){
  // Call function to remove a segment from the wheel, by default the last one will be
  // removed; you can pass in the number of the segment to delete if desired.
  theWheel.deleteSegment();
  // The draw method of the wheel object must be called to render the changes.
  theWheel.draw();
}
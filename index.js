var takeANumber = (line,name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

var nowServing = line => {
  if( line.length>0 ) {
    return `Currently serving ${line.shift()}.`;
  } else {
     return "There is nobody waiting to be served!";
  }
};

var currentLine = line => {
  if( line.length>0 ) {
    let string="";
    for( let l=0; l<line.length; l++ ) {
      
    }
    return string;
  } else {
    return "The line is currently empty.";
  }
} 
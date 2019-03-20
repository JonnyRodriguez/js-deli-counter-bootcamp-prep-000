var takeANumber = (line,name) => {
  line.push(name);
  return `Welcome, $[name]. You are number $[line.length] in line.`;
};

var nowServing = line => {
  if( line.length>0 ) {
    let person=line.shift();
    
  }
}
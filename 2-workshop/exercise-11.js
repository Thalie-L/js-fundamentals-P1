function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid.
  // At each position of the grid there is either an "_" or a "#" character.
  // The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------

      let line= string=""; 

      for(let number=0 ; number<=7 ; number++ )
      {
       
        for(let i=0 ; i<=7 ; i++ )
        {
          if (number%2==0 && i%2==0)
          {
            line = line +"#";
          }
          if (number%2==0 && i%2==1)
          {
            line = line +"_";
          }

          if (number%2==1 && i%2==1)
          {
            line = line +"#";
          }
          if (number%2==1 && i%2==0)
          {
            line = line +"_";
          }
          
          
        }
        console.log(line);
        line = "";
       
      } 
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-11
exercise11();
module.exports = exercise11;

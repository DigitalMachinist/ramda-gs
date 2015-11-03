/* global Logger:false */

function R() 
{

  /* global R */

  return R;

}

function test()
{
  var r = R();
  Logger.log( Object.keys( r ) );
}

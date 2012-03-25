/* 
 * The contents of this file is licenced. You may obtain a copy of
 * the license at http://sieve.mozdev.org or request it via email 
 * from the author. Do not remove or change this comment. 
 * 
 * The initial author of the code is:
 *   Thomas Schmid <schmid-thomas@gmx.net>
 */
 
 "use strict";
 
function SieveSetFlagUI(elm)
{
  SieveActionBoxUI.call(this,elm);
}

SieveSetFlagUI.prototype.__proto__ = SieveActionBoxUI.prototype;

SieveSetFlagUI.prototype.initSummary
    = function ()
{
  return $(document.createElement("div"))
           .text("Set IMAP flag");  
}



function SieveAddFlagUI(elm)
{
  SieveActionBoxUI.call(this,elm);
}

SieveAddFlagUI.prototype.__proto__ = SieveActionBoxUI.prototype;

SieveAddFlagUI.prototype.initSummary
    = function ()
{
  return $(document.createElement("div"))
           .text("Add IMAP flag");  
}



function SieveRemoveFlagUI(elm)
{
  SieveActionBoxUI.call(this,elm);
}

SieveRemoveFlagUI.prototype.__proto__ = SieveActionBoxUI.prototype;

SieveRemoveFlagUI.prototype.initSummary
    = function ()
{
  return $(document.createElement("div"))
           .text("Remove IMAP flag");  
}



function SieveHasFlagUI(elm)
{
  SieveTestBoxUI.call(this,elm);  
}

SieveHasFlagUI.prototype.__proto__ = SieveTestBoxUI.prototype;


SieveHasFlagUI.prototype.initSummary
    = function()
{
  return $(document.createElement("div"))
           .text("Has IMAP flag");   
}
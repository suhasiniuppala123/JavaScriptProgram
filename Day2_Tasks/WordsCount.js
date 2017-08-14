function wordsCount(str) {
if(str.trim().length===0)
{
return str.trim().length
}
else
{
return str.trim().replace(/\s+/g,' ').split(' ').length;
}
}


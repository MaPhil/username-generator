# Random username generator

This is a simple package to create random usernames. To user it simply make these commands


```javascript
var rug = require('random-username-generator');
var new_username = rug.generate();
```

If you want to set an array of name (nouns) and or adjectives use these commands.


```javascript
var rug = require('random-username-generator');

rug.setName(['new name']);
rug.setAdjectives(['new adjective']);

var new_username = rug.generate();
```

If you want to use a different seperator commands.


```javascript
var rug = require('random-username-generator');

rug.setSeperator('_');

var new_username = rug.generate();
```

# file-exits
Check if a file exists

## install
```javascript
    npm install --save file-exists-helper

```

## Usage
```javascript
  const checkHelper = require('file-exists-helper');

  checkHelper.check('./hello.txt', function(flag){
  	console.log(flag);
  })


  var flag2 = checkHelper.checkSync('./hello.txt');

```
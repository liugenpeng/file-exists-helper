# file-exits
Check if a file exists

## install
```javascript
    npm install --save file-exists

```

## Usage
```javascript
  const checkHelper = require('files-exists');

  checkHelper.check('./hello.txt', function(flag){
  	console.log(flag);
  })


  var flag2 = checkHelper.checkSync('./hello.txt');

```
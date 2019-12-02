# DCMotor Pop-Up V0.1
React application intended to be embedded inside of an existing webpage

## Testing App
Add an new root div at the bottom of the body tag
```
<div id="root"></div>
```

Then at the bottom of the page, after the body tag, add these scripts
```
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://yurlovandrew.000webhostapp.com/dist/bundle.js"></script>
```

At the top of the page in the header tag add these emailjs scripts.
```
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
<script type="text/javascript">
    (function(){
        emailjs.init("user_uWcRkBeyFupZSPPN4gzu0"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
    })();
</script>
```

If everything is done correctly the popup should come up in about 30 seconds after page load. Fill out the information and hit "Schedule". If successfull you will get an "Email successfully sent!" in the console.
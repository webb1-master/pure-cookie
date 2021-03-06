# pure-cookie

Ett plugin för att hantera cookie popups med egen text

## Användning

### Standard config

- Skapa en div längst upp i body med id:et pure-cookie
- Länka till pure-cookie.min.css filen i head
- Länka till pure-cookie.min.js filen längst ner i body

```html
<!DOCTYPE html>
<html lang="sv-SE">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="path/to/pure-cookie.min.css" />
    <title>pureCookie</title>
  </head>
  <body>
    <div id="pure-cookie"></div>

    ...
    <script src="path/to/pure-cookie.min.js"></script>
  </body>
</html>
```

![pure-cookie](assets/pure-cookie.png "pure-cookie standard config")

### Custom config

Skapa en div längst upp i body med id:et pure-cookie och skriv din egna popup text inuti diven

```html
<!DOCTYPE html>
<html lang="sv-SE">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="pure-cookie.css" />
    <title>pureCookie</title>
  </head>
  <body>
    <div id="pure-cookie">Välkommen till min sida. Här använder vi cookies</div>

    ...
  </body>
</html>
```

![pure-cookie](assets/pure-cookie-custom.png "pure-cookie custom config")

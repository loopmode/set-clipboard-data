# set-clipboard-data

Sets data to the clipboard via `document.execComand("copy")` and returns a promise.

The promise is resolved when the data has been set to the clipboard. This is detected via `document.addEventListener("copy")`.
It is rejected if the clipboard does not contain the specified value after the `copy` event, or if the event is not fired after a specific time (`rejectTimeout` option)

## Usage

```javascript
import setClipboardData from '@loopmode/set-clipboard-data';

async function handleCopyClick() {
    const clipboardValue = await setClipboardData(this.state.currentValue);
    console.log('done!', clipboardValue);
}

```

### Options

Signature:

```javascript
setClipboardData(data = '', { mime = 'text/plain', timeout = 60000 } = {})
```

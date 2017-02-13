## Directory Structure
```
styles/
|
|-- modules/              # Common modules
|   |-- _all.styl         # Include to get all modules
|   |-- _utility.styl     # Module name
|   |-- _colors.styl      # Etc...
|   ...
|
|-- partials/             # Partials
|   |-- _base.sass        # imports for all mixins + global project variables
|   |-- _buttons.styl     # buttons
|   |-- _figures.styl     # figures
|   |-- _grids.styl       # grids
|   |-- _typography.styl  # typography
|   |-- _reset.styl       # reset
|   ...
|
|-- vendor/               # Styles from other projects
|   |-- _colorpicker.styl
|   |-- _jquery.ui.core.styl
|   ...
|
`-- main.styl            # primary file
```


### Modules Directory
> The modules directory is reserved for stylus code that doesn't cause stylus to actually output css. Things like mixin declarations, functions and variables.

### Partials Directory
> The partials directory is where the meat of my css is constructed. Alot of folks like to break their stylesheets into header, content, sidebar, and footer components )and a few others). Here we are instructed to break things down into  a finer category (typography, buttons, textboxes, selectboxes, etc)

### Vendor Directory
> Vendor category is used for third party libraries. Like jquery ui or bootstrap.

## Examples

**partials/base.styl**
```stylus
// Font weights
$light: 100;
$regular: 400;
$bold: 600;

// Base Font
$base-font-family: sans-serif;
$base-font-weight: $regular;
$base-font-size: 13px;
$base-line-height: 1.4;

// Fixed Font
$fixed-font-family: monospace;
$fixed-font-size: 85%;
$fixed-line-height: $base-line-height;

// Headings
$header-font-weight: $bold;

@import "modules/all";

```

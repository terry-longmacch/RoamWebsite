---
icon: versions
order: v2.2
---

# Changelog for Roam 2.2

List of new features and changes in Roam 2.2

[Release Files](https://github.com/terry-longmacch/Roam/releases/tag/v2.2)

## Major Features

* [[Built on QGIS 2.4|https://i.chzbgr.com/maxW500/465448704/hAA7ACF3A/]]
* Info2 and Info1 block support (SQL Server only at the moment)
* [[Support for enable/disable of capture, edit, edit geom modes on layers|Select-Config#setting-active-tools]]
* [[Plugin model for extra side pages|Plugins]]
* [[Better link support in info panel|Info-Links]]
* Image file saving support
  * Images are now stored in the `_images` folder in the project folder. The file name is based on a date time stamp
* Search in list widgets.

## New Widgets

### Option widget

![optionrow](../images/optionrow.png)
![optionrow](../images/optionrow2.png)

Option row buttons can also have colour assigned for each button when selected
 
![optionrow](../images/optionrow3.PNG)

### Stepper buttons for numbers

![stepper](../images/stepper.png)

### Multi select lists

![multilist](../images/multilist.png)

## Minor Changes

* Logs now in new logs\ folder (Added by [[Heather|https://github.com/terry-longmacch/Roam/pull/141]])
* Expand Info panel for more room.
* `max_value('layer', 'field')` default function
* Remember value button config in config manager
* [Other fixes](https://github.com/terry-longmacch/Roam/issues?q=milestone%3A%222.2+-+Plugins+and+Customisation%22+is%3Aclosed)

## API Changes

* Forms on attribute forms (to support embedded forms with no geometry) 
* Cleaner API for adding emended widgets on the form.

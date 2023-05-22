---
icon: info
order: 85
---

# Advanced Selections

Roam will try to automatically handle URLs to websites and files in the info panel.  It will also try and display a file based, base64, or binary image.  If all else fails it will just display the string value.

**Link format** 

Links to websites should start wtih `http://` and links to files should start with `file:///`. Roam will check for both these and try to create a valid URL.

**Replace URL with alias**

The full URL can be aliased by appending `|alias` to the end of the URL string.  Example `http://google.com|Google` will just display as `Google` as a hyperlink in the info panel.

## Selection Configuration

Select config is a advanced section you can add to the projects in order to control the
information shown in the info panel.

## Setting Active Tools

You can control the tools that are available for a given layer with the following config. 

## SQL Info Blocks

SQL Info1 and Info2 blocks are only supported currently on SQL Server and SQLite based layers.

Info1 queries will control the first block of information that is displayed when selecting a feature. Normally this is 
a simple dump of attribute from the feature however by using a info query you are able to control the display. 

A Info2 query can show related records to the selected feature. This is a 1:M result when shown to the user. Any records
 returned in the info2 query will be shown as a new block of data.

All attributes of the selected feature are passed into the query and can be accessed using 
the `:` prefix e.g `:type`, `:name` where type and name are field names.


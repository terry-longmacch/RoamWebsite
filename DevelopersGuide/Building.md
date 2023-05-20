---
icon: code-square
order: 10
---

# Building From Source

If you are planning on doing any development work on Roam or are wanting to stay current with recent changes you will need to build from source.

## Initial Software Installs

In order to build Roam from source, the following software will need to be installed on the host computer.

#### [OSGeo4W](https://trac.osgeo.org/osgeo4w/)

OSGeo4W includes software dependencies including QGIS, PyQt5, Python and GDAL.

During installation select the `Advanced Installation` option.  Then choose the following options at a minimum.

- Desktop
    - `qgis` or `qgis-ltr`
- Libs
    - `gdal`
    - `gdal-ecw`
    - `python3-pip`

### [InnoSetup](https://jrsoftware.org/isdl.php) (Optional)

While Roam can be distributed as a ZIP file, InnoSetup can be used to automate the process of building a Windows installer.

### Qt Linquist (Optional)

If you would like to compile .ts language translation files `lrelease.exe` needs to be installed on the computer.  This program does not come packaged in OSGeo4W, but potentially might be installed using `pip`.  Otherwise installers can be found on the internet, but care should be taken to verify the source as trustworthy.

---

## Environment Variables

A number of environment variables are specified in the `scripts\setenv.bat` script.

For standard installs of the software described above, it is unlikely any changes will be required.  However, if software is installed in non-standard locations, this file may need to be edited.

It is best to review this file, just to ensure it seems accurate.

---

## Building

The main build script is `build.bat` in the base folder of the Roam source code.

In Windows, open a command prompt (`cmd.exe`) and navigate to the base folder of the source code.

The build script supports the following options:

- build
- zip
- installer
- release
- design
- watch
- test
- test-only
- api-docs

These options perform the following actions.

### Build

    build build

or simply

    build

Cleans up previous builds, downloads any required dependencies using `pip`, then compiles and builds the `Roam.exe` and `ConfigManager.exe` executables in the `build` folder.

### Zip

    build zip

Combines all of the files in the `build` folder into a zip file called `Roam.zip`, that can be found in the `release` folder.

For the zip, installer and release options you can append another parameter onto the command to include version information in the new file name.

For instance:

    build zip " 3.1 Beta"

will produce a file named `Roam 3.1 Beta.zip`.

For all commands you can also use the greater than symbol to capture the command output in a file.

For example:

    build zip " 3.1 Beta" > build_zip.log

will capture the command output to the `build_zip.log` file.

### Installer

    build installer

Uses InnoSetup to compile a `Roam Installer.exe` file in the `release` folder.

### Release

    build release

Runs the full build.  Equivalent to running build, zip and installer individually.

### Design

    build design

Opens the Qt Designer application, which can be used as a graphical interface to edit the various `.ui` files.

When these files are compiled using `build` a python `.py` file will be created.  These `.py` should never be edited themselves, as they will be overwritten next time `build` is run.

### Watch

    build watch

A background task that can be run while `.ui` files are being edited, in order to see changes made without having to run a complete `build`.  See section on [Running](#running).

### Test

    build test

Performs various unit tests on the software.  Produces a html report.

### Test-only

    build test-only

Performs the same tests as `test`, but does not produce the html report.

### Api-docs

    build api-docs

Produces basic API reporting using the [Pdoc API Documentation](https://pdoc.dev/).

---

## Running

Besides running the executable created as a result of the build process, it is possible to run both Roam and ConfigManager directly from source.

This can be useful in cases where changes need to be made, but you want to quickly see results, without completely re-building the application every time.  This can be used in conjunction with `build watch` when working with `.ui` files.

To run Roam execute the `run.bat` script, while ConfigManager can be started using the `run_config.bat` script in the command prompt.
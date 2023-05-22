---
icon: workflow
order: 4
---

# Custom Form Logic

Logic can be written into a form to change how it behaves under certain conditions.  This logic is written in Python, and is added to the `form.py` file under the specific form's folder.

An example of this is the code below which shows or hides fields in the form depending on the value of the `asset_type` field.

```
"""
Template custom logic module.
"""
from roam.api import FeatureForm, RoamEvents, utils


class Form(FeatureForm):
    def __init__(self, *args, **kwargs):
        super(Form, self).__init__(*args, **kwargs)

    def uisetup(self):
        """
        Called when the UI is fully constructed.  You should connect any signals here.
        """
        self.boundwidgets['asset_type'].valuechanged.connect(self.assettypehandler)
        pass

    def assettypehandler(self, value):
        if value == 'Sealed Road':
            self.boundwidgets['crocodile_cracking'].hidden = False
            self.boundwidgets['shoving'].hidden = False
            self.boundwidgets['surface_cracks'].hidden = False
            self.boundwidgets['stripping'].hidden = False
            self.boundwidgets['bleeding'].hidden = False
            self.boundwidgets['edge_break'].hidden = False
            self.boundwidgets['edge_drop'].hidden = False
            self.boundwidgets['gravel_depletion'].hidden = True
        elif value == 'Gravelled Road':
            self.boundwidgets['crocodile_cracking'].hidden = True
            self.boundwidgets['shoving'].hidden = True
            self.boundwidgets['surface_cracks'].hidden = True
            self.boundwidgets['stripping'].hidden = True
            self.boundwidgets['bleeding'].hidden = True
            self.boundwidgets['edge_break'].hidden = True
            self.boundwidgets['edge_drop'].hidden = True
            self.boundwidgets['gravel_depletion'].hidden = False
        elif value == 'Formed Road':
            self.boundwidgets['crocodile_cracking'].hidden = True
            self.boundwidgets['shoving'].hidden = True
            self.boundwidgets['surface_cracks'].hidden = True
            self.boundwidgets['stripping'].hidden = True
            self.boundwidgets['bleeding'].hidden = True
            self.boundwidgets['edge_break'].hidden = True
            self.boundwidgets['edge_drop'].hidden = True
            self.boundwidgets['gravel_depletion'].hidden = True
        elif value == 'Unformed Road':
            self.boundwidgets['crocodile_cracking'].hidden = True
            self.boundwidgets['shoving'].hidden = True
            self.boundwidgets['surface_cracks'].hidden = True
            self.boundwidgets['stripping'].hidden = True
            self.boundwidgets['bleeding'].hidden = True
            self.boundwidgets['edge_break'].hidden = True
            self.boundwidgets['edge_drop'].hidden = True
            self.boundwidgets['gravel_depletion'].hidden = True
```
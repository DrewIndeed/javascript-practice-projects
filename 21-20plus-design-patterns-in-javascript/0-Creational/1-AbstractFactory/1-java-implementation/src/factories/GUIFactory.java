package factories;

import buttons.Button;
import checkboxes.Checkbox;

/*
* ABSTRACT FACTORY
*/
public interface GUIFactory {
  Button createButton();
  Checkbox createCheckbox();
}

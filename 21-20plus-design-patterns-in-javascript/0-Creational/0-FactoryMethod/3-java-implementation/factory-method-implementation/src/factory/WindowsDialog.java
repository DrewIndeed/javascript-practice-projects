package factory;

import buttons.*;

/**
 * CONCRETE CREATOR 2
 * 
 * Windows Dialog will produce Windows buttons.
 */
public class WindowsDialog extends Dialog {

  @Override
  public Button createButton() {
      return new WindowsButton();
  }
}
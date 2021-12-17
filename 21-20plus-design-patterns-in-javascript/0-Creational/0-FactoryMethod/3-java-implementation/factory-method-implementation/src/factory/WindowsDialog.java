package factory;

import buttons.*;

/**
 * Windows Dialog will produce Windows buttons.
 */
public class WindowsDialog extends Dialog {

  @Override
  public Button createButton() {
      return new WindowsButton();
  }
}
package factory;

import buttons.*;

/**
 * CONCRETE CREATOR 1
 * 
 * HTML Dialog will produce HTML buttons.
 */
public class HtmlDialog extends Dialog {

  @Override
  public Button createButton() {
      return new HtmlButton();
  }
}

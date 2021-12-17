package buttons;

/**
 * Concrete product 1
 * HTML button implementation.
 */
public class HtmlButton implements Button {
    public void render() {
        System.out.println("--- RENDER HTML BUTTON ---");
        onClick();
    }

    public void onClick() {
        System.out.println("--- CLICKED HTML BUTTON ---");
    }
}

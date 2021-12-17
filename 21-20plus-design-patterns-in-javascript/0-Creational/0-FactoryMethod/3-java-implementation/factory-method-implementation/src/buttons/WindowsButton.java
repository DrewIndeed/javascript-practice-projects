package buttons;

/**
 * Concrete product 2
 * WINDOW button implementation.
 */
public class WindowsButton implements Button {

    public void render() {
        System.out.println("--- RENDER WINDOW BUTTON ---");
        onClick();
    }

    public void onClick() {
        System.out.println("--- CLICKED WINDOW BUTTON ---");
    }
}

export interface CheckoutComponentProps {
    /**
     * The ID of the current checkout process.
     */
    checkoutId: string;

    /**
     * The ID of the step currently rendered in the checkout page.
     * Can be one of the following:
     * - 'contact-details'
     * - 'delivery-method'
     * - 'payment-and-billing'
     * - 'place-order'
     */
    stepId: 'contact-details' | 'delivery-method' | 'payment-and-billing' | 'place-order';
}

export interface ProductsComponentProps {
    /**
     * The ID of the product.
     */
    productId: string;
}

export interface OrderComponentProps {
    /**
     * The ID of the order.
     */
    orderId: string;

    /**
     * Callback that notifies the host page about an order update, prompting a UI refresh. 
     * It returns a promise indicating when the UI update on the host page is complete.
     */
    onOrderUpdate: () => Promise<void>;
}

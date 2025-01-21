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
     * The ID of the product
     */
    productId: string;
  }

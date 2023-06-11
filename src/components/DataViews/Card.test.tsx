import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders the card with the correct image, product name, and product line', async() => {
    const imgUrl = 'https://ui.com/id=29728282972848_image.png';
    const productName = 'Product Name';
    const productLine = 'Product Line';

    render(
      <Card
        imgUrl={imgUrl}
        productName={productName}
        productLine={productLine}
      />
    );

    const images = await screen.findAllByAltText("Product Name");
    expect(images).toBeInTheDocument();
  });
});
export { };


import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders the card with the correct image, product name, and product line', () => {
    const imgUrl = 'https://ui.com/id=29728282972848_image.png';
    const productName = 'Product Name';
    const productLine = 'Product Line';

    render(<Card imgUrl={imgUrl} productName={productName} productLine={productLine} />);

    const image = screen.getByAltText(productName);
    expect(image).toBeInTheDocument();
    expect(image.getAttribute('src')).toBe(imgUrl);

    const productNameElement = screen.getByRole('heading', { level: 2 });
    expect(productNameElement).toHaveTextContent(productName);

    const productLineElement = screen.getByText(productLine);
    expect(productLineElement).toBeInTheDocument();
  });
});
export { };

